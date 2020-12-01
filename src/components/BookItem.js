import React from 'react';
import '../style/BookItem.css';
import cover from "../assets/img/defaultcover.jpeg";

export const BookItem = ({book}) => {

  const getFormatedPublishYear = (publishYears) => {
    const newFormatedPublishYears = publishYears.map((year, index) => {

      const isOnlyOneElement = publishYears.length === 1;
      const isLastElement = publishYears.length - 1 === index;

      if (isOnlyOneElement || isLastElement) {
        return year;
      };

      return year + ", ";
      
    });

    return newFormatedPublishYears;
  }

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
            <h6>{book.author_name}</h6>
          </div>
          <div>
            {book.publish_year &&
              <p>Data wydania: {getFormatedPublishYear(book.publish_year)}</p>
            }
            <p>Wydawnictwo: {book.publisher}</p>
          </div>
        </div>
      </div>
    </div>
  );
};