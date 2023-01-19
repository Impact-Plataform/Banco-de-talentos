import React from 'react'

const SearchInput = ({ value, onChange}) => {

  function handleChange(event){
    onChange(event.target.value);
  }

  return (
    <form className="d-flex justify-content-center w-50" role="search">
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
            value={value}
            onChange={handleChange}
          />
           <select className="form-select me-2 w-25" aria-label="Select" id="selecao">
            <option value="empty">Filtrar</option>
            <option value="1">Filmes</option>
            <option value="2">Espécies</option>
            <option value="3">Personagens</option>
            <option value="4">Naves estelares</option>
            <option value="5">Veículos</option>
            <option value="6">Planetas</option>
          </select>
        </form>
  )
}

export default SearchInput