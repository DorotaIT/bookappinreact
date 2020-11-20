import React from 'react';
import '../style/BookItem.css';

export const BookItem = ({book}) => {
  
  return (
    <div className="book-item container">
      <div className="row main-book-item">
        <div className="col-sm-4 col-md-3 pic">
          <img className="img-fluid book-pic" src={book.image}/>
        </div>
        <div className="col-sm-8 col-md-9 info-book">
          <div>
            <h5>{book.title}</h5>
            <h6>{book.author}</h6>
          </div>
          <div>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};