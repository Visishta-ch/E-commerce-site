import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
import './Home.css';
const Home = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('usermail');
    authCtx.logout();
    console.log('Logged out');
  };
  return (
    <div>
      <nav className="nav">
        <div></div>
        <div className="nav-bar">
          <NavLink
            to=""
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-home"
          >
            HOME
          </NavLink>
          <NavLink
            to="/Store"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-store"
          >
            STORE
          </NavLink>
          <NavLink
            to="/About"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/Contact"
            style={{
              padding: '10px',
              margin: '10px',
              textDecoration: 'none',
              color: 'white',
            }}
            className="nav-about"
          >
            CONTACT
          </NavLink>
        </div>
        <div className="logdiv">
          {!isLoggedIn && <NavLink
            to="/Login"
            style={{
              textDecoration: 'none',
              color: 'white',
              position: 'relative',
              top: '1.5px',
              padding: '8px',
              margin: '8px',            
              height: '24px',
              width: '81px'
            }}

            className="login"
          >
            LOGIN
          </NavLink>}
         {isLoggedIn && <NavLink
            to="/Login"
            style={{
              textDecoration: 'none',
              color: 'black',
              // height: '30px',
              position: 'relative',
              color: 'white',
              top: '1.5px',
              padding: '8px',
              margin: '8px',
              height: '24px',
              width: '81px'
            }}
            className="logout"
            onClick={logoutHandler}
          >
            LOGOUT
          </NavLink>}
        </div>
      </nav>
      {/* float:'right',top:'-46px',left:'-28px' */}
      <div
        className="page-header"
        style={{ color: 'white', backgroundColor: 'gray', paddingTop: '63px' }}
      >
        The Generics <br />
        <button className="album">Get the Latest Album</button>
        <button className="play-btn">▶️</button>
      </div>

      <section id="tours">
        <div className="tour-list">
          <h2 style={{ fontFamily: 'cursive' }}>TOURS</h2>
          <div className="tour-item">
            <span className="tour-date">JUNE 16</span>
            <span className="tour-place">DETROIT, MI</span>
            <span className="tour-place-1">DTE ENERGY MUSIC THEATRE</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUNE 19</span>
            <span className="tour-place">TORONTO,ON</span>
            <span className="tour-place-1">BUDWEISER STAGE</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUNE 22</span>
            <span className="tour-place">BRISTOW</span>
            <span className="tour-place-1">JIGGY LUBE LIVE</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JUNE 29</span>
            <span className="tour-place">PHOENIX,AZ</span>
            <span className="tour-place-1">AK-CHIN PAVILON</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JULY 2</span>
            <span className="tour-place">LAS VEGAS, NV</span>
            <span className="tour-place-1">T-MOBILE ARENA</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
          <div className="tour-item">
            <span className="tour-date">JULY 10</span>
            <span className="tour-place">CONCORD, CA</span>
            <span className="tour-place-1">CONCORD PAVILION</span>
            <button className="tour-btn">BUY TICKETS</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-icons">
          <h2 style={{ color: 'white' }}>The Generics</h2>
        </div>
      </footer>
    </div>
  );
};

export default Home;
