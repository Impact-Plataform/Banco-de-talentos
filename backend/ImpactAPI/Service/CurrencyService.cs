using ImpactAPI.Models.Entities;

namespace ImpactAPI.Service
{
    public class CurrencyService : ICurrencyService
    {
        private readonly HttpClient _client;
        private const string _baseUrl = "https://economia.awesomeapi.com.br/all";

        public CurrencyService(HttpClient client)
        {
            _client = client;
            _client.BaseAddress = new Uri(_baseUrl);
        }

        public async Task<AllCurrency?> GetAllCurrency()
        {
            var response = await _client.GetAsync(_baseUrl);
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<AllCurrency>();
            return result;
        }

        public async Task<object?> GetAllCurrencyJson()
        {
            var response = await _client.GetAsync(_baseUrl);
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<object>();
            return result;
        }

        public async Task<object?> GetCurrencyJson(string code)
        {
            var response = await _client.GetAsync($"{_baseUrl}/{code}-BRL");
            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var result = await response.Content.ReadFromJsonAsync<object>();
            return result;
        }
    }
}
