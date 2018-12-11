using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model

{
    public class Comment
    {
        public long ID { get; set; }
        public DateTime DateComment { get; set; }
        public string Contenu { get; set; }

        public long UserId { get; set; }
        public virtual  User  User { get; set; }




    }
}
