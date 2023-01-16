package com.impact.project.resource;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

public interface ProductResource<T> {

    @Operation(summary = "GET all products",
            description = "Returns all products",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping(value = "/products")
    List<T> findAll();

    @Operation(summary = "GET a product by id", description = "Returns a product as per the id",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found", content = @Content)})
    @GetMapping(value = "/products/{id}")
    ResponseEntity<T> findById(@PathVariable UUID id);

    @Operation(summary = "POST a product", description = "Returns a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "201"),
                    @ApiResponse(responseCode = "400", description = "Bad Request")})
    @PostMapping(value = "/products")
    ResponseEntity<T> create(@RequestBody T t);

    @Operation(summary = "PUT a product", description = "Update a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "200"),
                    @ApiResponse(responseCode = "404", description = "Not found")})
    @PutMapping(value = "/products/{id}")
    ResponseEntity<T> update(@PathVariable UUID id, @RequestBody T t);

    @Operation(summary = "DELETE a product", description = "Deleted a product created",
            responses = {@ApiResponse(description = "Success Operation", responseCode = "204"),
                    @ApiResponse(responseCode = "404", description = "Not found")})
    @DeleteMapping("/products/{id}")
    ResponseEntity<Void> delete(@PathVariable UUID id);
}
