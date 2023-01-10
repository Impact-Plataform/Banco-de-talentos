import React from "react";
import vader from "../../assets/images/darth-vader.svg";
import style from "./Pagination.module.css"

const Pagination = ({anterior, proxima}) => {


  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link bg-warning" href="#" onClick={anterior} cursor="pointer">
            Anterior
          </a>
        </li>
        <li class="page-item"><img src={vader} className={style.svg}/></li>
        <li className="page-item">
          <a className="page-link bg-warning" href="#" onClick={proxima} cursor="pointer">
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
