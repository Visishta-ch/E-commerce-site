import React from 'react'
import ProductItem from './ProductItem'

const productsArr = [

    {   id:'k1',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {   id:'k2',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {   id:'k3',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {   id:'k4',
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    },

    
    ]
    
    

const AvailableProducts = () => {
    const prod = productsArr.map((product) => (
        <ProductItem 
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.imageUrl}
            price={product.price}
        />
    ))
  return (
    <div className='productCard' style={{position:'relative',top:'7rem'}}>
       <div> {prod}</div> 
       
    </div>
  )
}

export default AvailableProducts