import React,{useRef,useState,useContext} from 'react'
import AuthContext from '.././store/AuthContext'
import {useHistory, NavLink} from 'react-router-dom';
import styles from './Login.module.css';


const Login = () => {

  const history = useHistory();
  const authCtx =useContext(AuthContext)
  const [loading,setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [mailId, setMailId] = useState('');
  const mailref = useRef();
  const passwordref = useRef();


  const submitLoginHandler=(e)=>{
      e.preventDefault();
    
      const enteredMail = mailref.current.value;
      authCtx.userMail(enteredMail);
      localStorage.setItem('usermail',enteredMail)
      
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
            console.log(res)
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
                <NavLink to='/Login/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
                <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT US</NavLink>
                <NavLink to='/Contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">CONTACT US</NavLink>
                
            </div>
            <button to='/Login' style={{textDecoration: 'none',color: 'Black',position: 'relative', float:'right',top:'-46px',left:'-25px'}}>LOGOUT</button>
         </nav>
     
        <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '110px',fontSize:'60px'}}>

             Welcome to Generics <br/>
          
        </div>
        <div className={styles.form_div}>
        <h1 style={{fontFamily:'cursive'}}>USER LOGIN </h1>
          <form onSubmit={submitLoginHandler} className={styles.form}>
          
            <label htmlFor="Email">Email</label><br/>
            <input type="email" id="email" name="email"  placeholder="Email" ref= {mailref}/><br/>
            <label htmlFor="Password" >Password</label><br/>
            <input type="password" id="password" name="password" placeholder="Password" ref= {passwordref}/>
            <br></br>
            {/* {loading && <p style={{color:'black'}}>Sending Request.....</p>} */}
            <button className={styles.btn}>Login</button>
          </form>  
 
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerIcons}>
             <h2 className={styles.footerText}>The Generics</h2>     

        </div>
    </footer>
   
    </>
  )
}

export default Login