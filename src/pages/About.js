import React from 'react'
import {NavLink} from 'react-router-dom';
import music from '../components/images/music.jpeg'
import './About.css'
;

const About = () => {
  return (
    <>
        <nav>
            <div className="nav-bar">
                <NavLink  to='' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-home">HOME</NavLink>
                <NavLink to='/Store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-store">STORE</NavLink>
                <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT US</NavLink>
                <NavLink to='/Contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">CONTACT US</NavLink>
                {/* <NavLink to='/About' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} className="nav-about">ABOUT</NavLink> */}

            </div>
         </nav>
        <div className="page-header" style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>
            The Generics <br/>
         </div>
     {/* <Header/> */}
        <section className='about'>
              
            <h1>About</h1>
            <div >
                  <img src={music} alt='logo' className='logo' />
                  <p>he Generics Goodies Band originated in 1989 with two members, 
                  Gary "The Frog" Swanson and Ray Schnarr. With the "Frog" on keyboards and
                  Schnarr on guitar and vocals, they needed some rhythm, they added 
                  "The Great Piersono" for drums and laughs. As time has progressed 
                  the band has evolved into a multimusical extravaganza covering music 
                  from the forties to the nineties spread over a vast range of genres from 
                  country to pop rock. 
                  The current nucleus of the band consists of Gary "The Frog" Swanson,
                   keyboards; Ray Schnarr "Schnarsky" guitar & vocals; Ray "The Great Piersono" 
                   Pierson percussion and humor, Larry "Uncle Lar" Kuepker, drums, vocals & Chicken Suit,
                    Marilyn, "Tape Lady." Younger saxophone, Virjean "Sweetie" Haywood, vocals
                   John "Jonny" Loftus , Lead Guitar.
                   <br></br> The band increases in size up to 9 or 10 
                   pieces depending on the gig requirement. This album is a culmination of all the
                    years and all the members who have contributed to the fun and good music and
                     entertainment that has been this bands quest to provide since its inception in 1989.
                      Thanks to all who have listened, laughed, danced and applauded our efforts to make 
                      you forget your problems for just a few hours, this ones for you.</p>
            </div>
        </section>
     
        <footer className='footer'>
        <div className="footer-icons">
             <h2 style={{color: 'white'}}>The Generics</h2>     

        </div>
    </footer>
    
      </>
  )
}

export default About

