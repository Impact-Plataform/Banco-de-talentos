using System.ComponentModel.DataAnnotations;

namespace ImpactAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O nome é obrigatório")]
        [MinLength(2, ErrorMessage = "O Nome deve ter no mínimo 2 caracteres")]
        public string Name { get; set; } = default!;

        [Required(ErrorMessage = "O Preço é obrigatório")]
        [Range(0.0, Double.MaxValue, ErrorMessage = "O campo {0} deve ser maior que {1}")]
        public decimal Price { get; set; }

        public Product()
        {
        }

        public Product(int id, string name, decimal price)
        {
            Id = id;
            Name = name;
            Price = price;
        }
    }
}
