using ImpactAPI.Models.Entities;

namespace ImpactAPI.Service
{
    public interface ICurrencyService
    {
        public Task<AllCurrency?> GetAllCurrency();
    }
}
