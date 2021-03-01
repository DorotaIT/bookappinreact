import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../style/Pagination.css';

export const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];
  console.log("totalbooks", totalBooks)
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = (event) => {
    const nextPage = currentPage + 1;
    if (nextPage <= (pageNumbers.length)) {
      paginate(nextPage);
    } else {
      event.preventDefault();
    }
  };

  const handlePrevPage = (event) => {
    const prevPage = currentPage - 1;
    if (prevPage > 0) {
      paginate(prevPage);
    } else {
      event.preventDefault();
    }
  };

  return (
    <nav className="main-nav">
      <a onClick={handlePrevPage} href="!#" className="arrow-icon">
        <FontAwesomeIcon cursor={"pointer"} icon={faChevronLeft}/>
      </a>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item" id="myDIV">
              <a onClick={() => paginate(number)} href='!#' className={(currentPage === number ? "active" : "") + " page-link btn"}>
                {number}
              </a>
            </li>
          ))}
        </ul>
        <a onClick={handleNextPage} href="!#" className="arrow-icon">
          <FontAwesomeIcon cursor={"pointer"} icon={faChevronRight}/>
        </a>
    </nav>
  );
};