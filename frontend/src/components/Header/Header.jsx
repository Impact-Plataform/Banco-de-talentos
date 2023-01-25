import React, { useContext, useState } from "react";
import api from "../../service/api";
import bb8 from "../../assets/images/icones/bb-8.svg";
import logo from "../../assets/images/icones/star-wars-logo.png";
import style from "./Header.module.css";
import SearchInput from "../SearchInput/SearchInput";
import { StateContext } from "../../context/StateProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { info, setInfo } = useContext(StateContext);

  const [text, setText] = useState("");

  function limparCache() {
    setInfo([]);
    setText("");
  }

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
    } else if (text && selecao == "7") {
      return buscaGenero();
    }
  }

  const buscaGenero = () => {
    const person = setInfo(info.filter((pers) => pers.gender == `${text}`));
    return person;
  };

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
      <div className="container-fluid d-flex justify-content-center">
        <Link className="navbar-brand" to={"/"}>
          <img onClick={limparCache} src={logo} className={style.logo} />
        </Link>

        <div className={style.container}>
          <SearchInput value={text} onChange={(search) => setText(search)} />

          <button className="btn btn-success" type="submit" onClick={select}>
            Buscar
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalHelp"
        >
          Ajuda?
        </button>

        <div
          className="modal fade"
          id="modalHelp"
          tabIndex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="ModalLabel">
                  Informações importantes:
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Todos os dados de Star Wars que você sempre quis: Planetas,
                  Naves Espaciais, Veículos, Pessoas, Filmes e Espécies.
                </p>
                <ul>
                  <li>
                    <p>
                      A busca deverá ser feita em inglês para obter os
                      resultados corretos exemplo: "attack of the clones",
                      "human", "female".
                    </p>
                  </li>
                  <li>
                    <p>
                      A busca por gênero está disponível somente na rota de
                      personagens.
                    </p>
                  </li>
                  <li>
                    <p>
                      Você poderá selecionar uma nova rota na página inicial
                      clicando na logo "Star Wars"
                    </p>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <p>“Que a força esteja com você”...</p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={bb8} alt="icone personagem bb-8" className={style.svg} />
      </div>
    </nav>
  );
};

export default Header;
