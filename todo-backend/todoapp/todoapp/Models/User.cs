using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace todoapp.Models;

public class User
{
    public string Name { get; set; }
    public string UserEmail { get; set; }
    public Guid? UserToken { get; set; } = null;
    public DateTime dt_nasc { get; set; }
    public DateTime created_at { get; set; }
}