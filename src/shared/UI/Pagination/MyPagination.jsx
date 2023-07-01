import PropTypes from "prop-types";

import s from "./myPagination.module.scss";

const MyPagination = ({ currentPage, totalPages, goToPage, goToNextPage, goToPreviousPage }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((index) => index + 1);

  return (
          <div className={s.pagination}>
      <button
        className={s.pageButton}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        type="button"
      >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${s.pageButton} ${currentPage === pageNumber ? s.activePage : ''}`}
          onClick={() => goToPage(pageNumber)}
          type="button"
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={s.pageButton}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

MyPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goToPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
};

export default MyPagination;