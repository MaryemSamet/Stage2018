﻿// <auto-generated />
using Contact.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using System;

namespace Contact.Migrations
{
    [DbContext(typeof(ExchangeContext))]
    [Migration("20180713210327_migrationBD")]
    partial class migrationBD
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Contact.Model.Annonce", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Cout");

                    b.Property<DateTime>("DatePublication");

                    b.Property<string>("Description");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<bool>("MarqueCommeFavori");

                    b.Property<int>("NBMentionFavori");

                    b.Property<int>("NBVue");

                    b.Property<string>("Titre");

                    b.Property<long>("UserID");

                    b.HasKey("Id");

                    b.ToTable("annonces");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Annonce");
                });

            modelBuilder.Entity("Contact.Model.Comment", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("AnnonceId");

                    b.Property<string>("Contenu");

                    b.Property<DateTime>("DateComment");

                    b.Property<long?>("ExperienceID");

                    b.Property<long>("UserId");

                    b.HasKey("ID");

                    b.HasIndex("AnnonceId");

                    b.HasIndex("ExperienceID");

                    b.HasIndex("UserId");

                    b.ToTable("comments");
                });

            modelBuilder.Entity("Contact.Model.Discussion", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Etat");

                    b.Property<long>("UserID");

                    b.Property<string>("UserSender");

                    b.HasKey("Id");

                    b.HasIndex("UserID");

                    b.ToTable("discussions");
                });

            modelBuilder.Entity("Contact.Model.DomaineCompetence", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Libelle");

                    b.Property<long?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("domaineCompetences");
                });

            modelBuilder.Entity("Contact.Model.Experience", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DatePub");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<int>("NBCoeur");

                    b.Property<int>("NBVue");

                    b.Property<string>("Titre");

                    b.Property<long>("UserID");

                    b.HasKey("ID");

                    b.ToTable("experiences");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Experience");
                });

            modelBuilder.Entity("Contact.Model.Message", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ContenuMsg");

                    b.Property<DateTime>("DateMsg");

                    b.Property<long>("DiscussionID");

                    b.HasKey("Id");

                    b.HasIndex("DiscussionID");

                    b.ToTable("messages");
                });

            modelBuilder.Entity("Contact.Model.Notification", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Titre");

                    b.Property<string>("TypeNotif");

                    b.Property<long>("UserID");

                    b.HasKey("Id");

                    b.HasIndex("UserID");

                    b.ToTable("notifications");
                });

            modelBuilder.Entity("Contact.Model.Proposition", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DateProposition");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<long>("UserID");

                    b.HasKey("Id");

                    b.HasIndex("UserID");

                    b.ToTable("propositions");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Proposition");
                });

            modelBuilder.Entity("Contact.Model.User", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Age");

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Email");

                    b.Property<string>("MotDePasse");

                    b.Property<string>("Nom");

                    b.Property<string>("Prenom");

                    b.Property<string>("Ville");

                    b.HasKey("Id");

                    b.ToTable("users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("Contact.Model.AnnonceBesoin", b =>
                {
                    b.HasBaseType("Contact.Model.Annonce");

                    b.Property<string>("DescriptionCompetence");

                    b.Property<string>("DisponibiliteDemande");

                    b.HasIndex("UserID");

                    b.ToTable("AnnonceBesoin");

                    b.HasDiscriminator().HasValue("AnnonceBesoin");
                });

            modelBuilder.Entity("Contact.Model.AnnonceService", b =>
                {
                    b.HasBaseType("Contact.Model.Annonce");

                    b.Property<string>("DescriptionBesoin");

                    b.Property<string>("DisponibiliteService");

                    b.HasIndex("UserID");

                    b.ToTable("AnnonceService");

                    b.HasDiscriminator().HasValue("AnnonceService");
                });

            modelBuilder.Entity("Contact.Model.ExperienceImage", b =>
                {
                    b.HasBaseType("Contact.Model.Experience");


                    b.HasIndex("UserID");

                    b.ToTable("ExperienceImage");

                    b.HasDiscriminator().HasValue("ExperienceImage");
                });

            modelBuilder.Entity("Contact.Model.ExperienceVideo", b =>
                {
                    b.HasBaseType("Contact.Model.Experience");


                    b.HasIndex("UserID");

                    b.ToTable("ExperienceVideo");

                    b.HasDiscriminator().HasValue("ExperienceVideo");
                });

            modelBuilder.Entity("Contact.Model.PropositionCadeauService", b =>
                {
                    b.HasBaseType("Contact.Model.Proposition");

                    b.Property<DateTime>("DureeCadeauService");

                    b.ToTable("PropositionCadeauService");

                    b.HasDiscriminator().HasValue("PropositionCadeauService");
                });

            modelBuilder.Entity("Contact.Model.PropositionOffrePrix", b =>
                {
                    b.HasBaseType("Contact.Model.Proposition");

                    b.Property<double>("MontantOffert");

                    b.Property<DateTime>("PeriodeOfferte");

                    b.ToTable("PropositionOffrePrix");

                    b.HasDiscriminator().HasValue("PropositionOffrePrix");
                });

            modelBuilder.Entity("Contact.Model.Follower", b =>
                {
                    b.HasBaseType("Contact.Model.User");

                    b.Property<long?>("UserId");

                    b.HasIndex("UserId");

                    b.ToTable("Follower");

                    b.HasDiscriminator().HasValue("Follower");
                });

            modelBuilder.Entity("Contact.Model.Following", b =>
                {
                    b.HasBaseType("Contact.Model.User");

                    b.Property<long?>("UserId")
                        .HasColumnName("Following_UserId");

                    b.HasIndex("UserId");

                    b.ToTable("Following");

                    b.HasDiscriminator().HasValue("Following");
                });

            modelBuilder.Entity("Contact.Model.Comment", b =>
                {
                    b.HasOne("Contact.Model.Annonce")
                        .WithMany("Comments")
                        .HasForeignKey("AnnonceId");

                    b.HasOne("Contact.Model.Experience")
                        .WithMany("Comments")
                        .HasForeignKey("ExperienceID");

                    b.HasOne("Contact.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.Discussion", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("Discussions")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.DomaineCompetence", b =>
                {
                    b.HasOne("Contact.Model.User")
                        .WithMany("DomaineCompetences")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Contact.Model.Message", b =>
                {
                    b.HasOne("Contact.Model.Discussion", "Discussion")
                        .WithMany("Messages")
                        .HasForeignKey("DiscussionID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.Notification", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("Notifications")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.Proposition", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("Propositions")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.AnnonceBesoin", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("ListAnnonceBesoins")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.AnnonceService", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("ListAnnonceServices")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.ExperienceImage", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("ExperienceImages")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.ExperienceVideo", b =>
                {
                    b.HasOne("Contact.Model.User", "User")
                        .WithMany("ExperienceVideos")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Contact.Model.Follower", b =>
                {
                    b.HasOne("Contact.Model.User")
                        .WithMany("Followers")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("Contact.Model.Following", b =>
                {
                    b.HasOne("Contact.Model.User")
                        .WithMany("Followings")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
