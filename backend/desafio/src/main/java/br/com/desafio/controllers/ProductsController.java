package br.com.desafio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.desafio.models.entities.Products;
import br.com.desafio.services.ProductsServices;

@RestController
@RequestMapping("Products")
public class ProductsController {

	@Autowired
	private ProductsServices service;

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Products> findAll(){
		return service.findAll();
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public Products create(@RequestBody Products product) {
		return service.create(product);
	}
}
