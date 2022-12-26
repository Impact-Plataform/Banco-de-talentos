package br.com.desafio.services;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class CurrencyService {

	private final WebClient webClient;

	public CurrencyService(WebClient.Builder webClientBuilder) {
		this.webClient = webClientBuilder.build();
	}

	public BigDecimal getCurrencyValueToProduct(String currency) {
		return webClient.get().uri("https://economia.awesomeapi.com.br/all/{currency}-BRL", currency).retrieve()
				.bodyToMono(String.class)
				.map(response -> new JSONObject(response).getJSONObject(currency).getBigDecimal("ask")).block();
	}
	
	public Map<String, BigDecimal> getCurrencyValue(String currency) {
		return webClient.get().uri("https://economia.awesomeapi.com.br/all/{currency}-BRL", currency).retrieve()
				.bodyToMono(String.class).map(response ->  {
					if (response == null || !response.startsWith("{")) {
						throw new RuntimeException("Resposta da API inválida: " + response);
					}

					JSONObject json = new JSONObject(response);
					Map<String, BigDecimal> value = new HashMap<>();
					value.put(currency, json.getJSONObject(currency).getBigDecimal("ask"));
					return value;
				}).block();
	}

	public Map<String, BigDecimal> getCurrenciesValues() {
		return webClient.get().uri("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").retrieve()
				.bodyToMono(String.class).map(response -> {
					if (response == null || !response.startsWith("{")) {
						throw new RuntimeException("Resposta da API inválida: " + response);
					}

					JSONObject json = new JSONObject(response);
					Map<String, BigDecimal> values = new HashMap<>();
					values.put("USD", json.getJSONObject("USDBRL").getBigDecimal("ask"));
					values.put("EUR", json.getJSONObject("EURBRL").getBigDecimal("ask"));
					return values;
				}).block();
	}

}
