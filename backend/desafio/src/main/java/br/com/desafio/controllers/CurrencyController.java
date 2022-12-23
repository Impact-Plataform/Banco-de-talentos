package br.com.desafio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.models.entities.Currency;
import br.com.desafio.services.CurrencyService;

@RestController
@RequestMapping("/Currency")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @GetMapping
    public List<Currency> getAllCurrencies() {
        return currencyService.getAllCurrencies();
    }

    @GetMapping("/{symbol}")
    public ResponseEntity<Currency> getCurrencyBySymbol(@PathVariable(value = "symbol") String symbol) {
        Currency currency = currencyService.getCurrencyBySymbol(symbol);
        if (currency == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(currency);
    }
}


