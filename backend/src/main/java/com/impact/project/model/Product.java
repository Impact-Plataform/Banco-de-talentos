package com.impact.project.model;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;
import org.springframework.hateoas.RepresentationModel;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "product")
public class Product extends RepresentationModel<Product> {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false)
    private String name;
    
    @Column
    private String description;
    
    @Column(nullable = false)
    private BigDecimal price;

    @Column(name = "price_usd")
    private BigDecimal priceUSD;

    @Column(name = "price_eur")
    private BigDecimal priceEUR;

    public Product() {
    }
    

    public void updatePrices(BigDecimal priceUSD, BigDecimal priceEUR) {
        this.priceUSD = priceUSD;
        this.priceEUR = priceEUR;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = UUID.fromString(String.valueOf(id));
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getPriceUSD() {
        return priceUSD;
    }

    public void setPriceUSD(BigDecimal priceUSD) {
        this.priceUSD = priceUSD;
    }

    public BigDecimal getPriceEUR() {
        return priceEUR;
    }

    public void setPriceEUR(BigDecimal priceEUR) {
        this.priceEUR = priceEUR;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Product product = (Product) o;

        if (id != product.id) return false;
        if (!Objects.equals(name, product.name)) return false;
        if (!Objects.equals(description, product.description)) return false;
        if (!Objects.equals(price, product.price)) return false;
        if (!Objects.equals(priceUSD, product.priceUSD)) return false;
        return Objects.equals(priceEUR, product.priceEUR);
    }
    
    @Override
    public @NotNull String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", priceUSD=" + priceUSD +
                ", priceEUR=" + priceEUR +
                '}';
    }
}
