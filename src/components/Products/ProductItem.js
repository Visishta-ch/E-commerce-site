import React,{useContext} from 'react'
import './ProductItem.css'
 import Cartcontext from '../../store/Cartcontext';
import {NavLink} from 'react-router-dom';

const ProductItem = (props) => {
  // console.log(props)
  const cartCtx = useContext(Cartcontext);

  const addItemToCart = (e) => {
     
    e.preventDefault();
    console.log('addItem')
    cartCtx.addItems({...props.item});
    // console.log('cart items', cartCtx);
    }


  return (

    // <div className="product" id={props.price} item={props}>
    //     <h4 >{props.title}</h4>
        
    //         <img src= {props.image} alt='' />
       
    //      <div className="product-list-amount">
    //             <span>${props.price}</span>
    //             <button className="add-btn" onClick={addItemToCart}>Add To Cart</button>
    //      </div> 

    // </div>
    <div className="product">
     <h4  style={{marginTop:'3px'}}>{props.title}</h4>
    <NavLink to ='/Store/1'  id={props.price} item={props} style={{textDecoration: 'none', color:'black'}}> 
       
        
            <img src= {props.image} alt='' className="product-img" />
       
         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn" onClick={addItemToCart}>Add To Cart</button>
         </div> 

    </NavLink>

  </div>
   )
}

export default ProductItem