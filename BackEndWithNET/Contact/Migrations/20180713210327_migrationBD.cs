using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Contact.Migrations
{
    public partial class migrationBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    UserId = table.Column<long>(nullable: true),
                    Following_UserId = table.Column<long>(nullable: true),
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Age = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    MotDePasse = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true),
                    Ville = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_users_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_users_users_Following_UserId",
                        column: x => x.Following_UserId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "annonces",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cout = table.Column<double>(nullable: false),
                    DatePublication = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    MarqueCommeFavori = table.Column<bool>(nullable: false),
                    NBMentionFavori = table.Column<int>(nullable: false),
                    NBVue = table.Column<int>(nullable: false),
                    Titre = table.Column<string>(nullable: true),
                    UserID = table.Column<long>(nullable: false),
                    DescriptionCompetence = table.Column<string>(nullable: true),
                    DisponibiliteDemande = table.Column<string>(nullable: true),
                    DescriptionBesoin = table.Column<string>(nullable: true),
                    DisponibiliteService = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_annonces", x => x.Id);
                    table.ForeignKey(
                        name: "FK_annonces_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "discussions",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Etat = table.Column<string>(nullable: true),
                    UserID = table.Column<long>(nullable: false),
                    UserSender = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_discussions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_discussions_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "domaineCompetences",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Libelle = table.Column<string>(nullable: true),
                    UserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_domaineCompetences", x => x.Id);
                    table.ForeignKey(
                        name: "FK_domaineCompetences_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "experiences",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DatePub = table.Column<DateTime>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    NBCoeur = table.Column<int>(nullable: false),
                    NBVue = table.Column<int>(nullable: false),
                    Titre = table.Column<string>(nullable: true),
                    UserID = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_experiences", x => x.ID);
                    table.ForeignKey(
                        name: "FK_experiences_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "notifications",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Titre = table.Column<string>(nullable: true),
                    TypeNotif = table.Column<string>(nullable: true),
                    UserID = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_notifications", x => x.Id);
                    table.ForeignKey(
                        name: "FK_notifications_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "propositions",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateProposition = table.Column<DateTime>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    UserID = table.Column<long>(nullable: false),
                    DureeCadeauService = table.Column<DateTime>(nullable: true),
                    MontantOffert = table.Column<double>(nullable: true),
                    PeriodeOfferte = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_propositions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_propositions_users_UserID",
                        column: x => x.UserID,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "messages",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContenuMsg = table.Column<string>(nullable: true),
                    DateMsg = table.Column<DateTime>(nullable: false),
                    DiscussionID = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_messages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_messages_discussions_DiscussionID",
                        column: x => x.DiscussionID,
                        principalTable: "discussions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "comments",
                columns: table => new
                {
                    ID = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AnnonceId = table.Column<long>(nullable: true),
                    Contenu = table.Column<string>(nullable: true),
                    DateComment = table.Column<DateTime>(nullable: false),
                    ExperienceID = table.Column<long>(nullable: true),
                    UserId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_comments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_comments_annonces_AnnonceId",
                        column: x => x.AnnonceId,
                        principalTable: "annonces",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_comments_experiences_ExperienceID",
                        column: x => x.ExperienceID,
                        principalTable: "experiences",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_comments_users_UserId",
                        column: x => x.UserId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_annonces_UserID",
                table: "annonces",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_comments_AnnonceId",
                table: "comments",
                column: "AnnonceId");

            migrationBuilder.CreateIndex(
                name: "IX_comments_ExperienceID",
                table: "comments",
                column: "ExperienceID");

            migrationBuilder.CreateIndex(
                name: "IX_comments_UserId",
                table: "comments",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_discussions_UserID",
                table: "discussions",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_domaineCompetences_UserId",
                table: "domaineCompetences",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_experiences_UserID",
                table: "experiences",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_messages_DiscussionID",
                table: "messages",
                column: "DiscussionID");

            migrationBuilder.CreateIndex(
                name: "IX_notifications_UserID",
                table: "notifications",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_propositions_UserID",
                table: "propositions",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_users_UserId",
                table: "users",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_users_Following_UserId",
                table: "users",
                column: "Following_UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "comments");

            migrationBuilder.DropTable(
                name: "domaineCompetences");

            migrationBuilder.DropTable(
                name: "messages");

            migrationBuilder.DropTable(
                name: "notifications");

            migrationBuilder.DropTable(
                name: "propositions");

            migrationBuilder.DropTable(
                name: "annonces");

            migrationBuilder.DropTable(
                name: "experiences");

            migrationBuilder.DropTable(
                name: "discussions");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
