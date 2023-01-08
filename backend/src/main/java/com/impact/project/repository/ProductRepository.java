package com.impact.project.repository;

import com.impact.project.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID>  {
    Product findByName(String name);
    Page findAll(Pageable pageable);
    Optional<Product> findById(UUID id);
}
