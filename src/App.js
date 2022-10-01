import React,{useState,useContext} from 'react';
import {Route,Switch,Redirect} from 'react-router';
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
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import AuthContext from './store/AuthContext';


function App(props) {
  const[cartStatus, setCartStatus] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log('log status', isLoggedIn);
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
        <Route path = '/Store/:productId'>
          <ProductDetail/>
        </Route>
        <Route path = "/About">
            <About/>
        </Route>
        <Route path = "/Contact">
          <ContactUS/>
        </Route>
        <Route path = "/Login" >
            <Login/>
        </Route>
        <Route path = "/Login/:Store" >
        {cartStatus && <CartItem   onClick={hideCartList} />}
              <Header OpenCartHandler={showCartList}/>
              <AvailableProducts/>
              <Button/>
              <Footer/> 
       
        </Route>
     
        {!isLoggedIn && <Route path='/Store'>
          <h1>Not logged in...Please go back to home to login and can see the products </h1>
        </Route>}
      

        {isLoggedIn  &&    <Route path = "/Store">
        {cartStatus && <CartItem   onClick={hideCartList} />}
              <Header OpenCartHandler={showCartList}/>
              <AvailableProducts/>
              <Button/>
              <Footer/> 
           
        </Route> }

        <Route path = "/Store" >
          
             {cartStatus && <CartItem   onClick={hideCartList} />}
              <Header OpenCartHandler={showCartList}/>
              <AvailableProducts/>
              <Button/>
              <Footer/> 
           </Route> 
        <Route path ='' exact>
           <Home/>
        </Route>
        
        
     </Switch>
    
    
     
    </CartProvider>
  );
}

export default App;
