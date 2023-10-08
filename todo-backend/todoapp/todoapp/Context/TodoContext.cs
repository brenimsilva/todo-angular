using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using todoapp.Models;
using Task = System.Threading.Tasks.Task;

namespace todoapp.Context;

public class TodoContext : DbContext
{
   public TodoContext(DbContextOptions<TodoContext> opts) : base(opts) {}
   
   public DbSet<TodoTask> TaskSet { get; set; }
   public DbSet<User> UserSet { get; set; }
}