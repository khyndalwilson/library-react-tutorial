import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="book__price">
      {
book.salePrice ? (
  <>
  <span className="book__price--new">${book.salePrice.toFixed(2)}</span>
      }
    ) : (
   <>${book.originalPrice.toFixed(2)}</> 
  )
}
  )
}
