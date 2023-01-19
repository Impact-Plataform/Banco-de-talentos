package com.impact.project.service;

import com.impact.project.controller.ProductController;
import com.impact.project.model.Product;
import com.impact.project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@ComponentScan("com.impact.project")
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CurrencyService currencyService;

    public Product createProduct(Product product) {
        convertPriceToOtherPriceCurrency(product);
        return productRepository.save(product);
    }


    public Product getProductById(UUID id) {
        Product product = productRepository.findById(id).orElseThrow();
        convertPriceToOtherPriceCurrency(product);

        product.add(linkTo(methodOn(ProductController.class).findById(id)).withSelfRel());
        product.add(linkTo(methodOn(ProductController.class).findAll()).withRel("list of products"));
        return product;
    }

    public List<Product> getAllProducts() {

        List<Product> products = productRepository.findAll();
        for (Product product : products) {
            UUID id = product.getId();
            product.add(linkTo(methodOn(ProductController.class).findById(id)).withSelfRel());
        }
        convertPricesToCorrencies(products);
        return products;
    }

    public Product updateProduct(UUID id, Product product) {
        productRepository.findById(id);
        product.setId(id);
        convertPriceToOtherPriceCurrency(product);
        return productRepository.save(product);
    }

    public void deleteProduct(UUID id) {
        if (checkIfProductIsNull(id)) productRepository.deleteById(id);
    }

    private void convertPriceToOtherPriceCurrency(Product product) {
        double usdExchangeRate = currencyService.getCurrencyValueToProduct("USD").doubleValue();
        double eurExchangeRate = currencyService.getCurrencyValueToProduct("EUR").doubleValue();
        BigDecimal usd = product.getPrice().divide(BigDecimal.valueOf(usdExchangeRate), 2, RoundingMode.HALF_UP);
        BigDecimal eur = product.getPrice().divide(BigDecimal.valueOf(eurExchangeRate), 2, RoundingMode.HALF_UP);
        product.updatePrices(usd, eur);
    }

    private void convertPricesToCorrencies(List<Product> products) {
        for (Product product : products) convertPriceToOtherPriceCurrency(product);
    }


    public boolean checkIfProductIsNull(UUID id) {
        Optional<Product> product = productRepository.findById(id);
        return product.isPresent();
    }
}
