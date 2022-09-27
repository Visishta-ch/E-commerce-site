import React,{useState} from 'react';
import Cartcontext from './Cartcontext';

const CartProvider =  (props) => {
  let [quantity, setQuantity] = useState(1);
    const [items, setItems] = useState([]);
    console.log('itemss',items)
    const addItemToCart = (item) => {
      
        const exisitingCartItems = [...items];
        console.log('existing itams', exisitingCartItems);
        console.log('clicked id item:',item.id);
        const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
        if( itemIndex === -1 )
          setItems([...items,item])
        else{
          // exisitingCartItems[itemIndex].quantity = Number(exisitingCartItems[itemIndex].quantity)+1;
          // items[itemIndex].quantity = Number(items[itemIndex].quantity)+1;
          const updatedList= exisitingCartItems[itemIndex].quantity++;
          setQuantity(updatedList);
          
          // setItems(exisitingCartItems);
         
           console.log('item already in cart', exisitingCartItems[itemIndex].quantity);
          
        }

            
    }

    const removeItemFromCart = (item) => {
      setItems(items.filter(c => c.id !== item.id)); 
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