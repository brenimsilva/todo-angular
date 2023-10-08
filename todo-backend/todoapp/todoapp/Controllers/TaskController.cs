using Microsoft.AspNetCore.Mvc;
using todoapp.Context;
using todoapp.Models;

namespace todoapp.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskController : ControllerBase
{
   private TodoContext _ctx;
   public TaskController(TodoContext ctx)
   {
      this._ctx = ctx;
   }

   [HttpPost]
   public async Task<IActionResult> AddNew(TodoTask task)
   {
       var x = await _ctx.TaskSet.AddAsync(task);
       return Created("/Task", x);
   }
}