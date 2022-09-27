import React,{useContext} from 'react'
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
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>HOME</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>STORE</a>
                <a href='#' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}>ABOUT</a>

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