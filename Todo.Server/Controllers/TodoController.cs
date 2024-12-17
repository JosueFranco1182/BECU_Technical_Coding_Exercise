using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Todo.Server.Models;

namespace Todo.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private static List<TodoItem> Tasks = new()
        {
            new TodoItem { Id = 1, Name = "Learn React", Completed = false },
            new TodoItem { Id = 2, Name = "Build To-Do App", Completed = true },
        };

        [HttpGet]
        public List<TodoItem> Get()
        {
            return Tasks;
        }

        [HttpPut("{id}")]
        public IActionResult ToggleTaskStatus(int id)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();
            task.Completed = !task.Completed;
            return Ok(task);
        }

        //[HttpPost]
        //public IActionResult CreateTask(TodoItem newTask)
        //{
        //    if (string.IsNullOrWhiteSpace(newTask.Name)) return BadRequest("Task name is required.");
        //    newTask.Id = Tasks.Max(t => t.Id) + 1;
        //    Tasks.Add(newTask);
        //    return CreatedAtAction(nameof(GetTasks), new { id = newTask.Id }, newTask);
        //}

        //[HttpDelete("{id}")]
        //public IActionResult DeleteTask(int id)
        //{
        //    var task = Tasks.FirstOrDefault(t => t.Id == id);
        //    if (task == null) return NotFound();
        //    Tasks.Remove(task);
        //    return NoContent();
        //}
    }
}
