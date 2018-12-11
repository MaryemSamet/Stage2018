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
    [Route("api/Annonce")]
    public class AnnonceController : Controller
    {
        private readonly ExchangeContext _context;

        public AnnonceController(ExchangeContext context)
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
        public List<Annonce> GetAll()
        {

            return _context.annonces.ToList();
        }

        [HttpPut("{id}")]
        public IActionResult MarquerFavori(long id)
        {
           
           
            var itemToUpdate = _context.annonces.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
               
                itemToUpdate.MarqueCommeFavori = true;
               
            }
            _context.SaveChanges();

            return new NoContentResult();
        }



        [HttpPut("{id}")]
        public IActionResult AddNbVue(long id)
        {


            var itemToUpdate = _context.annonces.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {

                itemToUpdate.NBMentionFavori = itemToUpdate.NBMentionFavori + 1 ;
                

            }
            _context.SaveChanges();

            return new NoContentResult();
        }


        [HttpGet("{id}")]
        public List<Annonce> GetAllFavori(long id)
        {

            return _context.annonces.Where( x => x.MarqueCommeFavori==true && x.UserID==id).ToList() ;
        }


        [HttpGet("{id}", Name = "GetAnnonce")]
        public Annonce GetById(long id)
        {
            var item = _context.annonces.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        

        //[HttpPut("{id}")]
        //public IActionResult Update(long id, [FromBody] Comment item)
        //{
        //    if (item == null)
        //    {
        //        return BadRequest();
        //    }
        //    var commentObj = _context.comments.Find(id);
        //    if (commentObj == null)
        //    {
        //        return NotFound();
        //    }
        //    var itemToUpdate = _context.comments.SingleOrDefault(r => r.ID == id);
        //    if (itemToUpdate != null)
        //    {
        //        itemToUpdate.Contenu = item.Contenu;
        //        itemToUpdate.DateComment = item.DateComment;

        //    }

        //    _context.SaveChanges();

        //    return new NoContentResult();
        //}
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            var itemToRemove = _context.annonces.SingleOrDefault(r => r.Id == id);
            if (itemToRemove != null)
                _context.annonces.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }


}