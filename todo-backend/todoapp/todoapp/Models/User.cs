using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace todoapp.Models;

public class User
{
    [Key] public int UserId { get; set; }
    [StringLength(120)] public string UserEmail { get; set; }
    [StringLength(45)] public string UserName { get; set; }
    [ForeignKey("Task")] public int TaskId { get; set; }
    public virtual IEnumerable<TodoTask> TaskList { get; set; }
    public DateTime created_at { get; set; }
    public DateTime updated_at { get; set; }
}