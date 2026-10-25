import './App.css';
import React, { useState} from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from'react-router-dom'
import Home from './pages/Home';
import BookInfo from './pages/BookInfo';
import { Cart } from '@testing-library/user-event/dist/utils';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1 }])
    console.log(cart)
          }

          function changeQuantity(book, quantity) {
            setCart(cart.map(item => {
              if (item.id === book.id) {
                return {
                  ...item,
                  quantity: +quantity,

                }
                : item;
            }))

     function removeItem(item) {
      setCart(cart.filter(book => book.id !== item.id))
     }

     function numberOfItems() {
      let counter = 0;
      cart.forEach((item) => {
        counter += item.quantity
      });
      return counter;





  useEffect(() => {
    console.log(cart);
  } [cart])
  return (
    <Router>
       <Nav numberOfItems={numberOfItems()} />
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/books" component= <books books={books}  />
      <Route path="/books/:id" exact render={() => <Bookinfo books={books} addToCart={addToCart}/_>} />
      <Route path="/cart" render={() => <Cart books= {books} cart={cart} />} />


 
  <Footer />
    </div>
    </Router>
  );
}

export default App;
≠« 

