import React,{useRef,useState,useContext} from 'react'
import AuthContext from '.././store/AuthContext'
import {useHistory, NavLink} from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const history = useHistory();
  const authCtx =useContext(AuthContext)
  const [loading,setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const mailref = useRef();
  const passwordref = useRef();

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };
  const submitLoginHandler=(e)=>{
      e.preventDefault();
    
      const enteredMail = mailref.current.value;
      const enteredPassword = passwordref.current.value;
      console.log('saved', enteredMail, enteredPassword);
      setLoading(true);
      if(isLogin){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBuJqLrVJWStm5LJ9fPdVwCcmuZUE9rzo',
        {  
          method: 'POST',
          body: JSON.stringify({
            email: enteredMail,
            password: enteredPassword,
            returnSecureToken:true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res =>{
          setLoading(false);
          if(res.ok){
            history.replace('/Store')
            console.log(res)
            return res.json().then((data)=>{
              console.log('successfully stored, token generated:', data.idToken);
              authCtx.login(data.idToken);
          })
        }
          else
          {
            return res.json().then((data) =>{
              let loginError = ' Authentication failed';
              if(data && data.error && data.error.message){
                loginError = data.error.message
              }
                alert(loginError);
            })
          }
        })
  
      }
      
  }
  return (
    <>
      <nav>
            <div className="nav-bar">
                <NavLink  to='' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-home">HOME</NavLink>
                <NavLink to='/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
                <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT US</NavLink>
                <NavLink to='/Contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">CONTACT US</NavLink>
                
            </div>
            <NavLink to='/Login' style={{textDecoration: 'none',color: 'white',position: 'relative', float:'right',top:'-46px',left:'-25px'}}>LOGIN</NavLink>
         </nav>
     
        <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>

            The Generics <br/>
            <button className='album'>Get the Latest Album</button>
            <button className='play-btn'>▶️</button>
        </div>
        <div className={styles.form_div}>
        <h1>USER LOGIN </h1>
          <form onSubmit={submitLoginHandler} className={styles.form}>
          
            <label htmlFor="Email">Email</label><br/>
            <input type="email" id="email" name="email" ref= {mailref}/><br/>
            <label htmlFor="Password" >Password</label><br/>
            <input type="password" id="password" name="password" ref= {passwordref}/>
            <br></br>
            {/* {loading && <p style={{color:'black'}}>Sending Request.....</p>} */}
            <button className={styles.btn}>Login</button>
          </form>
      </div>

      <footer className='footer'>
        <div className="footer-icons">
             <h2 style={{color: 'white'}}>The Generics</h2>     

        </div>
    </footer>
    </>
  )
}

export default Login