package com.impact.project.controller;

import com.impact.project.exception.ProductErrorResponse;
import com.impact.project.exception.ResourceNotFoundException;
import com.impact.project.model.Product;
import com.impact.project.resource.ProductResource;
import com.impact.project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class ProductController implements ProductResource<Product> {

    @Autowired
    private ProductService productService;
    
    
    @Override
    public List<Product> findAll() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK).getBody();
    }

    @Override
    public ResponseEntity<Product> findById(UUID id) {
        if (!productService.checkIfProductIsNull(id)) throw new ResourceNotFoundException("Product was not found");

        Product product = productService.getProductById(id);


        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Product> create(Product product) {
        Product createdProduct = productService.createProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Product> update(UUID id, Product product) {
        if (!productService.checkIfProductIsNull(id)) throw new ResourceNotFoundException("Product was not found");

        Product updateProduct = productService.updateProduct(id, product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> delete(UUID id) {
        if (!productService.checkIfProductIsNull(id)) throw new ResourceNotFoundException("Product was not found");

        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
    
    @ExceptionHandler
    public ResponseEntity<ProductErrorResponse> handleException(ResourceNotFoundException exc) {

        ProductErrorResponse error = new ProductErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<ProductErrorResponse> handleException(Exception exc) {

        ProductErrorResponse error = new ProductErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

}
