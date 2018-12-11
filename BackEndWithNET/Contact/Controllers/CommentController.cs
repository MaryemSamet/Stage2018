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
    [Route("api/Comment")]
    public class CommentController : Controller
    {
        private readonly ExchangeContext _context;

        public CommentController(ExchangeContext context)
       {
            _context = context;

        }

        //[HttpGet("{id}")]
        //public List<Comment> GetAllCommentOfAnnonce(long id)
        //{

        //    return _context.comments.Where(x => x.AnnonceID=id).ToList();
        //}

        //[HttpGet("{id}", Name = "GetComment")]
        //public List<Comment> GetAllCommentAnnonce(long idAnnonce)
        //{
        //    List<Comment> result = _context.comments.Where(x => x.AnnonceID == idAnnonce);
        //    return result.ToList();
        //}
        [HttpGet("{id}", Name = "GetComment")]
        public Comment GetById(long id)
        {
            var item = _context.comments.Find(id);
            if (item == null)
            {
                return null;
           }
            return item;
      }


        [HttpPost("{id}")]
        public IActionResult Create(long id, [FromBody] Comment item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.comments.Add(item);

            var obj = _context.annonces.Find(id);
            obj.Comments.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetComment", new { id = item.ID }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Comment item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var commentObj = _context.comments.Find(id);
            if (commentObj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.comments.SingleOrDefault(r => r.ID == id);
           if (itemToUpdate != null)
            {
                itemToUpdate.Contenu = item.Contenu;
                itemToUpdate.DateComment = item.DateComment;
                
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