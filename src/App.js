import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import AvailableProducts from './components/Products/AvailableProducts'
import CartItem  from './components/CartItems/CartItem';
function App(props) {
  const[cartStatus, setCartStatus] = useState(false);

  const showCartList=()=>{
    setCartStatus(true);
    
    console.log('cart is opened')
  }
   const hideCartList=()=>{
    setCartStatus(false);
   }

  return (
    <>
    {cartStatus && <CartItem   onClick={hideCartList} />}
      <Header OpenCartHandler={showCartList}/>
      <AvailableProducts/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App;
