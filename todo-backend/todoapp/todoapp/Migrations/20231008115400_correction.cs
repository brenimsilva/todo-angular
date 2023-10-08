using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todoapp.Migrations
{
    public partial class correction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "updated_at",
                table: "TaskSet",
                newName: "date_limit");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "TaskSet",
                newName: "date_inserted");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "date_limit",
                table: "TaskSet",
                newName: "updated_at");

            migrationBuilder.RenameColumn(
                name: "date_inserted",
                table: "TaskSet",
                newName: "created_at");
        }
    }
}
