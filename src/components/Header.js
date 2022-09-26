import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div>
        <nav>
            <div className="nav-bar">
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>HOME</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>STORE</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>ABOUT</a>

            </div>
            <button className='cart-btn' onClick={props.OpenCartHandler}>Cart </button> <span className="cart-number">0</span>
          
        </nav>
        <div className="header">
                <header className="page-header">
             The Generics
        </header>
        </div>

    </div>
  )
}

export default Header