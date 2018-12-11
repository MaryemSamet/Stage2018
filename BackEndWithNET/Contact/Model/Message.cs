using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class Message
    {
        public  long  Id { get; set; }

        public String ContenuMsg { get; set; }
        public DateTime DateMsg { get; set; }


        public long DiscussionID { get; set; }
        public virtual Discussion Discussion { get; set; }
        



    }
}
