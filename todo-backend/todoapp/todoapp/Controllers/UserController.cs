using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todoapp.Context;
using todoapp.Models;

namespace todoapp.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private TodoContext _ctx;

    public UserController(TodoContext ctx)
    {
        this._ctx = ctx;
    }
   [HttpGet("{id}")]
   public async Task<IActionResult> GetAllData(int id)
   {
       User u = await _ctx.UserSet.Include(e => e.TaskList).FirstOrDefaultAsync(e => e.UserId == id);
       return Ok(u);
   }
}