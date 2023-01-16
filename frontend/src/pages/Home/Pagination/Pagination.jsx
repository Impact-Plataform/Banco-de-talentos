import ReactPaginate from 'react-paginate';
import './style.css';

const Pagination = ({ displayUsersPage, usersPerPage, setPage }) => {
    const pageCount = Math.ceil(displayUsersPage.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPage(selected);
    };

    return (
        <>
            <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                pageCount={pageCount}
                onPageChange={changePage}
                marginPagesDisplayed={1}
                pageRangeDisplayed={0}
                containerClassName="pagination__bttns"
                previousLinkClassName="previous__bttns"
                nextLinkClassName="next__bttn"
                disabledClassName="pagination--disabled"
                activeClassName="pagination--active"
            />
        </>
    );
};

export default Pagination;
