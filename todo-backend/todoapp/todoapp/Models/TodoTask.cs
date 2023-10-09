using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace todoapp.Models;

public class TodoTask
{
    [Key] public int TaskId { get; set; }
    [StringLength(120)] public string TaskTitle { get; set; }
    [StringLength(255)] public string TaskDescription { get; set; }
    //[ForeignKey("User")] 
    public Guid UserGuid { get; set; }
    [DataType(DataType.DateTime)]public DateTime date_inserted { get; set; }
    [DataType(DataType.DateTime)] public DateTime date_limit { get; set; }
}
