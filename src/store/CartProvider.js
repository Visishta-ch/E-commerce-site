import React,{useState} from 'react';
import Cartcontext from './Cartcontext';

const CartProvider =  (props) => {
  let [quantity, setQuantity] = useState(0); //used to set the quantity of item added to cart
    const [items, setItems] = useState([]); 
    console.log('itemss',items)
    const addItemToCart = (item) => {
      
        const exisitingCartItems = [...items]; //copying the items into existingCartItems
        console.log('existing itams', exisitingCartItems);
        console.log('clicked id item:',item.id);
        const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
        if( itemIndex === -1 )
          setItems([...items,item]) //adds item into cart if doesnot present inside the cart.
        else{
          
          const updatedList= exisitingCartItems[itemIndex].quantity++;
          setQuantity(updatedList);    //to update quantity of item in the cart     
          console.log('item already in cart', exisitingCartItems[itemIndex].quantity);
          
        }

            
    }

    const removeItemFromCart = (item) => {
      setItems(items.filter(c => c.id !== item.id)); //to remove item from cart
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