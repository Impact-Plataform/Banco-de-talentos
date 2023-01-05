using ImpactAPI.Models.Entities;

namespace ImpactAPI.Service
{
    public interface ICurrencyService
    {
        public Task<AllCurrency?> GetAllCurrency();

        public Task<object?> GetAllCurrencyJson();
        public Task<object?> GetCurrencyJson(string code);
    }
}
