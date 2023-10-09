using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace todoapp.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "TaskSet",
                columns: table => new
                {
                    TaskId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TaskTitle = table.Column<string>(type: "varchar(120)", maxLength: 120, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    TaskDescription = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    UserGuid = table.Column<Guid>(type: "char(36)", nullable: false, collation: "ascii_general_ci"),
                    date_inserted = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    date_limit = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskSet", x => x.TaskId);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TaskSet");
        }
    }
}
