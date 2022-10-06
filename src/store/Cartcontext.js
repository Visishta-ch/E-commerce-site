import React ,{useState} from 'react'

const Cartcontext = React.createContext({
    items: [],
    totalAmount: 0 ,
    addItems : (item) => {

    },
    removeItems : (id) => {

    },

    setItem:(item)=>{

    },
    setQuantity:(number)=>{

    }
})

export default Cartcontext