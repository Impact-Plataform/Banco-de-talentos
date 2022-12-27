package com.impact.desafio.service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.impact.desafio.exception.ResourceNotFoundException;
import com.impact.desafio.model.Product;
import com.impact.desafio.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CurrencyService currencyService;

    @Scheduled(fixedRate = 30000) 
    public void updateCurrencyValues() {
        List<Product> products = productRepository.findAll();
        convertPricesToCurrencies(products);
        productRepository.saveAll(products);
    }

    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        convertPricesToCurrencies(products);
        return products;
    }

    public Product getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        convertPriceToCurrencies(product);
        return product;
    }

    public Product createProduct(Product product) {
        convertPriceToCurrencies(product);
        return productRepository.saveAndFlush(product);
    }

    public Product updateProduct(Long id, Product product) {
        productRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        product.setId(id);
        convertPriceToCurrencies(product);
        return productRepository.saveAndFlush(product);
    }
    
    public void deleteProduct(Long id) {
    	productRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
		productRepository.deleteById(id);
	}

    private void convertPriceToCurrencies(Product product) {
        double usdExchangeRate =  currencyService.getCurrencyValueToProduct("USD").doubleValue();
        double eurExchangeRate =  currencyService.getCurrencyValueToProduct("EUR").doubleValue();
        BigDecimal usd = product.getPrice().divide(BigDecimal.valueOf(usdExchangeRate), 2, RoundingMode.HALF_UP);
        BigDecimal eur = product.getPrice().divide(BigDecimal.valueOf(eurExchangeRate), 2, RoundingMode.HALF_UP);
        product.setCurrencyValues(usd, eur);
    }

    private void convertPricesToCurrencies(List<Product> products) {
        for (Product product : products) {
            convertPriceToCurrencies(product);
        }
    }
}
