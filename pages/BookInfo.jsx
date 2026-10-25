import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/ui/Rating'

const BookInfo() { books, addtoCart }) => {

}
  return (
    <div id="bookinfo">
      <main id="books__main">
        <div className="books__container">
         <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
            <FontAwesomeIcon icon="arrow-left" />
            <Link to="/books" className="book__link">
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="../assets/Book_1.jpg" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--desciption"><h2 className="book__selected--title">Book Title</h2>
              <FontAwesomeIcon icon="star" />
              <Rating rating={books.rating} />
              </div>
            </Link>
            </Link>"
            <div className="book__selected--price">
              <Price originalPrice={books.originalPrice} salePrice={books.salePrice} />
            </div>
            <div className="book__summary">
              <div className="book__summary--title">Summary</div>
              <p className="book__summary--para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus reiciendis aspernatur quibusdam animi saepe, nobis modi, non praesentium tempore officia neque rem, error fuga dolores in ipsam voluptates cumque vero!
              </p>
              <p className="book__summary__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus reiciendis aspernatur quibusdam animi saepe, nobis modi, non praesentium tempore officia neque rem, error fuga dolores in ipsam voluptates cumque vero!
              </p>
              <p className="book__summary__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus reiciendis aspernatur quibusdam animi saepe, nobis modi, non praesentium tempore officia neque rem, error fuga dolores in ipsam voluptates cumque vero!
              </p>

            </div>
            <button className="btn" onClick={() => addtoCart(book)}>Add to cart</button>

      
    </div>
    {added ? (
      <Link to"/cart" className="book__link">
        <button className="btn">Checkout</button>
        </Link>
    ) : (
      <button className="btn" onClick={() => addBookToCart
        
      }
      function bookExistsOnCart() {
        return cart.find(book => book.id === +id;</div>)
      }
    )
    )}

    <div className='books__container'>
      <div className='row'>
        <div className="book__selected--top">
          <h2 className="book__selected--title--top">
            Recommended Books
          </h2>

        </div>
        {
          div className="books">
          </div>
          books
          .filter((book => book.rating === 5 && +book.id !== +id)
          .slice(0, 4)
          .map(book => <Book book={book} key={book.id} />)
        }
            
          }
        }
      </div>
    </div>
  )
}
