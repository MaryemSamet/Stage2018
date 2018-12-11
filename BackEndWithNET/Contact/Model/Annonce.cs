using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class Annonce
    {
        public long Id { get; set; }
        public string Titre { get; set; }
        public string Description { get; set; }
        public Double Cout { get; set; }
        public int NBMentionFavori { get; set; }
        public int NBVue { get; set; }
        public DateTime DatePublication { get; set; }
        public bool MarqueCommeFavori { get; set; }


        public long UserID { get; set; }
        public virtual User User { get; set; }

        public virtual List<Comment> Comments{ get; set; }

    }
}
