import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import logoStarWars from '../assets/logo.svg';

export const Navigation = () => {
  // const { number } = useContext(CharacterContext);
  // console.log('number', number);
  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={logoStarWars} alt="Logo Star Wars" />
        </Link>

        <form>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input type="search" name="valueSearch" id="" placeholder="Search By Name" />
          </div>

          <button className="btn-search">Search</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
