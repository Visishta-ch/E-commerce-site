import React,{useContext} from 'react'
import axios from 'axios'
import './ProductItem.css'
 import Cartcontext from '../../store/Cartcontext';
 import AuthContext from '../../store/AuthContext';
import {NavLink} from 'react-router-dom';
// import Login from '../../pages/Login';

const ProductItem = (props) => {
  // / console.log(props.item)
   const title  = props.item.title;
   const price = props.item.price;
   console.log('title::',title)
  const cartCtx = useContext(Cartcontext);
   const authCtx = useContext(AuthContext);
  const userMailId = localStorage.getItem('usermail');
  // console.log('mail from localStorage',userMailId);
  const regex = /[`@.`]/g;
  const um = userMailId.replace(regex,'');
  console.log('mailwithout :', um);
 async function addItemToCart (e)  {     
    e.preventDefault();
    console.log('addItem')    
    try{
      const userMailId = localStorage.getItem('usermail');
      console.log('mail from localStorage',userMailId);
        const userProduct = {
            title,
            price
        }
      const response = await axios.post(`https://crudcrud.com/api/8a9bafb9c75d49c3b8274fd6d8405412/cart${um}`, userProduct);
      console.log('response frm crud crud', response)
      if(response.status === 201){
          console.log('response sent', response.data);
          cartCtx.addItems({...props.item});
      }
      else{
          alert('error in saving data');
      }

    }catch(error){
        console.log('error in saving data catch block')
    }
    // cartCtx.addItems({...props.item});
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