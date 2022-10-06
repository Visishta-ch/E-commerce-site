import React, { useState, useEffect, useContext } from 'react';
import Cartcontext from './Cartcontext';
import axios from 'axios';
import AuthContext from './AuthContext';

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  let [quantity, setQuantity] = useState(0); //used to set the quantity of item added to cart
  const [items, setItems] = useState([]);
  const userMailId = localStorage.getItem('usermail');
  let um;
  if (userMailId != null) {
    const regex = /[`@.`]/g;
    um = userMailId.replace(regex, '');

    // console.log(um);
  }
  useEffect(() => {
    // console.log('cart items list rendered');
    const cartListItem = [];
    authCtx.isLoggedIn &&
      axios
        .get(
        `https://crudcrud.com/api/060ccc0ca09948908d1b5edec044c742/cartvish23gmailcom`
        )
        .then((response) => {
          // console.log('rendered in cart provider when refreshed');
          // const cartListItem = [];
          for (let i = 0; i < response.data.length; i++) {
            let item = response.data[i];
            const index = cartListItem.findIndex((i) => i.title === item.title);
            if (index === -1) {
              cartListItem.push(response.data[i]);
              setItems(cartListItem);
            } else {
              cartListItem[index].quantity = cartListItem[index].quantity + 1;
              setQuantity(cartListItem[index].quantity);
              // setItems(cartListItems)
            }

            //   console.log(cartListItem);
          }
          // setItems(cartListItem)
        })
        .catch((err) => {
          console.error(err);
        });
  }, []);

  // console.log('itemss',items)

  async function addItemToCart(item) {
     
    console.log('clicked id item:', item.id);

    const response = await axios.post(
      `https://crudcrud.com/api/060ccc0ca09948908d1b5edec044c742/cart${um}`,
      item
    );
    if (response.status === 201) {
      const exisitingCartItems = [...items];
      const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
      console.log(itemIndex);
      if (itemIndex === -1) {
        // localStorage.setItem('items')
        let data = await response.json()
        console.log('data', data)
        setItems([...exisitingCartItems, data]);
      } // localStorage.setItem('item'); //adds item into cart if doesnot present inside the cart.
      else if(itemIndex !== -1) {
        // alert('Item already exists');
        const updatedList = exisitingCartItems[itemIndex].quantity++;
        setQuantity(updatedList); //to update quantity of item in the cart
        console.log(
          'item already in cart',
          exisitingCartItems[itemIndex].quantity
        );
        // exisitingCartItems[itemIndex].quantity = Number(exisitingCartItems[itemIndex].quantity)+1
        setItems(exisitingCartItems);
      }
    } else {
      console.log('error in data saving');
    }
  }

  const removeItemFromCart = (item) => {
    // setItems(items.filter(c => c.id !== item.id)); //to remove item from cart
    console.log('remove item from cart',item._id)
    axios
      .delete(
        `https://crudcrud.com/api/060ccc0ca09948908d1b5edec044c742/cartvish23gmailcom/${item._id}`
      )
      .then((response) => {

        console.log('item is deleted' ,)
        const exisitingCartItems = [...items];
        let itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
        console.log('item index: ' + itemIndex);
        if (exisitingCartItems[itemIndex].quantity > 1) {
          console.log('executing if condition while removing item')
          const updatedList = exisitingCartItems[itemIndex].quantity--;
          setQuantity(updatedList); 
          setItems(exisitingCartItems);
        } else if (exisitingCartItems[itemIndex].quantity === 1) {
          console.log('executing if else condition while removing item')
          const res =exisitingCartItems.splice(itemIndex, 1);
          setItems(res);
          // setItems(exisitingCartItems.filter((c) => c.id !== item.id));
        
        }

        // console.log(exisitingCartItems[itemIndex].quantity)
      })
      .catch((error) => console.log(error));
  };

  const setItemHandler =(item)=>{
      setItems(item);
  }
  const setQuantityHandler =(quantity)=>{
      setQuantity(quantity);
  }

  const cartListItems = {
    items: items,
    addItems: addItemToCart,
    removeItems: removeItemFromCart,
    setItem: setItemHandler,
    setQuantity:setQuantityHandler,
  };

  return (
    <Cartcontext.Provider value={cartListItems}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
