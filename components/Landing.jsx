import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
              THe most awarded online library platform.
            </h1>
            <h2>
              Find your dream book with <span className="highlight">Library</span> and get it delivered to your doorstep.
              
            </h2>
            <a href="features">
              <button className="btn__primary">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    <div>
      
    </div>
  );
}

export default Landing;
