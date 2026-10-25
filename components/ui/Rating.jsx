import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Rating = () => {
  return (
    <div className="book__rating"
     <div className="book__ratings">
        {
          new Array(Math.floor(book.rating)).fill(0).map((element, index) => <FontAwesomeIcon icon="star" key={index}/>)
          {
            !Number.isInteger(book.rating) &&<FontAwesomeIcon icon="star-half-alt" key={index}/>)
          }>
      
    </div>
  )
}
