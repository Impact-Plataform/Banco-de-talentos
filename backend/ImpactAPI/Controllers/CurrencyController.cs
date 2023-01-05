using ImpactAPI.Models;
using ImpactAPI.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace ImpactAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private ICurrencyService _currencyService;

        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        /// <summary>
        /// Mostra todas as moedas.
        /// </summary>
        /// <returns>Retorna Cotação de todas as moeda</returns>
        [HttpGet]
        public async Task<ActionResult<object>> GetAllCurrency()
        {
            var currency = await _currencyService.GetAllCurrencyJson();

            if (currency is null)
            {
                return NotFound();
            }
            return currency;
        }

        /// <summary>
        /// Mostra a moeda de acordo com seu Simbulo.
        /// </summary>
        /// <returns>Retorna Cotação da moeda</returns>
        /// <param name="symbol">Busca por Model, exemplo: USD</param>
        [HttpGet("{symbol}")]
        public async Task<ActionResult<object>> GetCurrency(string symbol)
        {
            var currency = await _currencyService.GetCurrencyJson(symbol);

            if (currency is null)
            {
                return NotFound();
            }
            return currency;
        }
    }
}
