import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { BookList } from './BookList'; 

export const BookSearchPage = () => {
  const [books, setBooks] = useState([]);

  const callbackSearchingWord = (responseBooks) => {
    setBooks(responseBooks.docs);
    console.log(responseBooks.docs);
  }

  return (
    <div>
      <SearchForm
      callbackSearchingWord={callbackSearchingWord}
      />
      <BookList 
      books={books}
      />
    </div>
  );
};
