package com.impact.project.controller;

import com.impact.project.exception.ProductErrorResponse;
import com.impact.project.exception.ResourceNotFoundException;
import com.impact.project.model.Product;
import com.impact.project.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Operation(summary = "GET all products",
            description = "Returns all products",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping(value = "/products")
    public List<Product> getProducts() {
        List<Product> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK).getBody();
    }

    @Operation(summary = "GET a product by id", description = "Returns a product as per the id",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping(value = "/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable UUID id) {
        if (!productService.checkIfProductIsNull(id)) throw new ResourceNotFoundException("Product was not found");

        Product product = productService.getProductById(id);


        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @Operation(summary = "POST a product", description = "Returns a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "201"),
                    @ApiResponse(responseCode = "400", description = "Bad Request")})
    @PostMapping(value = "/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    @Operation(summary = "PUT a product", description = "Update a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found")})
    @PutMapping(value = "/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable UUID id, @RequestBody Product product) {
        if (!productService.checkIfProductIsNull(id)) throw new ResourceNotFoundException("Product was not found");

        Product updateProduct = productService.updateProduct(id, product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    @Operation(summary = "DELETE a product", description = "Deleted a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "204"),
                    @ApiResponse(responseCode = "404", description = "Not found")})
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable UUID id) {
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
