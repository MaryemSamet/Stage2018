using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class Notification
    {
        public long Id { get; set; }
        public string Titre { get; set; }
        public string TypeNotif { get; set; }


        public long UserID { get; set; }

        public virtual User User { get; set; }

    }
}
