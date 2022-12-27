package com.impact.desafio.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {
	
	@Bean
	public OpenAPI springBlogPessoalOpenAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("Projeto Desafio Impact")
						.description(" - Projeto Desafio Impact -")
						.version("v0.0.1")
					.license(new License()
							.name("Impact-Plataform")
							.url("plataformatech.com"))
					.contact(new Contact()
							.name("Rodrigo Lima")
							.url("https://github.com/rodriigolima")
							.email("rodrigomoreiralima@hotmail.com")))
					.externalDocs(new ExternalDocumentation()
							.description("Github")
							.url("https://github.com/rodriigolima/Banco-de-talentos/tree/rodrigo-lima-backend"));
	}
}
