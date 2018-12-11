using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Contact.Model

{
    public class Discussion
    {
        public long Id { get; set; }
        public string Etat { get; set; }
        public String UserSender { get; set; }

        public virtual List<Message> Messages { get; set; }


        public long UserID { get; set; }
        public virtual User User { get; set; }



    }
}
