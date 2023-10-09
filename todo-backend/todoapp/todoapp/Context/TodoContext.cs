using Microsoft.EntityFrameworkCore;
using todoapp.Models;

namespace todoapp.Context;

public class TodoContext : DbContext
{
   public TodoContext(DbContextOptions<TodoContext> opts) : base(opts)
   {
      
   }
   
   public DbSet<TodoTask> TaskSet { get; set; }
}