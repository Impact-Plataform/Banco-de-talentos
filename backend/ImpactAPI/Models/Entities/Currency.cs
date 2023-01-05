namespace ImpactAPI.Models.Entities
{
    public class Currency
    {

        public string Code { get; set; } = default!;
        public string Codein { get; set; } = default!;
        public string Name { get; set; } = default!;
        public decimal Bind { get; set; } = default!;
        public decimal Ask { get; set; } = default!;
    }
}
