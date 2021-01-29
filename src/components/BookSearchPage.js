import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { BookList } from './BookList'; 

export const BookSearchPage = () => {
  const [books, setBooks] = useState(null);

  const callbackSearchingWord = (responseBooks) => {
    setBooks(responseBooks.docs);
  }

  return (
    <div>
      <SearchForm
      callbackSearchingWord={callbackSearchingWord}
      />
      {books !== null
      ? <BookList 
      books={books}
      />
      : <></>
    }
      
    </div>
  );
};
