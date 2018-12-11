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
    [Route("api/Proposition")]
    public class PropositionController : Controller
    {
        private readonly ExchangeContext _context;

        public PropositionController(ExchangeContext context)
        {
            _context = context;
        }


        [HttpGet]
        public List<Proposition> GetAll()
        {
            return _context.propositions.ToList();
        }



        public List<Proposition> GetAllPropOfUser(long id)
        {
             return _context.propositions.Where(x => x.UserID == id).ToList();
        }



        [HttpGet("{id}", Name = "GetTodo")]
       public Proposition GetById(long id)
        {
            var item = _context.propositions.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        [HttpPost]
        public IActionResult Create([FromBody] Proposition item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.propositions.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetProposition", new { id = item.Id }, item);
        }
        
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            var itemToRemove = _context.propositions.SingleOrDefault(r => r.Id == id);
            if (itemToRemove != null)
                _context.propositions.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }



}