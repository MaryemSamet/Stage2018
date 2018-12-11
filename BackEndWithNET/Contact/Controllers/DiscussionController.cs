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
    [Route("api/Discussion")]
    public class DiscussionController : Controller
    {
        private readonly ExchangeContext _context;

        public DiscussionController(ExchangeContext context)
        {
            _context = context;

        }


        [HttpGet]
        public List<Discussion> GetAll()
        {
            return _context.discussions.ToList();
        }

        [HttpGet("{id}")]
        public List<Discussion> GetAllDiscOfUser(long id)
        {

            return _context.discussions.Where(x => x.UserID == id).ToList();
        }

        [HttpGet("{id}", Name = "GetDiscussion")]
        public Discussion GetById(long id)
        {
            var item = _context.discussions.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        [HttpPost("{idSender,idReceiver)")]
        public IActionResult Create(long idSender , long idReceiver , [FromBody] Discussion item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.discussions.Add(item);
            var objSender = _context.users.Find(idSender);
            objSender.Discussions.Add(item);
            var objReceiver = _context.users.Find(idReceiver);
            objReceiver.Discussions.Add(item);

            _context.SaveChanges();
            return CreatedAtRoute("GetDiscussion", new { id = item.Id }, item);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateEtat(long id)
        {
            
            var discussionObj = _context.discussions.Find(id);

            if (discussionObj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.discussions.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Etat = "échange confirmé";
                
           }
            _context.SaveChanges();
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            var itemToRemove = _context.discussions.SingleOrDefault(r => r.Id == id);
            if (itemToRemove != null)
                _context.discussions.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }
}