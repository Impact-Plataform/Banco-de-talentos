package com.impact.project.controller;

import com.impact.project.service.CurrencyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/api")
public class CurrencyController {

    @Autowired
    private CurrencyService currencyService;

    @Operation(summary = "GET all currency", description = "Returns all currency",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping("/currency")
    public Mono<String> getCurrencies() {
        return currencyService.getCurrencyAll();
    }

    @Operation(summary = "GET a currency by symbol", description = "Returns a currency by symbol",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping("/currency/{symbol}")
    public Mono<String> getCurrency(@PathVariable String symbol) {
        return currencyService.getCurrencyBySymbol(symbol);
    }
}