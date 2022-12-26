package br.com.desafio.controllers;

import java.math.BigDecimal;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.services.CurrencyService;

@RestController
public class CurrencyController {
	private final CurrencyService currencyService;

	public CurrencyController(CurrencyService currencyService) {
		this.currencyService = currencyService;
	}
	
	@GetMapping("/Currency/")
	public Map<String, BigDecimal> getCurrencyValue( ) {
		
		
		return currencyService.getCurrenciesValues();
	}

	
	@GetMapping("/Currency/{currency}")
	public Map<String, BigDecimal> getCurrencyValue(@PathVariable String currency) {

		
		return currencyService.getCurrencyValue(currency);
	}
}
