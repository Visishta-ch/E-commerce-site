import React,{useContext} from 'react'
import './ProductItem.css'
import Cartcontext from '../../store/cart-context';


const ProductItem = (props) => {

  const cartCtx = useContext(Cartcontext);

  const addItemToCart =(e) => {
     
    e.preventDefault();
    console.log('addItem')
    cartCtx.addItems({...props.item});
    console.log('cart items', cartCtx);
    }


  return (
    <div className="product" id={props.price}>
        <h4 >{props.title}</h4>
        
            <img src= {props.image} alt='' />
       
         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn" onClick={addItemToCart}>Add To Cart</button>
         </div> 

    </div>
  )
}

export default ProductItem