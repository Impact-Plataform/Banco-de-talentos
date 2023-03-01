import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { usePageNumber } from "../../contexts/providers/Pagination";
import "./stylesPaginationComponent.css";

export const PaginationComponent = () => {
  const {
    setPageNumber,
    selectedPaginationNumber,
    previousPage,
    nextPage,
    paginationNumbers,
  } = usePageNumber();
  return (
    <section className="pagination__container">
      <div className="pagination_arrow_container" onClick={previousPage}>
        <AiOutlineArrowLeft
          className="pagination_arrow"
          size={44}
          onClick={previousPage}
        />
      </div>

      <div className="pagination_numbers">
        {paginationNumbers.map((number) => {
          return (
            <button
              onClick={() => setPageNumber(number)}
              className={
                number === selectedPaginationNumber
                  ? "pagination_number_button pagination_number_button--current"
                  : "pagination_number_button"
              }
            >
              {number}
            </button>
          );
        })}
      </div>

      <div className="pagination_arrow_container" onClick={nextPage}>
        <AiOutlineArrowRight
          className="pagination_arrow"
          size={44}
          onClick={nextPage}
        />
      </div>
    </section>
  );
};
