using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model

{
    public class Experience
    {
        public long ID  { get; set; }
        public string Titre { get; set; }
        public DateTime DatePub { get; set; }
        public int NBCoeur { get; set; }
        public int NBVue  { get; set; }

        public long UserID { get; set; }

        public virtual User User { get; set; }

        public virtual List<Comment> Comments{ get; set; }



    }
}
