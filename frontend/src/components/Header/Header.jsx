import React, { useContext, useState } from "react";
import api from "../../service/api";
import bb8 from "../../assets/images/icones/bb-8.svg";
import logo from "../../assets/images/icones/star-wars-logo.png";
import style from "./Header.module.css";
import SearchInput from "../SearchInput/SearchInput";
import { StateContext } from "../../context/StateProvider";

const Header = () => {
  const { info, setInfo } = useContext(StateContext);

  const [text, setText] = useState("");

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
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaEspecies = () => {
    api
      .get(`species/?search=${text}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaPersonagem = () => {
    api
      .get(`people/?search=${text}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    console.log(info, "atualizado");
  };

  const buscaNaves = () => {
    api
      .get(`starships/?search=${text}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaVeiculos = () => {
    api
      .get(`vehicles/?search=${text}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const buscaPlanetas = () => {
    api
      .get(`planets/?search=${text}`)
      .then((response) => {
        setInfo(response.data.results);
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
