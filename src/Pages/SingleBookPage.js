import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import cover from "../assets/img/defaultcover.jpeg";
import '../style/SingeBookPage.css';

export const SingleBookPage = () => {
  const { isbn } = useParams();
  const [singleBookResponse, setSingleBookResponse] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get('http://openlibrary.org/api/books?', {
        params: {
        bibkeys: 'ISBN:' + isbn,
        format: 'json',
        jscmd: 'data' 
        },
      });
      console.log('data', data[`ISBN:${isbn}`]);
      setSingleBookResponse(data[`ISBN:${isbn}`]);
    }

    search();

  }, [isbn]);

  useEffect(() => {
    if (singleBookResponse !== '') {
      setIsLoading(false);
    } 
  }, [singleBookResponse])

  const getCoverImageUrlFromResponse = () => {
    if (singleBookResponse.cover) {
      if (singleBookResponse.cover.medium) {
        return singleBookResponse.cover.medium 
      } else if (singleBookResponse.large) {
          return singleBookResponse.large
      } else if (singleBookResponse.small) {
          return singleBookResponse.small
      };
    };
  };
  
// 1 autor pusty string
// > 1 autor przecinki a na ostatnim indexie pusty string

  const getCommaOnIndex = (index, authors) => {
    if (authors.length > 1 && index !== authors.length -1) {
      return ", "
    }
    
  }

  const renderAuthors = () => (
    singleBookResponse.authors.map((author, index, authors) => (
      <li className="authors-li">
        <a target="_blank" rel="noreferrer" href={author.url}>{author.name}{getCommaOnIndex(index, authors)} </a>
      </li>
    ))
  )

  const renderBook = () => (
      <>
        <div className="rendered-single-book container">
          <div className="rendered-book-row row">
            <div className="rendered-pic col-sm-3">
              {getCoverImageUrlFromResponse()
                ? <img alt={singleBookResponse.title} src={getCoverImageUrlFromResponse()}/>
                : <img className="img-fluid book-pic" alt={singleBookResponse.title} src={cover}/>
              }
            </div>
            <div className="rendered-book-info col-sm-9">
              <h3>{singleBookResponse.title}</h3>
              <ul className="author-ul">{renderAuthors()}</ul>
              <p className="publisher-space">Publisher: {singleBookResponse.publishers[0].name}</p>
              <p>Number of pages: {singleBookResponse.number_of_pages}</p>
              <p>Publish date: {singleBookResponse.publish_date}</p>
              <p className="book-isbn">Book ISBN: {isbn}</p>
              <a className="book-url" target="_blank" rel="noreferrer" href={singleBookResponse.url}>See more on OpenLibrary website</a>
            </div>
          </div>
        </div>
      </>
    )

    const renderSpinner = () => (
      <div className="render-spinner">
        <Spinner className="spinner-single-book"/>
      </div>
    )

  return (
    <div className="single-book-page">
      {isLoading
        ? renderSpinner()
        : renderBook()
      }

    </div>
  );
};