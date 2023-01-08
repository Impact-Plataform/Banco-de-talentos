package com.impact.project;


import com.impact.project.model.Product;
import com.impact.project.repository.ProductRepository;
import com.impact.project.service.ProductService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.context.jdbc.SqlGroup;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@TestPropertySource("/application-test.properties")
@ExtendWith(SpringExtension.class)
class ProductServiceTest {

    @Autowired
    private JdbcTemplate jdbc;

    @Mock
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;
    
    @Value("${sql.script.create.product}")
    private String sqlAddProduct;

    @Value("${sql.script.delete.product}")
    private String sqlDeleteProduct;
    
    @BeforeEach
    public void setupDatabase() {
        jdbc.execute(sqlAddProduct);
        
    }
    
    @Test
    public void isProductNullCheck() {
        assertTrue(productService.checkIfProductIsNull(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c")), 
                "@BeforeTransaction create product: return true");
        assertFalse(productService.checkIfProductIsNull(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b41")), 
                "A Product should have different UUID id: return false");
    }

    @Test
    public void createProduct() {

       
        Product product = new Product();
        product.setName("Product2");
        product.setDescription("description");
        product.setPrice(BigDecimal.valueOf(2000));
        when(productRepository.findByName(product.getName())).thenReturn(null);
        when(productRepository.save(product)).thenReturn(product);

        Product createdProduct = productService.createProduct(product);

      
        assertNotNull(createdProduct);
        assertEquals("Product2", createdProduct.getName());
    }
    
    @Test
    public void deleteProductService() {
       
        boolean deletedProduct = productService.checkIfProductIsNull(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c"));
        
        assertTrue(deletedProduct);

        productService.deleteProduct(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c"));

        deletedProduct = productService.checkIfProductIsNull(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c"));

        assertFalse(deletedProduct);
    }

    @SqlGroup({ @Sql(scripts = "/insertData.sql", config = @SqlConfig(commentPrefix = "`"))})
    @Test
    public void getProductService() {
        List<Product> products = productService.getAllProducts();
        
        assertEquals(5, products.size());
    }

    @SqlGroup({ @Sql(scripts = "/insertData.sql", config = @SqlConfig(commentPrefix = "`"))})
    @Test
    public void getProductByIdService() {
        Product product = productService.getProductById(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b43"));

        assertEquals(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b43"), product.getId());
    }

    @SqlGroup({ @Sql(scripts = "/overRideData.sql", config = @SqlConfig(commentPrefix = "`"))})
    @Test
    public void updateProductService() {

        Product product = new Product();
        product.setName("Product2");
        product.setPrice(BigDecimal.valueOf(2500.00));
        product.setDescription("description test");

        productService.updateProduct(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c"), product);
        

        assertNotNull(product);

        
        assertNotEquals("updated description", product.getDescription());
        assertEquals("Product2", product.getName());
    }
 
    @AfterEach
    public void setupAferTransaction() {
        jdbc.execute(sqlDeleteProduct);
    }
}
