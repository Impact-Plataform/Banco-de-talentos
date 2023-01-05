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
