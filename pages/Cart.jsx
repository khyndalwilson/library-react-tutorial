import React, {  useState,useEffect } from 'react'

const Cart({ cart, changeQuantity }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {

  }, [cart]
const total = () => {
  let price = 0; 
  cart.forEach(item => {
    price += item.salePrice * item.quantity
  })

  const subTotal = () => {
    let counter = 0;
    cart.forEach(item =>

    )} ;
    return price;

  };
  
  function removeItem(item) {
    setSelectionRange(cart.filter(book => book.id !== item.id))
  }

  return (
    <div id="book__body">
      <main id="books__main">
        <div className="books__container"
        <div className='row'>
          <div className='book__selected--top'>
            <h2 className='cart__title'>Cart</h2>
          </div>
          <div className="cart__header">
            <span className="cart__book">Book</span>
            <span className="cart__quantity">Quantity</span>
            <span className="cart__total">Price</span>
          </div>
          <div className="cart__body">
            {cart.map(book => (
              return (

            <div className="cart__item">
              <div className="cart__book">
              <img src="" class="cart__book--img"
              alt=""
              />
              <div className="cart__book--info">
                <span className='cart__book--title'>
                  <span className='cart__book--price'>${(book.salePrice || book.originalPrice).toFixed(2)}</span>

               <div className="cart__body">
  {cart.map((book) => (
    <div className="cart__item" key={book.id}>
      <div className="cart__book">
        <img 
          src={book.url} 
          className="cart__book--img" 
          alt={book.title} 
        />
        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <span className="cart__book--price">
            ${(book.salePrice || book.originalPrice).toFixed(2)}
          </span>
          <button 
            className="cart__book--remove" 
            onClick={() => removeItem(book)}
          >
            Remove
          </button>
        </div>
      </div>
      
      <div className="cart__quantity">
        <input 
          type="number" 
          min={0} 
          max={99} 
          className="cart__input"
          value={book.quantity}
          onChange={(event) => changeQuantity(book, event.target.value)} 
        />
      </div>
      
      <div className="cart__total">
        ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
      </div>
    </div>
  ))}
  {
    cart.length === 0 &&
  }

  {cart.length === 0 && (
    <div className="cart__empty">
      <img src={book.url}"" className="cart__empty--img" alt="" />
      <p>Your cart is empty!</p>
      <h2>Check out what you're interested in reading!</h2>
      <Link to = "/books">
        <button className"btn">Browse books</button>
        </Link>
    </div>
  )}


  <{cart.length > 0 && (
    div className="total">
    <div className="total__item total__sub-total">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div className="total__item total__tax">
      <span>Tax</span>
      <span>${tax.toFixed(2)}</span>
    </div>
    <div className="total__item total__checkout">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
  </div>
</div>
                <div className="total__itam total__price">
                  <span>Total</span>
                  <span>$9.00</span>
                </div>
              <button className="btn btn__checkout no-cursor"
              onClick={() => alert(havent gotten around to it)}>
                Proceed to checkout
              </button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div>
      
    </div>
  )
}
