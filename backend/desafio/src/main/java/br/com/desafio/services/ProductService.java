package br.com.desafio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.desafio.models.entities.Product;
import br.com.desafio.models.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private  ProductRepository productRepository;

	public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        product.setId(id);
        return productRepository.save(product);
    }	

	public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

}
