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
    [Route("api/Message")]
    public class MessageController : Controller
    {
        private readonly ExchangeContext _context;

        public MessageController(ExchangeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Message> GetAll()
        {
            return _context.messages.ToList();
        }
        

        [HttpGet("{id}", Name = "GetTodo")]
        public Message GetById(long id)
        {
            var item = _context.messages.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }
        [HttpPost("{id}")]
        public IActionResult Create(long id , [FromBody] Message item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.messages.Add(item);
            var obj = _context.discussions.Find(id);
            obj.Messages.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetMessage", new { id = item.Id }, item);
        }

        [HttpGet("{id}")]
        public List<Message> GetAllMessageOfDisc(long id)
        {

            return _context.messages.Where(x => x.DiscussionID== id).ToList();
        }

        //[HttpDelete("{id}")]
        //public void Delete(long id)
        //{
        //    var itemToRemove = _context.messages.SingleOrDefault(r => r.Id == id);
        //    if (itemToRemove != null)
        //        _context.messages.Remove(itemToRemove);
        //    _context.SaveChanges();
        //}
    }

}