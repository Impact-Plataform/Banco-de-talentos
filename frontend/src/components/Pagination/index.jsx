import React, { useEffect } from "react";
import P from "prop-types";
import { useCharactersContext, useFilterContext } from "../../contexts";
import { PaginationLink, PaginationList } from "./styles";
import { theme } from "../../styles";

export const Pagination = ({ perPage, setCurrentPage, currentPage }) => {
  const { filter_character } = useFilterContext();
  const { characters } = useCharactersContext();

  const numOfTotalPages = Math.ceil(filter_character.length / perPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  const redirecToFirstPage = () => {
    if (filter_character.length !== characters.length) setCurrentPage(1);
  };

  useEffect(() => {
    redirecToFirstPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter_character]);

  return (
    <nav role="navigation" aria-label="Pagination">
      <PaginationList>
        <li>
          <PaginationLink
            onClick={previousPage}
            cor={`${theme.colors.lightColor}`}
            pointerevent={currentPage === 1 ? "none" : "visible"}
          >
            ◂
          </PaginationLink>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            aria-label={`Current Page ${page}`}
            aria-current="true"
          >
            <PaginationLink
              cor={`${
                currentPage === page
                  ? `${theme.colors.yellowColor}`
                  : `${theme.colors.lightColor}`
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {`${page}`}
            </PaginationLink>
          </li>
        ))}
        <li>
          <PaginationLink
            onClick={nextPage}
            cor={`${theme.colors.lightColor}`}
            pointerevent={currentPage === numOfTotalPages ? "none" : "visible"}
          >
            ▸
          </PaginationLink>
        </li>
      </PaginationList>
    </nav>
  );
};

Pagination.propTypes = {
  perPage: P.number,
  setCurrentPage: P.func,
  currentPage: P.number,
};
