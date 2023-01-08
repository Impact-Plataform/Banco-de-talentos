package com.impact.project;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.impact.project.controller.ProductController;
import com.impact.project.model.Product;
import com.impact.project.repository.ProductRepository;
import com.impact.project.service.ProductService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.math.BigDecimal;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional
@TestPropertySource("/application-test.properties")
class ProductControllerTest {

    private static MockHttpServletRequest request;

    @PersistenceContext
    private EntityManager entityManager;

    @Mock
    ProductService productServiceMock;

    @Autowired
    private JdbcTemplate jdbc;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductController productController;

    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    private Product product;

    @Value("${sql.script.create.product}")
    private String sqlAddProduct;

    @Value("${sql.script.delete.product}")
    private String sqlDeleteProduct;

    public static final MediaType APPLICATION_JSON_UTF8 = MediaType.APPLICATION_JSON;


    @BeforeAll
    public static void setup() {

        request = new MockHttpServletRequest();

        request.setParameter("name", "Product2");
        request.setParameter("description", "description product2");
        request.setParameter("price", "500.00");
    }


    @BeforeEach
    public void setupDatabase() {

        mockMvc = MockMvcBuilders.standaloneSetup(productController).build();

        jdbc.execute(sqlAddProduct);

    }

    @Test
    public void getProductHttpRequest() throws Exception {


        product.setName("Product2");
        product.setDescription("description product2");
        product.setPrice(BigDecimal.valueOf(500));

        entityManager.persist(product);
        entityManager.flush();

        mockMvc.perform(MockMvcRequestBuilders.get("/api/products")).andExpect(status().isOk()).andExpect(content().contentType(APPLICATION_JSON_UTF8)).andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    public void getProductByIdHttpRequest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products/{id}", "e6ec75a3-cf21-4fa5-864f-2d6144f06b4c")).andExpect(status().isOk()).andExpect(content().contentType(APPLICATION_JSON_UTF8));
    }

    @Test
    public void createProductHttpRequest() throws Exception {

        product.setId(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b23"));
        product.setName("Product2");
        product.setDescription("description product2");
        product.setPrice(BigDecimal.valueOf(500));


        mockMvc.perform(post("/api/products").contentType(APPLICATION_JSON_UTF8).content(objectMapper.writeValueAsString(product)).accept(APPLICATION_JSON_UTF8)).andExpect(status().isCreated());

        Product verifyProduct = productRepository.findByName("Product2");


        assertNotNull(verifyProduct, "Product Should be valid.");
    }

    @Test
    public void createProductHttpBadRequest() throws Exception {


        product.setName("Product2");
        product.setDescription("description product2");
        product.setPrice(BigDecimal.valueOf(500));


        mockMvc.perform(post("/api/products").contentType(APPLICATION_JSON_UTF8).content(objectMapper.writeValueAsString(product)).accept(APPLICATION_JSON_UTF8)).andExpect(status().is4xxClientError());


        Product verifyProduct = productRepository.findByName("Product2");


        assertNull(verifyProduct, "Product Should be valid.");
    }

    @Test
    public void deleteProductHttpRequest() throws Exception {
        assertTrue(productRepository.findById(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c")).isPresent());

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/products/{id}", "e6ec75a3-cf21-4fa5-864f-2d6144f06b4c").contentType(MediaType.APPLICATION_JSON)).andExpect(status().is2xxSuccessful());

        assertFalse(productRepository.findById(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4c")).isPresent());
    }

    @Test
    public void deleteProductHttpRequestError() throws Exception {
        assertFalse(productRepository.findById(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4a")).isPresent());

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/products/{id}", "e6ec75a3-cf21-4fa5-864f-2d6144f06b4a")).andExpect(status().is4xxClientError()).andExpect(jsonPath("$.message", is("Product was not found")));

    }

    @Test
    public void updateProductHttpRequestErrorRequest() throws Exception {

        product.setId(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4a"));
        product.setName("Product2");
        product.setDescription("description");
        product.setPrice(BigDecimal.valueOf(5000));


        Map<String, Object> params = new HashMap<>();
        params.put("name", "Product1");
        params.put("description", "description att");
        params.put("price", 2500.00);

        String requestBody = objectMapper.writeValueAsString(params);

        mockMvc.perform(MockMvcRequestBuilders.put("/api/products/{id}", 
                "e6ec75a3-cf21-4fa5-864f-2d6144f06b4a").contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON).characterEncoding("UTF-8")
                .content(requestBody)).andExpect(status().is4xxClientError());

    }

    @Test
    public void updateProductHttpRequestError() throws Exception {
        assertFalse(productRepository.findById(UUID.fromString("e6ec75a3-cf21-4fa5-864f-2d6144f06b4a"))
                .isPresent());

        mockMvc.perform(MockMvcRequestBuilders.put("/api/products/{id}", 
                "e6ec75a3-cf21-4fa5-864f-2d6144f06b4a")).andExpect(status().is4xxClientError());

    }

    @AfterEach
    public void setupAferTransaction() {
        jdbc.execute(sqlDeleteProduct);
    }
}