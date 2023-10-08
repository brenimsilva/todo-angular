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
   public async Task<IActionResult> AddNew([FromBody]TodoTask task)
   {
       await _ctx.TaskSet.AddAsync(task);
       await _ctx.SaveChangesAsync();
       return Ok(task);
   }

   [HttpPut("{id}")]
   public async Task<IActionResult> Edit(int id, [FromBody]TodoTask task) {
        TodoTask t = await _ctx.TaskSet.FindAsync(id);
        if(t is not null)
        {
            t.TaskTitle = task.TaskTitle;
            t.TaskDescription = task.TaskDescription;
            t.date_inserted = task.date_inserted;
            t.date_limit = task.date_limit;
            _ctx.TaskSet.Update(t);
            await _ctx.SaveChangesAsync();
            return Ok(t);
        } else
        {
            return BadRequest();
        }
   }
}
