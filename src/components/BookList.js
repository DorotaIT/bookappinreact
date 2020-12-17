import React from 'react';
import { BookItem } from './BookItem';
import '../style/BookList.css';

export const BookList = (props) => {
  const {books} = props;
  console.log(books);
  const renderedBookInfo = books.map((book, index) => {
    return (
      <BookItem
        key={index}
        book={book}
      />
    );
  }
)
  
  return (
    <div>
      {books.length
      ? <div className="book-list">
          {renderedBookInfo}
      </div>
      : <div className="no-results">
        <h5>Brak wyników wyszukiwania.</h5>
      </div>
        }
    </div>
  );
};