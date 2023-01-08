package com.impact.project;

import com.impact.project.model.Product;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;


@SpringBootApplication
public class ImpactProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImpactProjectApplication.class, args);
	}

	@Bean
	@Scope(value = "prototype")
	Product getProduct() {
		return new Product();
	}
}

