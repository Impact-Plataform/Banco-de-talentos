import React from 'react';
import '../assets/styles/Pagination.css';

export const Pagination = ({ characterPerPage, currentPage, setCurrentPage, totalCharacters }) => {
  const pageNumbers = [];

  // calcula o total de paginas para mostrar a paginação
  for (let i = 1; i <= Math.ceil(totalCharacters / characterPerPage); i++) {
    pageNumbers.push(i);
  }
  const onSpecificPage = number => setCurrentPage(number);

  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="list">
        {pageNumbers.map(numberPage => (
          <li key={numberPage}>
            <a
              className={`link ${numberPage === currentPage ? 'is-current' : ''}`}
              onClick={() => onSpecificPage(numberPage)}
            >
              {numberPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
