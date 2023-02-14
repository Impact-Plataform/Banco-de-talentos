import React from "react";
import ImgLogo from "../../assets/logo-star-wars.png";
import SearchFilter from "../SearchFilter/searchFilter";
import { useState } from "react";



function Header({ }) {

  const [text, setText] = useState('');
  return (
    <header className="movies-container">
      <div className="logo-container">
        <img src={ImgLogo} alt="logo" />
      </div>

      <div className="header-title">
        <h1>UNIVERSE</h1>
      </div>

      <SearchFilter value={text} onChange={(search) => setText(search)} />

    </header>
  );
}

export default Header;
