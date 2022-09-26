import React from 'react'
import Modal from '../UI/Modal'
import Cart from './Cart.js'
import './CartItem.css'

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    },
    {
    
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        },
       
            
    
    ]

const CartItem = (props) => {
      const cartListItem = <ul className="listrow">{
      
      cartElements.map((listItem) =>   (
        <Cart 
                
                // className="item"
                key={listItem.id}
                imageUrl={listItem.imageUrl}
                title={listItem.title}
                price={listItem.price}
                quantity={listItem.quantity}
                />
       
      ))}
    
      </ul>    
    

  return (

    <Modal>
    <button style={{float:'right'}} onClick={props.onClick}>X</button>

    <h1 style={{textAlign: 'center'}}>Cart List</h1>
        <span className="title">title</span> 
        <span className="price">Price</span>
         <span className="quantity">Quantity</span>
             {cartListItem}
              
            <div className="total">Total <span>$100 </span>  </div>
        <div>      
             <button className="btn-order">Purchase</button>
        </div>
 
    </Modal>
  )
}

export default CartItem

/**<Cart 
                
                className="item"
                key={listItem.id}
                imageUrl={listItem.imageUrl}
                title={listItem.title}
                price={listItem.price}
                quantity={listItem.quantity}
            /> */