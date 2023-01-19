package com.impact.project.repository;

import com.impact.project.model.Product;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID>  {
    Product findByName(String name);
    @NotNull Optional<Product> findById(@NotNull UUID id);
}
