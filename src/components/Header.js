import React,{useContext} from 'react'

import {NavLink} from 'react-router-dom'
import './Header.css'
import Cartcontext from '../store/Cartcontext'


const Header = (props) => {
  const cartctx = useContext(Cartcontext);
  let cartItemCount = 0;
  cartctx.items.forEach(item => {
    cartItemCount += 1;
    console.log('items in cart:',cartItemCount)
  })
  return (
    <div>
        <nav>
            <div className="nav-bar">
                <NavLink  to='' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} >HOME</NavLink>
                <NavLink to='/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
                <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT</NavLink>

            </div>
            <button className='cart-btn' onClick={props.OpenCartHandler}>Cart </button> <span className="cart-number">{cartItemCount}</span>
          
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