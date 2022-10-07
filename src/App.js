import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import AvailableProducts from './components/Products/AvailableProducts';
import CartItem from './components/CartItems/CartItem';
import CartProvider from './store/CartProvider';

import Home from './pages/Home';
import About from './pages/About';
import ContactUS from './pages/ContactUS';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import AuthContext from './store/AuthContext';
import axios from 'axios';
import Cartcontext from './store/Cartcontext';

function App(props) {
  const [cartStatus, setCartStatus] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log('log status', isLoggedIn);
  const cartCtx = useContext(Cartcontext);

  const showCartList = () => {
    setCartStatus(true);
  };

  const hideCartList = () => {
    setCartStatus(false);
  };

  return (
    <CartProvider>
      <Switch>
        {/* <Route path="/products">
            <Product/>
        </Route> */}
        <Route path="/Store/ProductDetail/:productId">
          <ProductDetail />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <ContactUS />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Login/:Store">
          {cartStatus && <CartItem onClick={hideCartList} />}
          <Header OpenCartHandler={showCartList} />

          <AvailableProducts />
          <button className="cartbtn" onClick={showCartList}>
            See cart
          </button>

          <Footer />
        </Route>

        {!isLoggedIn && (
          <Route path="/Store">
            <div
              style={{
                backgroundImage: 'linear-gradient(to bottom, pink, skyblue)',
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'center',
                padding: '20px',
                margin: '20px',
              }}
            >
              <h1
                style={{
                  fontSize: '30px',
                  letterSpacing: '1px',
                  fontFamily: 'monospace',
                  alignItems: 'center',
                }}
              >
                Not logged in...Please go back to home page and login to access
                the products
              </h1>
            </div>
          </Route>
        )}

        {isLoggedIn && (
          <Route path="/Store">
            {cartStatus && <CartItem onClick={hideCartList} />}
            <Header OpenCartHandler={showCartList} />
            <AvailableProducts />

            <button className="cartbtn" onClick={showCartList}>
              See cart
            </button>
            <Footer />
          </Route>
        )}

        <Route path="/Store">
          {cartStatus && <CartItem onClick={hideCartList} />}
          <Header OpenCartHandler={showCartList} />
          <AvailableProducts />

          <button className="cartbtn">See cart</button>
          <Footer />
        </Route>
        <Route path="" exact>
          <Home />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
/***/
/**   // console.log('mail from localStorage',userMailId);
    // const regex = /[`@.`]/g;
    // const um = userMailId.replace(regex, '');
    // console.log(um);
  // useEffect(() => {
  
  //   axios
  //   .get(
  //     `https://crudcrud.com/api/01db1dd53f9c4461adaaf7e6cb31b4cb/cart/${um}`
  //   )
  //   .then((response) => {
  //     for (var i = 0; i < response.data.length; i++) {
  //       cartCtx.items(response.data[i]);
  //       setCartItems(cartCtx.items);
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }, []) */
