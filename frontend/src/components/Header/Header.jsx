import React, { useState } from "react";
import api from "../../service/api";
import bb8 from "../../assets/images/bb-8.svg";
import logo from "../../assets/images/star-wars-logo.png";
import style from "./Header.module.css";
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  const [text, setText] = useState("");
  console.log(text);
  const [films, setFilms] = useState([]);
  console.log(films, "os filmes");
  const [species, setSpecies] = useState([]);
  console.log(species, "as especies");
  const [personagem, setPersonagem] = useState([]);
  console.log(personagem, "o personagem");
  const [starships, setStarships] = useState([]);
  console.log(starships, "naves");
  const [vehicles, setVehicles] = useState([]);
  console.log(vehicles);
  const [planets, setPlanets] = useState([]);
  console.log(planets);

  function select() {
    const s = document.getElementById("selecao");
    const selecao = s.options[s.selectedIndex].value;

    if (text && selecao == "1") {
      return buscaFilmes();
    } else if (text && selecao == "2") {
      return buscaEspecies();
    } else if (text && selecao == "3") {
      return buscaPersonagem();
    } else if (text && selecao == "4") {
      return buscaNaves();
    } else if (text && selecao == "5") {
      return buscaVeiculos();
    } else if (text && selecao == "6") {
      return buscaPlanetas();
    }
  }

  const buscaFilmes = () => {
    api
      .get(`films/?search=${text}`)
      .then((response) => {
        setFilms([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaEspecies = () => {
    api
      .get(`species/?search=${text}`)
      .then((response) => {
        setSpecies([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaPersonagem = () => {
    api
      .get(`people/?search=${text}`)
      .then((response) => {
        setPersonagem([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaNaves = () => {
    api
      .get(`starships/?search=${text}`)
      .then((response) => {
        setStarships([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaVeiculos = () => {
    api
      .get(`vehicles/?search=${text}`)
      .then((response) => {
        setVehicles([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaPlanetas = () => {
    api
      .get(`planets/?search=${text}`)
      .then((response) => {
        setPlanets([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <nav className="navbar bg-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} className={style.logo} />
        </a>
        <div className={style.container}>
          <SearchInput value={text} onChange={(search) => setText(search)} />
          <button className="btn btn-success" type="submit" onClick={select}>
            Buscar
          </button>
        </div>
        <img src={bb8} alt="icone personagem bb-8" className={style.svg} />
      </div>
    </nav>
  );
};

export default Header;
