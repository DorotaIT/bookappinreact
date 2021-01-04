import React from 'react';
import '../style/BookItem.css';
import cover from "../assets/img/defaultcover.jpeg";

export const BookItem = ({book, id}) => {

  const getFormattedDataOfBooks = (booksData) => booksData.join(", ");

  return (
    <div className="book-item container">
      <div className="row main-book-item">
        <div className="col-sm-4 col-md-3 pic">
          {book.cover_i
            ? <img 
                className="img-fluid book-pic" 
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
            />
            : <img
                className="img-fluid book-pic" 
                src={cover}
              />
          }
        </div>
        <div className="col-sm-8 col-md-9 info-book">
          <div>
            <h5>{book.title}</h5>
            {book.author_name &&
            <h6>{getFormattedDataOfBooks(book.author_name)}</h6>
            }
          </div>
          <div>
            {book.publish_year &&
              <p>Data wydania: {getFormattedDataOfBooks(book.publish_year)}</p>
            }
            {book.publisher &&
            <p>Wydawnictwo: {getFormattedDataOfBooks(book.publisher)}</p>
            }
          </div>
          
      <div className="more-book-info-button">
        <button 
          className="btn btn-primary" 
          type="button" 
          data-toggle="collapse" 
          data-target={`#cover${id}`}
          aria-expanded="false" 
          aria-controls={`cover${id}`}>
            Więcej szczegółów
        </button>
        <div className="collapse" id={`cover${id}`}>
          <div className="card card-body">
            {book.isbn &&
              <p>ISBN: {getFormattedDataOfBooks(book.isbn)}</p>
            }
             {book.subject &&
              <p>Tagi: {getFormattedDataOfBooks(book.subject)}</p>
            }
          </div>
        </div>
      </div>

    </div>
  </div>

  
      
      
   
</div>
  );
};