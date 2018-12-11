using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contact.Model
{
    public class Proposition
    {
        public long Id  { get; set; }
        public DateTime DateProposition { get; set; }

        public long UserID { get; set; }

        public virtual User User { get; set; }

    }
}
