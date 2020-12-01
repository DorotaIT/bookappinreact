import React, { useState, useEffect } from 'react';
import '../style/SearchForm.css';
import Axios from 'axios';

export const SearchForm = (props) => {
  const {callbackSearchingWord} = props;
  const [searchingWord, setSearchingWord] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      const replacedTitle = searchingWord.split(' ').join('+');
      setDebouncedText(replacedTitle);
    },500);

    return () => {
      clearTimeout(timerId);
    }
  }, [searchingWord])

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get('http://openlibrary.org/search.json', {
        params: {
          title: debouncedText
        },
      });

      callbackSearchingWord(data);

    }
    if (debouncedText !== '') {
      search();
    }
    
  }, [debouncedText]); 

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
              <input 
                value={searchingWord}
                onChange={(e) => setSearchingWord(e.target.value)}
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Wyszukaj książkę lub autora..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};