using System.ComponentModel.DataAnnotations;

namespace todoapp.Models;

public class TodoTask
{
    [Key] public int TaskId { get; set; }
    [StringLength(120)] public string TaskTitle { get; set; }
    [StringLength(255)] public string TaskDescription { get; set; }
    public DateTime created_at { get; set; }
    public DateTime updated_at { get; set; }
}