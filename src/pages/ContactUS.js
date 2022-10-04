import React,{useRef} from 'react'
import {NavLink} from 'react-router-dom';
import './Contact.css'
const ContactUS = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const saveUserDetails = (e) =>{
        e.preventDefault();
        console.log('saveUserDetails')
        const userCredentials = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        addToDataBase(userCredentials)
    }

    async function addToDataBase(userCredentials){
        const response = await fetch('https://ecommerce-site-edc75-default-rtdb.firebaseio.com/userdetails.json',{
            method: 'POST',
            body:JSON.stringify(userCredentials),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log('user data is stored as',data);
    }

  return (
    <>
        <nav>
        <div className="nav-bar">
            <NavLink  to='' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-home">HOME</NavLink>
            <NavLink to='/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
            <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT</NavLink>
            <NavLink to='/Contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">CONTACT US</NavLink>

        </div>
        </nav>
        <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>
            The Generics <br/>
        </div>
        <div className="page-contact">
        <div></div>
        <div >
        <h1>Please Fill in the Form to Proceed </h1>
        <div className="form-div">
            
            <form onSubmit={saveUserDetails}>
                <label htmlFor='name'>User Name</label><br/>
                <input type='text' id='name' placeholder ='Your Name' ref={nameRef}/><br/>
                <label htmlFor='email'>E-Mail</label><br/>
                <input type='text' id='email' placeholder = 'Your Email' ref={emailRef}/> <br/>
                <label htmlFor='password'>Password</label><br/>
                <input type='password' id='password' placeholder='Password' ref={passwordRef}/><br/>
                <button className='btn'>Submit Details</button>
            </form>
            </div>
            </div>
    {/* <div></div> */}
        </div>
        <footer  style={{top:'19rem',position: 'relative', backgroundColor:'skyblue'}}>
        <div className="footer-icons">
             <h2 style={{color: 'white'}}>The Generics</h2>     

        </div>
    </footer>
 </>
  )
}

export default ContactUS