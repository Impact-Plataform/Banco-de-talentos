import React, { useEffect, useState } from "react";
import api from "../../service/api";
import bb8 from "../../assets/images/bb-8.svg";
import logo from "../../assets/images/star-wars-logo.png";
import style from "./Header.module.css";
import SearchInput from "../SearchInput/SearchInput";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import um from "../../assets/images/personagens/1.jpg";

const Header = () => {
  const [films, setFilms] = useState([]);
  console.log(films, "os filmes");
  const [species, setSpecies] = useState([]);
  console.log(species, "as especies");
  const [text, setText] = useState("");
  console.log(text);

  function select() {
    const s = document.getElementById("selecao");
    const selecao = s.options[s.selectedIndex].value;

    if (text && selecao == "1") {
      return buscaFilmes();
    } else if (text && selecao == "2") {
      return buscaEspecies();
    } else if (text && selecao == "3") {
      // buscaGenero;
    }
  }

  const buscaFilmes = () => {
    api
      .get(`films/`)
      .then((response) => {
        setFilms([response.data.results]);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      {films ? (
        films.map((filme, index) => {
          return (
            <Card
              key={index}
              imageId={um}
              nome={filme.title}
              // genero={item.gender}
              // altura={item.height}
              // peso={item.mass}
              // corDoCabelo={item.hair_color}
              // corDosOlhos={item.eye_color}
              // roupa={item.skin_color}
            />
          );
        })
      ) : (
        <Spinner />
      )}
  };

  const buscaEspecies = () => {
    api
      .get(`species/`)
      .then((response) => {
        setSpecies([response.data.results]);
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
