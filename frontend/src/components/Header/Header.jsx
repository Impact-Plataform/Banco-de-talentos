import React, { useEffect, useState } from "react";
import logo from "../../assets/images/star-wars-logo.svg";
import style from "./Header.module.css";
import api from "../../service/api";

const Header = ({ filmes }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    api
      .get(`films/`)
      .then((response) => {
        setFilms([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  console.log(films, "filmes");

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} className={style.logo} />
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
          />
          <select class="form-select me-2" aria-label="Select">
            <option selected>Filtrar</option>
            <option value="1">Especie</option>
            <option value={filmes}>Filmes</option>
            <option value="3">Genero</option>
          </select>
          {films.map((result) => {
            return (
              filmes = result.title
              );
          })}

          <button className="btn btn-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
