import React from "react";
import ImgLogo from "../../assets/logo-star-wars.png";
import SearchCharacters from "../SearchCharacters";
import GenderFilter from "../../components/GenderFilter";
import { useState } from "react";
import SpeciesFilter from "../../components/SpeciesFilter";
import MovieFilter from "../../components/MovieFilter";




function Header({ }) {

  const [text, setText] = useState('');
  return (
    <header className="movies-container">      
        <img src={ImgLogo} className="logo"alt="logo" />       
        <h1 className="header-title">UNIVERSE</h1> 

      <GenderFilter /> 
      <SpeciesFilter />
      <MovieFilter />     
      <SearchCharacters value={text} onChange={(search) => setText(search)} />

    </header>
  );
}

export default Header;
