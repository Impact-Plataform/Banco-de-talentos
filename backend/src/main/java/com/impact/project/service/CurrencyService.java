package com.impact.project.service;

import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.math.BigDecimal;

@Component
public class CurrencyService {

    private final WebClient webClient = WebClient.create("https://economia.awesomeapi.com.br");


    public Mono<String> getCurrencyAll() {
        return webClient.get()
                .uri("/all")
                .retrieve()
                .bodyToMono(String.class);
    }
    
    public Mono<String> getCurrencyBySymbol(String symbol) {
        return webClient.get()
                .uri("/all/{symbol}-BRL", symbol)
                .retrieve()
                .bodyToMono(String.class);
    }
    
    // map currency
    
    public BigDecimal getCurrencyValueToProduct(String symbol){
        return webClient.get().uri("/all/{symbol}-BRL", symbol).retrieve().bodyToMono(String.class)
                .map(response -> new JSONObject(response).getJSONObject(symbol).getBigDecimal("ask")).block();
    }
}
