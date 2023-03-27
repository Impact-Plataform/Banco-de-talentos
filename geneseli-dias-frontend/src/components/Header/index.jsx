import React from "react";
import ImgLogo from "../../assets/logo-star-wars.png";
import GenderFilter from "../../components/GenderFilter";
import { useState } from "react";
import SpeciesFilter from "../../components/SpeciesFilter";

function Header({ }) {
  const [] = useState('');
  return (
    <header className="movies-container">      
      <img src={ImgLogo} className="logo"alt="logo" />         
      <GenderFilter /> 
      <SpeciesFilter />
    </header>
  );
}

export default Header;
