import React from 'react'
import {useParams,NavLink} from 'react-router-dom';
import searchLogo from '../components/images/finder.jpg';
import styles from './ProductDetail.module.css';
import Reviews from '../components/SingleProduct/Reviews'
import ImageSlider from '../components/SingleProduct/ImageSlider'
    const ProductDetail = () => {

    const params = useParams();
  return (
    <section>
        <nav>
        <div className="nav-bar">
        <input type="text" style={{padding: '10px', margin: '10px',width:'20rem',height:'1rem', color:'#ccc',fontFamily:'monospace'}} placeholder="filter products"/>
        <img src={searchLogo} alt='' className={styles.img}/>
            <NavLink  to='' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-home">HOME</NavLink>
            <NavLink to='/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
            <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT</NavLink>
            <NavLink to='/Contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">CONTACT US</NavLink>
            <br/>
           
        </div>
       
        </nav>
        
         <div className={styles.navDiv}>   
         ProductDetail
            <div className={styles.navbar}>
             
            <select id="cars">
              <option value="volvo">a</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
               <a href="#" className={styles.link}>Music </a>
              <a href="#"  className={styles.link}>DOlls</a>
              <a href='#' className={styles.link}>Movies</a> 
               <select id="cars">
              <option value="volvo">a</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select> 
            <select id="cars">
              <option value="volvo">a</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select id="cars">
              <option value="volvo">a</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            </div>
     
         
         </div>
          
         <p>{params.productId}</p>
        
          {/* <div style={{display: 'flex',justifyContent: 'space-between'}}> */}
          <div>
              <ImageSlider/>
              <Reviews/>
          </div> 
    </section>
  )
}

export default ProductDetail