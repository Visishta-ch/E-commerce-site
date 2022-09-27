import React,{useState} from 'react';
import Cartcontext from './cart-context';

const CartProvider = props => {
    const [items, setItems] = useState([]);

    const addItemToCart = (item) => {
        const exisitingCartItems = [...items];
        console.log('clicked id item:',item);
        setItems([...exisitingCartItems,item])
        // const itemIdx = exisitingCartItems.findIndex((i) => i.id === item.id);
        // console.log(itemIdx);
        // if(itemIdx === -1){
        //   exisitingCartItems[itemIdx].quantity = Number(exisitingCartItems[itemIdx].quantity)+1;
        //     console.log('item already in cart');

        // } else{
        //   setItems([...exisitingCartItems,item])
        // }
        //     // exisitingCartItems.push(item);
        //     console.log('added item to cart', items);
            
        // }
       
        
    }

    const removeItemFromCart = () => {

    }
    const cartListItems = {

        items:items,
        addItems: addItemToCart,
        removeItems: removeItemFromCart
    }

  return  <Cartcontext.Provider value={cartListItems}>
    {props.children}
  </Cartcontext.Provider>

}

export default CartProvider