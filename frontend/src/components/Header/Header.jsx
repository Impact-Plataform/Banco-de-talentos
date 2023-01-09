import React from "react";
import logo from "../../assets/images/jedi-logo.svg"
import style from "./Header.module.css"
const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand"><img src={logo} className={style.logo}/>SWAPI - The Star Wars API</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
