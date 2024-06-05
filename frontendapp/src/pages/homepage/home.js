import React from 'react';
import './home.css';
import name from '../../assets/name.svg';
import Vector from '../../assets/Vector.svg';
import Vector2 from '../../assets/Vector2.svg';
import Vector3 from '../../assets/Vector3.svg';
import message from '../../assets/message.svg';
import rectangle from '../../assets/Rectangle.svg';
import map from '../../assets/map.svg';

const Home = () => (
  <div className='home'>
    <nav className='navbar'>
      <img className='image' src={name} alt='svg' />
      <div className='containerButtons'>
        <button className='button-nav-blue'>Home</button>
        <button className='button-nav'>About us</button>
        <button className='button-nav'>MarkedUp</button>
        <h2 className='line'>|</h2>
        <img className='navSocial' src={Vector} alt='svg' />
        <img className='navSocial' src={Vector2} alt='svg' />
        <img className='navSocial' src={Vector3} alt='svg' />
      </div>
    </nav>
    <div className='containerMid'>
      <button className='contact'>Contact Us</button>
      <button className='login'>Login</button>
      <button className='register'>Register</button>
    </div>
    <body className='body'>
      <div className='controw'>
        <img className='message' src={message} alt='svg' />
        <h1 className='top'>DISCOVER, DEVELOP,</h1>
      </div>
      <div className='controw2'>
        <h1 className='deploy'>DEPLOY,</h1>
        <h1 className='maintain'>MAINTAIN,</h1>
      </div>
      <div className='controw3'>
        <h1 className='top'>ACCESS, MARKEDUP</h1>
        <h1 className='top-1'>.</h1>
      </div>
      <div className='background'>
        <div className='leftside'>
          <h1 className='title'>BUILDING SOLUTIONS FOR YOUR COMPANY</h1>
          <text className='texting'>
            Founded in 2019, MarkedUp is a company dedicated to 
            developing software for businesses, aiming to transform 
            ideas into innovative digital solutions. Since its inception, 
            MarkedUp has stood out for its technical excellence and 
            commitment to customer satisfaction. The dedication to 
            providing personalized, high-quality solutions has earned 
            the trust and loyalty of clients, establishing MarkedUp as a 
            reference in the software development market.
          </text>
        </div>
        <img className='rect' src={rectangle} alt='svg' />
      </div>
      <div className='background2'>
      </div>
      <img className='map' src={map} alt='svg' />
      <footer className='footer'>
      </footer>
    </body>
  </div>
);

export default Home;