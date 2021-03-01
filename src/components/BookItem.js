import React from 'react';
import '../style/BookItem.css';
import cover from "../assets/img/defaultcover.jpeg";
import { Link } from 'react-router-dom';

export const BookItem = ({book, id}) => {

  const getFormattedDataOfBooks = (booksData) => booksData.join(", ");

  return (
    <div className="book-item container">
      <div className="row main-book-item">
        <div className="col-sm-4 col-md-3 pic">
          {/* todo refactor if statement with book.cover.i */}
          {book.cover_i
            ? <Link className="book-link" to={`/book/${book.isbn ? book.isbn[0] : ''}`}>
            <img 
                className="img-fluid book-pic" 
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
                alt="book"
            />
            </Link>
          : <Link to={`/book/${book.isbn ? book.isbn[0] : ''}`}>
                <img
                  className="img-fluid book-pic" 
                  src={cover}
                  alt="alternative-book"
                />
              </Link>
          }
        </div>
        <div className="col-sm-8 col-md-9 info-book">
          <div>
            <Link className="book-link" to={`/book/${book.isbn ? book.isbn[0] : ''}`}>
              <h5 className="book-title">{book.title}</h5>
            </Link>
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
          className="btn btn-primary book-info-button" 
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