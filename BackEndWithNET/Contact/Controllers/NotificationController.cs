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
    [Route("api/Notification")]
    public class NotificationController : Controller
    {
        private readonly ExchangeContext _context;

        public NotificationController(ExchangeContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Notification> GetAll()
        {

            return _context.notifications.ToList();
        }
        [HttpGet("{id}")]
        public List<Notification> GetAllNotifOfUser(long id)
        {

            return _context.notifications.Where(x => x.UserID == id).ToList();
        }

        //[HttpGet("{id}", Name = "GetTodo")]
        //public Notification GetById(long id)
        //{
        //    var item = _context.notifications.Find(id);
        //    if (item == null)
        //    {
        //        return null;
        //    }
        //    return item;
        //}


        [HttpPost("{id}")]
        public IActionResult Create(long id ,[FromBody] Notification item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.notifications.Add(item);
            var obj = _context.users.Find(id);
            obj.Notifications.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetNotification", new { id = item.Id }, item);
        }
       
    }
}