//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Contact.Model;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace Contact.Controllers
//{
//    [Route("api/[controller]")]

//    public class TodoController : ControllerBase
//    {
//        private readonly TodoContext _context;

//        public TodoController(TodoContext context)
//        {
//            _context = context;

//            if (_context.TodoItems.Count() == 0)
//            {
//                _context.TodoItems.Add(new TodoItem { Name = "Item1" });
//                _context.SaveChanges();
//            }
//        }
//        [HttpGet]
//        public List<TodoItem> GetAll()
//        {

//            return _context.TodoItems.ToList();
//        }

//        [HttpGet("{id}", Name = "GetTodo")]
//        public TodoItem GetById(long id)
//        {
//            var item = _context.TodoItems.Find(id);
//            if (item == null)
//            {
//                return null;
//            }
//            return item;
//        }


//        [HttpPost]
//        public IActionResult Create([FromBody] TodoItem item)
//        {
//            if (item == null)
//            {
//                return BadRequest();
//            }
//            _context.TodoItems.Add(item);
//            _context.SaveChanges();
//            return CreatedAtRoute("GetToDo", new { id = item.Id }, item);
//        }
//        [HttpPut("{id}")]
//        public IActionResult Update(long id, [FromBody] TodoItem item)
//        {
//            if (item == null)
//            {
//                return BadRequest();
//            }
//            var toDoItemObj = _context.TodoItems.Find(id);

//            if (toDoItemObj == null)
//            {
//                return NotFound();
//            }
//            var itemToUpdate = _context.TodoItems.SingleOrDefault(r => r.Id == id);
//            if (itemToUpdate != null)
//            {
//                itemToUpdate.Name = item.Name;
//                itemToUpdate.IsComplete = item.IsComplete;

//            }

//            _context.SaveChanges();

//            return new NoContentResult();
//        }
//        [HttpDelete("{id}")]
//        public void Delete(long id)
//        {
//            var itemToRemove = _context.TodoItems.SingleOrDefault(r => r.Id == id);
//            if (itemToRemove != null)
//                _context.TodoItems.Remove(itemToRemove);
//            _context.SaveChanges();
//        }
//    }



//}