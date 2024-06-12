import React from 'react';
import './home.css';
import name from '../../assets/name.svg';
import vector from '../../assets/Vector.svg';
import vector2 from '../../assets/Vector2.svg';
import vector3 from '../../assets/Vector3.svg';
import head from '../../assets/head.svg';
import money from '../../assets/money.svg';
import hand from '../../assets/hand.svg';
import cell from '../../assets/Group 29.svg';
import line4 from '../../assets/Line4.svg';
import footername from '../../assets/footername.svg';
import win from '../../assets/win.svg';

const Home = () => {
  return (
    <div className='home'>
      <nav className='navbar'>
        <img className='image' src={name} alt='svg' />
        <div className='containerButtons'>
          <button className='button-nav-blue'>Home</button>
          <button className='button-nav'>Contact Us</button>
          <button className='button-nav'>MarkedUp</button>
          <p className='p'>|</p>
          <img className='vector' src={vector} alt='svg' />
          <img className='vector' src={vector2} alt='svg' />
          <img className='vector' src={vector3} alt='svg' />
        </div>
      </nav>
      <div className='containerMid'>
        <button className='login'>Login</button>
        <button className='register'>Register</button>
      </div>
      <div className='containerHead'>
        <h1 className='title'>Discover, develop, deploy,</h1>
        <h1 className='title2'>Maintain, access, Marked<span class='highlight'>UP</span>.</h1>
        <p className='subtitle'>MarkedUP is a leading company in the development of innovative software</p>
        <p className='subtitle'>solutions that transform the way businesses operate.</p>
        <img className='head' src={head} alt='svg' />
      </div>
      <div className='containerCollaborative'>
        <h1 className='sub'>Our Collaborative Approach</h1>
        <p className='subtitle'>With a team of dedicated specialists, MarkedUP stands out by creating customized solutions tailored to meet</p>
        <p className='subtitle'>each client's specific needs.</p>
      </div>
      <div className='containerImg'>
        <img src={hand} alt='svg' />
        <p className='text'>Cutting-Edge Green Technology for a Sustainable Future</p>
        <img src={money} alt='svg' />
        <p className='text-1'>Innovation in Software Development Leading to Significant Profit Increases</p>
        <img src={cell} alt='svg' />
        <p className='text'>Client Focus, Results, and 24/7 Support for each company</p>
      </div>
      <div className='containerBase'>
        <div className='lateral'>
          <h1>Talk to us to be part of the Marked<span class='highlight'>UP</span> solutions and make your company grow</h1>
          <p>MarkedUP is a leading company in the development of innovative software solutions that transform the way businesses operate. With a team of dedicated specialists, MarkedUP stands out by creating customized solutions tailored to meet each client's specific needs. Our mission is to simplify complex processes and increase efficiency through advanced technologies, ensuring our clients are always ahead in the competitive market. As a result, our clients have reported significant profit increases thanks to our effective solutions.</p>
          <div className='lateral-1'>
            <img className='line4'src={line4} alt='svg' />
            <p className='subtitle-1'>Entrepreneurs from various sectors praise the company for its ability to understand their specific needs and deliver products that exceed expectations.</p>
          </div>
        </div>
        <div className='right'>
          <form className='form'>
            <div className='name'>
              <label className='label'>Company Name</label>
              <input className='input'></input>
              <label className='label'>Email</label>
              <input className='input'></input>
              <label className='label'>Description</label>
              <textarea className='input-d'></textarea>
              <label className='label'>Contact (Phone number)</label>
              <input className='input'></input>
              <label className='label'>Responsible</label>
              <input className='input'></input>
              <button className='button'>Send</button>
            </div>
          </form>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='flateral-1'>
            <img className='image-f' src={footername} alt='svg' />
            <p className='footer-t'>"MarkedUp is driven by a fervent passion for crafting efficient solutions 
              that redefine standards. Our relentless pursuit of innovation fuels every 
              aspect of our work, ensuring we deliver cutting-edge solutions that exceed 
              expectations. With a focus on excellence, we continuously strive to push 
              boundaries and elevate the industry. At MarkedUp, we don't just create 
              products; we pioneer transformative experiences that inspire and empower."
            </p>
          </div>
          <div className='flateral-2'>
            <p className='footer-f'>Modules</p>
            <p className='footer-1t'>Internal Communication<br></br>
              Development
              <br></br>
              Research
              <br></br>
              Training
              <br></br>
              Advocacy Marketing
            </p>
          </div>
          <div className='flateral-3'>
            <p className='footer-f'>Navigation</p>
            <p className='footer-1t'>About Us<br></br>
              AI
              <br></br>
              Price
              <br></br>
              Blog
              <br></br>
              Support
              <br></br>
              Contact
            </p>
          </div>
          <img src={win} className='image-w' alt='svg' />
        </div>
      </footer>
    </div>
  )
}

export default Home;