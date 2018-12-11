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
    [Route("api/PropositionService")]
    public class PropositionServiceController : Controller
    {
        private readonly ExchangeContext _context;

        public PropositionServiceController(ExchangeContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //public List<PropositionService> GetAll()
        //{

        //   return _context.propositionProposition.ToList();
        //}

        [HttpGet("{id}", Name = "GetPropositionOffre")]
        public PropositionOffrePrix GetById(long id)
        {
            var item = _context.PropositionOffrePrixes.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }


        [HttpPost]
        public IActionResult Create([FromBody] PropositionOffrePrix item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            _context.PropositionOffrePrixes.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetPropositionOffrePrix", new { id = item.Id }, item);
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            var itemToRemove = _context.PropositionOffrePrixes.SingleOrDefault(r => r.Id == id);
            if (itemToRemove != null)
                _context.PropositionOffrePrixes.Remove(itemToRemove);
            _context.SaveChanges();
        }
    }



}