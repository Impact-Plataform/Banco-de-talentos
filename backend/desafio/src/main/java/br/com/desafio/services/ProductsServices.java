package br.com.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.desafio.exceptions.ResourceNotFoundException;
import br.com.desafio.models.entities.Products;
import br.com.desafio.models.repositories.ProductsRepository;

@Service
public class ProductsServices {

	@Autowired
	ProductsRepository repository;

	public List<Products> findAll() {
		return repository.findAll();
	}

	public Products findById(Long id) {

		return repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));
	}

	public Products create(Products product) {
		return repository.save(product);
	}

	public ResponseEntity<Products> update(Products productDetails,Long id) {
	
		Products entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));

		entity.setName(productDetails.getName());
		entity.setPrice(productDetails.getPrice());
		entity.setDescription(productDetails.getDescription());

		repository.save(entity);
		
		return ResponseEntity.ok(entity);
	}

	public void delete(Long id) {
		var entity = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No records found for this ID!"));

		repository.delete(entity);
	}
}
