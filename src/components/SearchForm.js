import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../style/SearchForm.css';
import { Spinner } from './Spinner';

export const SearchForm = (props) => {
  const {callbackSearchingWord} = props;
  const [searchingWord, setSearchingWord] = useState('');
  const [debouncedText, setDebouncedText] = useState('Szeptacz');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timerId = 0;
    if (searchingWord !== "") {
      timerId = setTimeout(() => {
        const replacedTitle = searchingWord.split(' ').join('+');
        setIsLoading(true);
        setDebouncedText(replacedTitle);
      },500);
    }

    return () => {
      clearTimeout(timerId);
    }
  }, [searchingWord])

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get('http://openlibrary.org/search.json', {
        params: {
          q: debouncedText
        },
      });

      setIsLoading(false);
      callbackSearchingWord(data);
    };
    if (debouncedText !== '') {
      search();
    }
    
  }, [debouncedText]); 

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
 
      return false;
    }
  }

  return (
    <div className="search-form container">
      <div className="row main-search-form">
        <div className="col-md-3 whole-logo">
          <div className="main-logo">
            <h4 className="logo-text">BookApp</h4>
          </div>
        </div>
        <div className="col-md-9">
          <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
            <div className="input-group">
              <input 
                value={searchingWord}
                onChange={(e) => setSearchingWord(e.target.value)}
                onKeyPress={handleEnterKeyPress}
                type="text" 
                className="form-control col-md-9" 
                id="inlineFormInputGroupUsername" 
                placeholder="Wyszukaj książkę lub autora..."
              />
              {isLoading
                ?<Spinner/>
                : <></>
              }
          </div>
        </div>
      </div>
    </div>
  );
};