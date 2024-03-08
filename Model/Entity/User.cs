using Microsoft.AspNetCore.Identity;

namespace Model.Entity
{
    public class User: IdentityUser
    {
        public int Id { get; set; }
        
        public List<Order>? Orders { get; set; }
    }
}
