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
        `https://crudcrud.com/api/a2713e4f0ff449019bbf732905c0a7a4/cart${um}`
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
    const exisitingCartItems = [...items];
    const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    console.log(itemIndex);
    if(itemIndex !== -1) {
      // alert('Item already exists');
      const updatedList = exisitingCartItems[itemIndex].quantity++;
      setQuantity(updatedList); //to update quantity of item in the cart
      console.log(
        'item already in cart',
        exisitingCartItems[itemIndex].quantity
      );
      // exisitingCartItems[itemIndex].quantity = Number(exisitingCartItems[itemIndex].quantity)+1
      setItems(exisitingCartItems);
    } else if(itemIndex === -1){
      const response = await axios.post(
        `https://crudcrud.com/api/a2713e4f0ff449019bbf732905c0a7a4/cart${um}`,
        item
      );
      if (response.status === 201) {
        console.log('added item to cart', response.data)
        // const exisitingCartItems = [...items];
        // const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
        // console.log(itemIndex);
        if (itemIndex === -1) {
          // localStorage.setItem('items')
          // let data = await response.json()
          let data = response.data;
          console.log('data', data)
          setItems([...exisitingCartItems, data]);
        } // localStorage.setItem('item'); //adds item into cart if doesnot present inside the cart.
        // else if(itemIndex !== -1) {
        //   // alert('Item already exists');
        //   const updatedList = exisitingCartItems[itemIndex].quantity++;
        //   setQuantity(updatedList); //to update quantity of item in the cart
        //   console.log(
        //     'item already in cart',
        //     exisitingCartItems[itemIndex].quantity
        //   );
        //   // exisitingCartItems[itemIndex].quantity = Number(exisitingCartItems[itemIndex].quantity)+1
        //   setItems(exisitingCartItems);
        // }
      } else {
        console.log('error in data saving');
      }
    }
    // const response = await axios.post(
    //   `https://crudcrud.com/api/52ddbb9bf85d49019089fd9453880652/cart${um}`,
    //   item
    // );
    // if (response.status === 201) {
    //   console.log('added item to cart', response.data)
    //   // const exisitingCartItems = [...items];
    //   // const itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    //   // console.log(itemIndex);
    //   if (itemIndex === -1) {
    //     // localStorage.setItem('items')
    //     // let data = await response.json()
    //     let data = response.data;
    //     console.log('data', data)
    //     setItems([...exisitingCartItems, data]);
    //   } // localStorage.setItem('item'); //adds item into cart if doesnot present inside the cart.
    //   // else if(itemIndex !== -1) {
    //   //   // alert('Item already exists');
    //   //   const updatedList = exisitingCartItems[itemIndex].quantity++;
    //   //   setQuantity(updatedList); //to update quantity of item in the cart
    //   //   console.log(
    //   //     'item already in cart',
    //   //     exisitingCartItems[itemIndex].quantity
    //   //   );
    //   //   // exisitingCartItems[itemIndex].quantity = Number(exisitingCartItems[itemIndex].quantity)+1
    //   //   setItems(exisitingCartItems);
    //   // }
    // } else {
    //   console.log('error in data saving');
    // }
  }

  const removeItemFromCart = (item) => {
    // setItems(items.filter(c => c.id !== item.id)); //to remove item from cart
    console.log('remove item from cart',item._id)

    const exisitingCartItems = [...items];
    let itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    console.log('item index: ' + itemIndex);
    if (exisitingCartItems[itemIndex].quantity > 1) {
      console.log('executing if condition while removing item')
      const updatedList = exisitingCartItems[itemIndex].quantity--;
      setQuantity(updatedList); 
      setItems(exisitingCartItems);
    }else if(exisitingCartItems[itemIndex].quantity === 1){
      axios
      .delete(
        `https://crudcrud.com/api/a2713e4f0ff449019bbf732905c0a7a4/cart${um}/${item._id}`
      )
      .then((response) => {

        console.log('item is deleted' , response.data)
        // const exisitingCartItems = [...items];
        // let itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
        // console.log('item index: ' + itemIndex);
        // if (exisitingCartItems[itemIndex].quantity > 1) {
        //   console.log('executing if condition while removing item')
        //   const updatedList = exisitingCartItems[itemIndex].quantity--;
        //   setQuantity(updatedList); 
        //   setItems(exisitingCartItems);
        // } 
         if (exisitingCartItems[itemIndex].quantity === 1) {
          console.log('executing if else condition while removing item')
          // const res =exisitingCartItems.splice(itemIndex, 1);
          // setItems(res);
           setItems(exisitingCartItems.filter((c) => c.id !== item.id));
        
        }

    }).catch((error) => console.log(error));
    // axios
    //   .delete(
    //     `https://crudcrud.com/api/a585d36940e4495a9f702da67af0ee58/cart${um}/${item._id}`
    //   )
    //   .then((response) => {

    //     console.log('item is deleted' , response.data)
    //     // const exisitingCartItems = [...items];
    //     // let itemIndex = exisitingCartItems.findIndex((i) => i.id === item.id);
    //     // console.log('item index: ' + itemIndex);
    //     // if (exisitingCartItems[itemIndex].quantity > 1) {
    //     //   console.log('executing if condition while removing item')
    //     //   const updatedList = exisitingCartItems[itemIndex].quantity--;
    //     //   setQuantity(updatedList); 
    //     //   setItems(exisitingCartItems);
    //     // } 
    //      if (exisitingCartItems[itemIndex].quantity === 1) {
    //       console.log('executing if else condition while removing item')
    //       // const res =exisitingCartItems.splice(itemIndex, 1);
    //       // setItems(res);
    //        setItems(exisitingCartItems.filter((c) => c.id !== item.id));
        
    //     }

    //     // console.log(exisitingCartItems[itemIndex].quantity)
      // })
      // .catch((error) => console.log(error));
  };
}

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
