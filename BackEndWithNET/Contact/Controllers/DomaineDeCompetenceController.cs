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
    [Route("api/DomaineDeCompetence")]
    public class DomaineDeCompetenceController : Controller
    {
        private readonly ExchangeContext _context;

        public DomaineDeCompetenceController(ExchangeContext context)
        {
            _context = context;

        }


        [HttpGet]
        public List<DomaineCompetence> GetAll()
        {

            return _context.domaineCompetences.ToList();
        }

        //[HttpGet("{id}")]
        //public List<DomaineCompetence> GetAllComptOfUser(long id)
        //{

        //    return _context.domaineCompetences.Where(x => x.UserID == id).ToList();
        //}

        [HttpGet("{id}", Name = "GetTodo")]
        public DomaineCompetence GetById(long id)
        {
           var item = _context.domaineCompetences.Find(id);
            if (item == null)
            {
                return null;
           }
            return item;
        }

        [HttpPost("{id}")]
        public IActionResult AssociateToUser(long id, [FromBody] DomaineCompetence item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var obj = _context.users.Find(id);
            obj.DomaineCompetences.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetDomaine", new { id = item.Id }, item);
        }



    }



}