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
    [Route("api/Follower")]
    public class FollowerController : Controller
    {
        private readonly ExchangeContext _context;

        public FollowerController(ExchangeContext context)
        {
            _context = context;

        }
        [HttpGet]
        public List<Follower> GetAll()
        {

            return _context.followers.ToList();
        }

        [HttpGet("{id}")]
        public List<Follower> GetAllFollowerOfUser(long id)
        {

            return _context.followers.Where(x => x.Id == id).ToList();
        }

        //[HttpGet("{id}", Name = "GetTodo")]
        //public Follower GetById(long id)
        //{
        //    var item = _context.followers.Find(id);
        //    if (item == null)
        //    {
        //        return null;
        //    }
        //    return item;
        //}

    }
}