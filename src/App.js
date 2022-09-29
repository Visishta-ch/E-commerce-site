import React,{useState} from 'react';
import {Route,Switch} from 'react-router';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import AvailableProducts from './components/Products/AvailableProducts'
import CartItem  from './components/CartItems/CartItem';
import CartProvider from './store/CartProvider'
import Product from './pages/Product'
import Home from './pages/Home';
import About from './pages/About';
import ContactUS from './pages/ContactUS';

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
    <CartProvider>
      <Switch>
        <Route path="/products">
            <Product/>
        </Route>
        <Route path = "/About">
            <About/>
        </Route>
        <Route path = "/Contact">
          <ContactUS/>
        </Route>
        <Route path = "/Store">
            {cartStatus && <CartItem   onClick={hideCartList} />}
              <Header OpenCartHandler={showCartList}/>
              <AvailableProducts/>
              <Button/>
              <Footer/>
            </Route>
        <Route path =''>
           <Home/>
        </Route>
     </Switch>
    
    
     
    </CartProvider>
  );
}

export default App;
