using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImpactAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O nome é obrigatório")]
        [MinLength(2, ErrorMessage = "O Nome deve ter no mínimo 2 caracteres")]
        public string Name { get; set; } = default!;

        [Required(ErrorMessage = "O Preço é obrigatório")]
        [Range(0.0, double.MaxValue, ErrorMessage = "O campo {0} deve ser maior que {1}")]
        public decimal Price { get; set; }

        [NotMapped]
        public decimal? PriceUSD { get; private set; }

        [NotMapped]
        public decimal? PriceEUR { get; private set; }

        public Product()
        {
        }

        public Product(int id, string name, decimal price)
        {
            Id = id;
            Name = name;
            Price = price;
        }

        public void ConverteValue(decimal USD, decimal EUR)
        {
            // Os valores quando deixados com duas casas, são arredondados. Ou seja, eles podem valer 1 centavo a mais. Mas como é um preço possível
            // a diferença de 1 centavo acaba não sendo um problema tão grande.
            PriceUSD = decimal.Round(Price / USD, 2);
            PriceEUR = decimal.Round(Price / EUR, 2);
        }
    }
}
