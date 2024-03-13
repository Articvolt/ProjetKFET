using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model.Entity;

namespace Model
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        { }
        public DbSet<Item> Items { get; set; } = default!;
        public DbSet<Category> Categories { get; set; } = default!;
        public DbSet<Add> Adds { get; set; } = default!;
        public DbSet<Cart> Carts { get; set; } = default!;
        public DbSet<Invoice> Invoices { get; set; } = default!;
        public DbSet<Order> Orders { get; set; } = default!;
        public DbSet<User> Users { get; set; } = default!;

    }
}