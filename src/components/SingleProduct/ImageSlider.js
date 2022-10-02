import React from 'react'
import  styles from './ImageSlider.module.css'
import c1 from '../images/c1.jpeg'
import c2 from '../images/c2.jpeg'
import c3 from '../images/c3.webp'
const ImageSlider = () => {
  return (
    <>
        <div className={styles.main}></div>
        <ul className={styles.list}>
            
           <li> <img src ={c1} alt='' /> </li>
           <li> <img src ={c2} alt='' /></li>
           <li> <img src ={c3} alt='' /></li>
           <li> <img src ={c1} alt='' /> </li>
           <li> <img src ={c2} alt='' /></li>
           <li> <img src ={c3} alt='' /></li>
        </ul>
        
    </>
  )
}

export default ImageSlider