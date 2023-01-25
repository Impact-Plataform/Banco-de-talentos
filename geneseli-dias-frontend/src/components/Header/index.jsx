import React from "react";
import ImgLogo from "../../assets/logo-star-wars.png";
//import { CharacterContext } from '../context/CharacterContext';
//import React, { useContext } from 'react';
//import { useNavigate } from 'react-router-dom';

/*export const Search = () => {
  const { valueSearch, onInputChange, onResetForm } = useContext(CharacterContext);
  const navigate = useNavigate();

  const onSearchSubmit = event => {
    event.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };*/

function Header({ }) {
  return (
    <header className="movies-container">
      <div className="logo-container">
        <img src={ImgLogo} alt="logo" />
      </div>

      <div className="header-title">
        <h1>UNIVERSE</h1>
      </div>
      
    

    </header>
  );
}

export default Header;
