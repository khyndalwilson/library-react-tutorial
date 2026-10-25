import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { use, useState, useEffect } from 'react';
import Price from './Price';
import { Link, useParams } from "react-router-dom";

const Book = ({ book }) => {
  const [img, setImg] = useState(false);

  useRef mounteRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    img.onload =() => {
      setTimeout
if (mounteRef.current) {
      setImg(image);
    }, 300);
    return () => {
      // When the component is unmounted, cancel the timeout
      mounteRef.current = false;

  
  return (
    <div className="book">
      {img ? (
        <></>
      )}
    </div>
      <div className="book__img--skeleton"></div>
      <div className="book__title--skeleton">
        <div className="book__rating--skeleton">
          <div className="book__price--skeleton"></div>
        </div>
      </div>
      {* <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" onLoad={imageLoaded} />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  ); */}
} */}

export default Book;