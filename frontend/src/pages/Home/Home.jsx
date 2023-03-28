import React from "react";
import { Link } from "react-router-dom";
import bgvehicles from "../../assets/images/icones/bgvehicles.jpg";
import bgnaves from "../../assets/images/icones/bgnaves.jpg";
import bgespecies from "../../assets/images/icones/bgespecies.jpeg";
import bgpeople from "../../assets/images/icones/bgpeople.jpg";
import bgfilms from "../../assets/images/icones/bgfilms.jpg";
import bgplanets from "../../assets/images/icones/bgplanets.jpg";

const Home = () => {
  return (
    <div className="container-fluid d-flex justify-content-center bg-tertiary text-center">
      <div className="row row-cols-1 row-cols-md-3 p-5 mh-100 g-3 mt-5">
        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/personagens"}>
              <img
                src={bgpeople}
                className="card-img opacity-75"
                alt="poster personagens"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-warning">Personagens</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/filmes"}>
              <img
                src={bgfilms}
                className="card-img opacity-75"
                alt="poster filmes"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-warning">Filmes</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/especies"}>
              <img
                src={bgespecies}
                className="card-img opacity-75"
                alt="poster espécies"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-danger">Espécies</h4>
              </div>
            </Link>
          </div>
        </div>

        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/naves"}>
              <img
                src={bgnaves}
                className="card-img opacity-75"
                alt="poster naves estelares"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-danger">Naves</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/veiculos"}>
              <img
                src={bgvehicles}
                className="card-img opacity-75"
                alt="poster veículos"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-primary">veículos</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="card col p-0 me-3 mb-3">
            <Link to={"/planetas"}>
              <img
                src={bgplanets}
                className="card-img opacity-75"
                alt="poster planetas"
                style={{ height: 300 + "px" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title fs-3 text-primary">Planetas</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
