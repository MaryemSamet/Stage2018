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
    [Route("api/Following")]
    public class FollowingController : Controller
    {
        private readonly ExchangeContext _context;

        public FollowingController(ExchangeContext context)
        {
            _context = context;

        }
        [HttpGet]
        public List<Following> GetAll()
        {

            return _context.followings.ToList();
        }
        [HttpGet("{id}")]
        public List<Following> GetAllfollowingOfUser(long id)
        {

            return _context.followings.Where(x => x.Id == id).ToList();
        }
    }
}