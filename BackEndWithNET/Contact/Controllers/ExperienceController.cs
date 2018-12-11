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
    [Route("api/Experience")]
    public class ExperienceController : Controller
    {
        private readonly ExchangeContext _context;

       public ExperienceController(ExchangeContext context)
        {
            _context = context;

        }


        [HttpGet]
        public List<Experience> GetAll()
        {
            return _context.experiences.ToList();
        }

        [HttpGet("{id}")]
        public List<Experience> GetAllExperienceOfUser(long id)
        {

            return _context.experiences.Where(x => x.UserID == id).ToList();
        }
        [HttpGet("{id}", Name = "GetExperience")]
        public Experience GetById(long id)
        {
            var item = _context.experiences.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Experience item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.experiences.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetExperience", new { id = item.ID }, item);
        }
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Experience item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var toDoItemObj = _context.experiences.Find(id);
            if (toDoItemObj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.experiences.SingleOrDefault(r => r.ID== id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Titre = item.Titre;
                //il faut un contenu
            }

            _context.SaveChanges();

            return new NoContentResult();
        }
        [HttpDelete("{id}")]
        public void Delete(long id)
       {
            var itemToRemove = _context.experiences.SingleOrDefault(r => r.ID == id);
            if (itemToRemove != null)
                _context.experiences.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }


}