import React from 'react'
import './ProductItem.css'

const ProductItem = (props) => {
  return (
    <div className="product">
        <h4 >{props.title}</h4>
        
            <img src= {props.image} />
       
         <div className="product-list-amount">
                <span>${props.price}</span>
                <button className="add-btn">Add To Cart</button>
         </div> 

    </div>
  )
}

export default ProductItem