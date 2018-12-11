using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class User
    {
        public long Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Ville { get; set; }
        public string MotDePasse { get; set; }
        public string Email { get; set; }
        public int Age{ get; set; }

        public virtual List<Follower> Followers { get; set; }
        public virtual List<Following> Followings { get; set; }

        public virtual List<AnnonceBesoin> ListAnnonceBesoins { get; set; }
        public virtual List<AnnonceService>  ListAnnonceServices { get; set; }

        public virtual List<ExperienceVideo> ExperienceVideos { get; set; }
        public virtual List<ExperienceImage>  ExperienceImages { get; set; }

        public virtual List<Notification> Notifications { get; set; }
        public virtual List<Proposition> Propositions { get; set; }


        public virtual List<DomaineCompetence> DomaineCompetences { get; set; }
        public virtual List<Discussion>  Discussions { get; set; }


    }
}
