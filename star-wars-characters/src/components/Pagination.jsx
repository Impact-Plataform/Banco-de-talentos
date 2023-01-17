import React from 'react';

export const Pagination = ({ characterPerPage, currentPage, setCurrentPage, totalCharacters }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / characterPerPage); i++) {
    pageNumbers.push(i);
  }
  const onSpecificPage = number => setCurrentPage(number);
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {pageNumbers.map(numberPage => (
          <li key={numberPage}>
            <a
              className={`pagination-link ${numberPage === currentPage ? 'is-current' : ''}`}
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
