package com.impact.desafio.controller;

import java.math.BigDecimal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.impact.desafio.service.CurrencyService;

@RestController
@RequestMapping(value = "/Currency")

public class CurrencyController {

	@Autowired
	private CurrencyService currencyService;

	@GetMapping
	public Map<String, BigDecimal> getCurrencyValue() {

		return currencyService.getCurrenciesValues();
	}

	@GetMapping("/{currency}")
	public Map<String, BigDecimal> getCurrencyValue(@PathVariable String currency) {

		return currencyService.getCurrencyValue(currency);
	}
}
