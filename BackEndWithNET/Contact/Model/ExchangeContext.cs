using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class ExchangeContext : DbContext
    {
        private IConfigurationRoot _config;

        public ExchangeContext(DbContextOptions<ExchangeContext> options, IConfigurationRoot config)
            : base(options)
        {
            _config = config;
        }


        public DbSet<Annonce> annonces { get; set; }
        public DbSet<AnnonceBesoin> annonceBesoins { get; set; }
        public DbSet<AnnonceService>  annonceServices { get; set; }
        public DbSet<Comment>  comments { get; set; }
        public DbSet<Discussion> discussions { get; set; }
        public DbSet<DomaineCompetence> domaineCompetences { get; set; }
        public DbSet<Experience>  experiences { get; set; }
        public DbSet<ExperienceImage> experienceImages { get; set; }
        public DbSet<ExperienceVideo> ExperienceVideos { get; set; }
        public DbSet<Follower> followers { get; set; }
        public DbSet<Following> followings { get; set; }
        public DbSet<Message> messages { get; set; }
        public DbSet<Notification> notifications { get; set; }
        public DbSet<Proposition>  propositions { get; set; }
        public DbSet<PropositionOffrePrix> PropositionOffrePrixes { get; set; }
        public DbSet<PropositionCadeauService> propositionCadeauServices { get; set; }
        //public DbSet<PropositionService> propositionServices { get; set; }
        public DbSet<User> users { get; set; }




        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config["Data:ConnectionString"]);
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder
        //        .Entity<Notification>()
        //        .HasOne<User>(e => e.UserID)
        //        .WithMany(e => e.)
        //        .OnDelete(DeleteBehavior.Restrict);
        //}
    }
}

