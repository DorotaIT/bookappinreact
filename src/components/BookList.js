import React, { useState } from 'react';
import { BookItem } from './BookItem';
import { Pagination } from './Pagination';
import '../style/BookList.css';

export const BookList = (props) => {
  const {books} = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderedBookInfo = currentBooks.map((book, index) => {
    return (
      <BookItem
        key={index}
        id={index}
        book={book}
      />
    );
  }
)
  
  return (
    <div>
      <div>
        {books.length
        ? <div className="book-list">
            {renderedBookInfo}
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={books.length}
              paginate={paginate}
              currentPage={currentPage}
            />
        </div>
        : <div className="no-results">
          <h5>Brak wyników wyszukiwania.</h5>
        </div>
          }
      </div>
    </div>
  );
};