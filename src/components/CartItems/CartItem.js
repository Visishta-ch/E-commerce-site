import React,{useContext, useState} from 'react'
import Modal from '../UI/Modal'
// import Cart from './Cart.js'
import './CartItem.css'
import './Cart.css'
import Cartcontext from '../../store/cart-context'

const cartElements = [

    {
      id: 'k1',
    
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
    
    // {
    
    // title: 'Yellow and Black Colors',
    
    // price: 70,
    
    // imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    // quantity: 1,
    
    // },
         
            
    
    ]

  
const CartItem = (props) => {

  let [quantity, setQuantity] = useState(1);

    const cartCtx = useContext(Cartcontext);
    console.log("cartCtx", Cartcontext);

    const exisitingCartItems = [...cartCtx.items]
    console.log('exisitingCartItems',exisitingCartItems)
    let amount=0;
    cartCtx.items.forEach(item => {
      amount += 1;
        // amount += Number((item.price)*(item.quantity));
      })



      const cartListItem = <ul className="listrow">{
      
      cartElements.map((item) =>   (  <li className="list-row">
    
         <img src = {item.imageUrl} alt='imge' style={{width:'80px', height:'80px',borderRadius:'5px'}} />
            <h4 style={{alignSelf:'center'}}>{item.title}</h4>
           <span className='list-price'>${item.price}</span> 
          <span className= 'list-amount'><input type="text" value={item.quantity} placeholder={item.quantity} style={{width:'20px', height:'20px',textAlign:'center'}} /></span> 
        
          <button className='rmv-btn'>remove</button>
         </li>
      
      
        
       
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
              {console.log(cartListItem)}
            <div className="total">Total <span>{amount}</span>  </div>
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