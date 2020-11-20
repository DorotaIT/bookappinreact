import React from 'react';
import { BookItem } from './BookItem';
import '../style/BookList.css';

export const BookList = (props) => {
  const {books} = props;

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
    <div className="book-list">
      {renderedBookInfo}
    </div>
  );
};