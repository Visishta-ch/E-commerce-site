import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import AvailableProducts from './components/Products/AvailableProducts'

function App() {
  return (
    <>
      <Header/>
      <AvailableProducts/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App;
