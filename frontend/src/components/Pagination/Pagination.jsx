import React from "react";

const Pagination = ({ anterior, proxima, page, limit }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mb-0 p-3">
        {page == 1 ? (
          <li className="page-item disabled">
            <a className="page-link bg-warning" onClick={anterior}>
              início
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a className="page-link bg-warning" onClick={anterior} href="#">
              Anterior
            </a>
          </li>
        )}
        <li className="page-item">
          <a className="page-link bg-tertiary text-warning" href="#">
            {page}
          </a>
        </li>
        {page == `${limit}` ? (
          <li className="page-item disabled">
            <a className="page-link bg-warning" href="#" onClick={proxima}>
              Fim
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a className="page-link bg-warning" href="#" onClick={proxima}>
              Próximo
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
