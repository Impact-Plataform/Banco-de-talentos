package com.impact.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.impact.desafio.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> { }