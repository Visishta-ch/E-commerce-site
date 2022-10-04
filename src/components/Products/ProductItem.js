import React, { useContext } from 'react';
import axios from 'axios';
import './ProductItem.css';
import Cartcontext from '../../store/Cartcontext';
import AuthContext from '../../store/AuthContext';
import { Link} from 'react-router-dom';

const ProductItem = (props) => {
  
  const id = props.item.id;
  const title = props.item.title;
  const price = props.item.price;
 
  const cartCtx = useContext(Cartcontext);
  const authCtx = useContext(AuthContext);
  const userMailId = localStorage.getItem('usermail');
  // console.log('mail from localStorage',userMailId);
  const regex = /[`@.`]/g;
  const um = userMailId.replace(regex, ''); //email without @ and .
  
  async function addItemToCart(e) {
    e.preventDefault();
    console.log('addItem');
    try {
      const userMailId = localStorage.getItem('usermail');
      console.log('mail from localStorage', userMailId);
      const userProduct = {
        title,
        price,
      };
      const response = await axios.post(
        `https://crudcrud.com/api/92c01235e2334248b217c76fe1c58dc7/cart${um}`,
        userProduct
      );
      console.log('response frm crud crud', response);
      if (response.status === 201) {
        console.log('response sent', response.data);
        cartCtx.addItems({ ...props.item });
      } else {
        alert('error in saving data');
      }
    } catch (error) {
      console.log('error in saving data catch block');
    }
   
  }

  return (
    <div className="product">
      <h4 style={{ marginTop: '3px' }}>{props.title}</h4>
      <Link
        to={{
          pathname: `/Store/ProductDetail/${id}`,
          state: {
            price: props.price,
            title: props.title,
            image: props.image,
            id: props.id,
          },
        }}
       
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <img src={props.image} alt="" className="product-img" />

        <div className="product-list-amount">
          <span>${props.price}</span>
          <button className="add-btn" onClick={addItemToCart}>
            Add To Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
