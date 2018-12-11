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
    [Route("api/User")]
    public class UserController : Controller
    {

        private readonly ExchangeContext _context;

        public UserController(ExchangeContext context)
        {
            _context = context;

        }




        [HttpPut("{idFollowed,idFollower}")]
        public IActionResult FollowSomeone(long idFollowed, long idFollower)
        {
            Follower item = new Follower();
            Following item2 = new Following();

            var personFollower = _context.users.Find(idFollower);
            item.Prenom = personFollower.Prenom;
            item.Nom = personFollower.Nom;
            item.Id = personFollower.Id;

            _context.followers.Add(item);
            var personFollowed = _context.users.Find(idFollowed);

            item2.Prenom = personFollowed.Prenom;
            item2.Nom = personFollowed.Nom;
            item2.Id = personFollowed.Id;

            _context.followings.Add(item2);

            personFollower.Followings.Add(item2);
            personFollowed.Followers.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetFollow", new { id = item.Id }, item);
        }

             

        [HttpGet("{id}", Name = "GetUser")]
        public User GetById(long id)
        {
            var item = _context.users.Find(id);
            if (item == null)
            {
                return null;
            }
            return item;
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] User item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            var toDoItemObj = _context.users.Find(id);
            if (toDoItemObj == null)
            {
                return NotFound();
            }
            var itemToUpdate = _context.users.SingleOrDefault(r => r.Id == id);
            if (itemToUpdate != null)
            {
                itemToUpdate.Ville = item.Ville;
                itemToUpdate.Prenom = item.Prenom;
                itemToUpdate.Nom = item.Nom;
                itemToUpdate.Age = item.Age;


            }
            _context.SaveChanges();
            return new NoContentResult();
        }
       
    }
}