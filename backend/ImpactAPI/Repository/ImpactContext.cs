using ImpactAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ImpactAPI.Repository
{
    public class ImpactContext : DbContext
    {
        public ImpactContext(DbContextOptions<ImpactContext> options) : base(options)
        {
        }

        protected ImpactContext()
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Product>().Property(p => p.Price).HasPrecision(6, 2);

            modelBuilder.Entity<Product>().HasData(
                new Product(1, "Computador", 3000.57m),
                new Product(2, "Notebook", 4598.87m),
                new Product(3, "Webcam", 600m),
                new Product(4, "Microfone", 250m),
                new Product(5, "HeadSet", 200m)
                );
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=127.0.0.1;Database=impact;User=SA;Password=Password12!;Encrypt=False");
            }
        }
    }
}
