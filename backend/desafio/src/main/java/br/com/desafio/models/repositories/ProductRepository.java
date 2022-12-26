package br.com.desafio.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.desafio.models.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> { }