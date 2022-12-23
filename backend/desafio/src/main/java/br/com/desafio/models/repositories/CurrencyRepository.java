package br.com.desafio.models.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.desafio.models.entities.Currency;

public interface CurrencyRepository extends JpaRepository<Currency, Long> {

    Currency findBySymbol(String symbol);
}
