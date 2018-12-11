using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contact.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Contact.Controllers
{
    [Produces("application/json")]
    [Route("api/AnnonceBesoin")]
    public class AnnonceBesoinController : Controller
    {
        private readonly ExchangeContext _context;

        public AnnonceBesoinController(ExchangeContext context)
        {
            _context = context;

        }

        //[HttpGet("{id}", Name = "GetComment")]
        //public List<Comment> GetAllCommentAnnonce(long idAnnonce)
        //{
        //    List<Comment> result = _context.comments.Where(x => x.AnnonceID == idAnnonce);
        //    return result.ToList();
        //}

        [HttpGet]
        public List<AnnonceBesoin> GetAllAnnonceBesoin()
        {

            return _context.annonceBesoins.ToList();
        }

        [HttpGet("{id}")]
        public List<AnnonceBesoin> GetAllAnnonceBesoinOfUser(long id)
        {

            return _context.annonceBesoins.Where(x => x.UserID==id).ToList();
        }

        [HttpGet("{id}", Name = "GetAnnonceBesoin")]
        public AnnonceBesoin GetById(long id)
        {
            var item = _context.annonceBesoins.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        [HttpPost("{id}")]
        public IActionResult Create(long id ,[FromBody] AnnonceBesoin item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.annonceBesoins.Add(item);
            var userObj = _context.users.Find(id);
            userObj.ListAnnonceBesoins.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetAnnonceBesoin", new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] AnnonceBesoin item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var annonceBesoinobj = _context.annonceBesoins.Find(id);
            if (annonceBesoinobj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.annonceBesoins.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Cout = item.Cout;
                itemToUpdate.DatePublication = item.DatePublication;
                itemToUpdate.Description = item.Description;
                itemToUpdate.DescriptionCompetence = item.DescriptionCompetence;
                itemToUpdate.DisponibiliteDemande = item.DisponibiliteDemande;
                itemToUpdate.Titre = item.Titre;



            }

            _context.SaveChanges();

            return new NoContentResult();
        }
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            var itemToRemove = _context.comments.SingleOrDefault(r => r.ID == id);
            if (itemToRemove != null)
                _context.comments.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }


}