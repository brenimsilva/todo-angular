using Microsoft.EntityFrameworkCore;
using todoapp.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//DB Conn
string conString = builder.Configuration.GetConnectionString("TodoConnection");
ServerVersion version = ServerVersion.AutoDetect(conString);
builder.Services.AddDbContext<TodoContext>(opts => opts.UseMySql(conString, version));

var app = builder.Build();
app.UseCors(e => e.AllowAnyMethod().AllowAnyOrigin().AllowAnyHeader());
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();