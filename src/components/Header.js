import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <nav>
            <div className="nav-bar">
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>HOME</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>STORE</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>ABOUT</a>

            </div>
            <button className='cart-btn'>Cart </button> <span className="cart-number">0</span>
          
        </nav>
        <header className="page-header">
             The Generics
        </header>
       
    </>
  )
}

export default Header