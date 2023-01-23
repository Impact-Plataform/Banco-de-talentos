import React from 'react';
import ImgLogo from '../../assets/logo.png';


function MovieHeader({setMovies, movies}) {

  const sortedMovies = movies.sort(function (a, b) {
    return new Date(b.created_at) - new Date(a.created_at)
  })

  return (
    <header className="movies-container">
      <div className="logo-container">
        <img src={ImgLogo} alt="logo" />
      </div>

      {/* <div>
        <div className="search-container">
          <div className="search-input">
            <input type="search" />
          </div>
        </div>

        <div className="btn-container">
          <button>Nota</button>
          <button>Duração</button>
          <button>Lançamento</button>
        </div>
      </div> */}



    </header>
  )
}

export default MovieHeader;
