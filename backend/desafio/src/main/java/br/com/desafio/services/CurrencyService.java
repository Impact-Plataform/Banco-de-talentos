package br.com.desafio.services;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import br.com.desafio.models.entities.Currency;
import br.com.desafio.models.repositories.CurrencyRepository;

@Service
public class CurrencyService {

    @Autowired
    private CurrencyRepository currencyRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${api.currency.url}")
    private String apiUrl;

    public List<Currency> getAllCurrencies() {
        return currencyRepository.findAll();
    }

    public Currency getCurrencyBySymbol(String symbol) {
        Currency currency = currencyRepository.findBySymbol(symbol);
        if (currency == null) {
            currency = fetchCurrencyRateFromApi(symbol);
        }
        return currency;
    }

    private Currency fetchCurrencyRateFromApi(String symbol) {
        Currency currency = null;
        try {
            String url = apiUrl + symbol + "-BRL";
            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(url, 
            		HttpMethod.GET, null, new ParameterizedTypeReference<Map<String, Object>>() {});
            Map<String, Object> body = response.getBody();
            if (body != null) {
                double rate = Double.parseDouble((String) body.get("bid"));
                LocalDateTime date = LocalDateTime.parse((String) body.get("create_date"));
                currency = new Currency(symbol, BigDecimal.valueOf(rate), date);
                currencyRepository.save(currency);
            }
        } catch (RestClientException e) {
            // handle exception
        }
        return currency;
    }
}