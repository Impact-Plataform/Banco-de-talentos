package br.com.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.desafio.models.entities.Products;
import br.com.desafio.models.repositories.ProductsRepository;

@Service
public class ProductsServices {

	@Autowired
	ProductsRepository repository;

	public List<Products> findAll() {
		return repository.findAll();
	}

	public Products create(Products product) {
		return repository.save(product);
	}
}
