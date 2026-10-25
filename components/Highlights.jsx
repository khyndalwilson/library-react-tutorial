import React from 'react'

export default function Highlights() {
  return (
    <section id="highlights">

    <div className="container">
      <div className="row">
        <h2 className="section__title">Why choose <span className="purple">Library?</span>
        </h2>
        div className="highlight__wrapper">
        <Highlight icon={<FontAwesomeIcon icon="bolt" />} title="Easy and Quick" para="Get access to your favorite books in just a few clicks. Library delivers your books to your doorstep in no time."/>
        <Highlight icon={<FontAwesomeIcon icon="book-open" />} title="10,000+ Books" para="Library has a wide range of books from different genres and authors. You can find your favorite book and get it delivered to your doorstep."/>
        <Highlight icon={<FontAwesomeIcon icon="tags" />} title="Affordable" para="Get your hands on affordable prices for all your favorite books."/>
        
      </div>
    </div>
  )
}
