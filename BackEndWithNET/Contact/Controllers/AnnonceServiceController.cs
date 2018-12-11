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
    [Route("api/AnnonceService")]
    public class AnnonceServiceController : Controller
    {
        private readonly ExchangeContext _context;

        public AnnonceServiceController(ExchangeContext context)
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
        public List<AnnonceService> GetAllAnnonceService()
        {

            return _context.annonceServices.ToList();
        }
        [HttpGet("{id}")]
        public List<AnnonceService> GetAllAnnonceServicefOfUser(long id)
        {

            return _context.annonceServices.Where(x => x.UserID == id).ToList();
        }
        [HttpGet("{id}", Name = "GetAnnonceService")]
        public AnnonceService GetById(long id)
        {
            var item = _context.annonceServices.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        [HttpPost]
        public IActionResult Create([FromBody] AnnonceService item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.annonceServices.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetAnnonceService", new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] AnnonceService item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var AnnonceServiceObj = _context.annonceServices.Find(id);
            if (AnnonceServiceObj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.annonceServices.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Titre = item.Titre;
                itemToUpdate.DisponibiliteService = item.DisponibiliteService;
                itemToUpdate.DescriptionBesoin = item.DescriptionBesoin;
                itemToUpdate.Description = item.Description;
                itemToUpdate.DatePublication = item.DatePublication;
                itemToUpdate.Cout = item.Cout;

            }
            _context.SaveChanges();

            return new NoContentResult();
        }


        //[HttpDelete("{id}")]
        //public void Delete(long id)
        //{
        //    var itemToRemove = _context.comments.SingleOrDefault(r => r.ID == id);
        //    if (itemToRemove != null)
        //        _context.comments.Remove(itemToRemove);
        //    _context.SaveChanges();
        //}
    }


}