package com.impact.desafio.model;

import java.math.BigDecimal;

import org.springframework.cache.annotation.CachePut;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private String description;

	@Column(nullable = false)
	private BigDecimal price;

	
	private BigDecimal priceUSD;

	
	private BigDecimal priceEUR;

	public void setCurrencyValues(BigDecimal priceUSD, BigDecimal priceEUR) {
		this.priceUSD = priceUSD;
		this.priceEUR = priceEUR;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	@CachePut("currencyValues")
	public BigDecimal getPriceUSD() {
		return priceUSD;
	}

	public void setPriceUSD(BigDecimal priceUSD) {
		this.priceUSD = priceUSD;
	}

	@CachePut("currencyValues")
	public BigDecimal getPriceEUR() {
		return priceEUR;
	}

	public void setPriceEUR(BigDecimal priceEUR) {
		this.priceEUR = priceEUR;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((price == null) ? 0 : price.hashCode());
		result = prime * result + ((priceEUR == null) ? 0 : priceEUR.hashCode());
		result = prime * result + ((priceUSD == null) ? 0 : priceUSD.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (price == null) {
			if (other.price != null)
				return false;
		} else if (!price.equals(other.price))
			return false;
		if (priceEUR == null) {
			if (other.priceEUR != null)
				return false;
		} else if (!priceEUR.equals(other.priceEUR))
			return false;
		if (priceUSD == null) {
			if (other.priceUSD != null)
				return false;
		} else if (!priceUSD.equals(other.priceUSD))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + "]";
	}
	
	

}
