import React, { useEffect, useState } from "react";
import api from "../../service/api";
import bb8 from "../../assets/images/bb-8.svg"
import logo from "../../assets/images/star-wars-logo.png";
import style from "./Header.module.css";


const Header = ({ filmes }) => {
  const [films, setFilms] = useState([]);
  const [especie, setEspecie] = useState([]);
  const [genero, setGenero] = useState([]);

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

  return (
    <nav className="navbar bg-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} className={style.logo} />
        </a>
        
        <form className="d-flex justify-content-start w-50" role="search">
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
          />
          <select className="form-select me-2 w-25" aria-label="Select">
            <option selected>Filtrar</option>
            <option value={especie}>Especie</option>
            <option value={films}>Filmes</option>
            <option value={genero}>Genero</option>
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
        <img src={bb8} alt="icone personagem bb-8" className={style.svg} />
      </div>
    </nav>
  );
};

export default Header;
