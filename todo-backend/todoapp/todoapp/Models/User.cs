using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace todoapp.Models;

public class User
{
    [Key] public int UserId { get; set; }
    [StringLength(120)] public string UserEmail { get; set; }
    [StringLength(45)] public string UserName { get; set; }
    public virtual IEnumerable<TodoTask> TaskList { get; set; }
    [DataType(DataType.DateTime)]public DateTime created_at { get; set; }
    [DataType(DataType.DateTime)]public DateTime updated_at { get; set; }
}