import React, { useState } from 'react';
import { SearchForm } from './SearchForm';
import { BookList } from './BookList'; 

const mock = [
  {
    image: 'https://cdn-lubimyczytac.pl/upload/books/4911000/4911596/816858-352x500.jpg',
    author: 'Shelby Mahurin',
    title: 'Gołąb i wąż',
    description: 'Louise uciekła przed dwoma laty z sabatu, wyrzekając się magii i swoich mocy. Plan był prosty: schronić się w Cesarine i żyć z tego, co będzie wstanie ukraść dzięki własnej przebiegłości i sprytowi. Ale tu, w mieście ogarniętym strachem przed magią, wiedźmy takie jak Lou są ścigane. I palone na stosach. Reid Diggory, łowca czarownic na usługach Kościoła, kieruje się w życiu jedną zasadą: wiedźmy muszą zginąć! Ścieżki Reida i Lou miały się nigdy nie przeciąć, lecz niegodziwy rozkaz zmusza ich do niemożliwego – małżeństwa.'
  }
];

export const BookSearchPage = () => {

  const [books, setBooks] = useState(mock);

  return (
    <div>
      <SearchForm/>
      <BookList 
      books={books}
      />
    </div>
  );
};
