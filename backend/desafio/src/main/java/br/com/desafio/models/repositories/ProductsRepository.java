package br.com.desafio.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.desafio.models.entities.Products;

public interface ProductsRepository extends JpaRepository<Products, Long> {}

