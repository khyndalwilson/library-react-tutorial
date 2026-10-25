import React from 'react'
import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <div className="container">
      <div className="row row__column">
        <Link to="/">
        <figure className="footer__logo">
          <img src="../assets/Logo.svg" alt="" />
        </figure>
        </Link>
        <div className="footer__list">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/" className="footer__link no-cursor">About</span>
          <Link to="/books" className="footer__link">Books</Link>
          <Link to="/books" className="footer__link">Cart</Link>
        </div>
        <div className="footer__copyright">Copyright 2026 Library. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}
      
    </div>
  )
}
