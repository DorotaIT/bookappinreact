import React from 'react';
import '../style/SearchForm.css';

export const SearchForm = () => {


  return (
    <div className="search-form container">
      <div className="row main-search-form">
        <div className="col-md-4">
          <div className="main-logo">
            <h4 className="logo-text">BookApp</h4>
          </div>
        </div>
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Wyszukaj książkę lub autora..."/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};