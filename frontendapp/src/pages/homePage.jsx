import React from 'react';
import head from '../assets/head.svg';
import logo from '../assets/name.svg';
import lineV from '../assets/LineV.svg';
import linkedin from '../assets/Vector.svg';
import instagram from '../assets/Vector2.svg';
import facebook from '../assets/Vector3.svg';
import hand from '../assets/hand.svg';
import money from '../assets/money.svg';
import cell from '../assets/cell.svg';
import { useState } from 'react';
import FormComponent from '../components/formComponent';
import lineBlue from '../assets/Line4.svg';

const Home = () => {
  // const [form, setFormValue] = React.useState({
  //   company_name: '',
  //   description: '',
  //   cellphone: '',
  //   responsible: '',
  //   email: ''
  // })

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setFormValue({ ...form, [name]: value })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const response = await postForms(form);
  //   // console.log(response)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-gray-50'>
      <div className='flex flex-row h-20 md:mb-16 w-full items-center'>
        <div className='ml-32 w-1/2 hidden md:block'>
          <img src={logo} alt="image_name" className="w-1/10 h-8"/>
        </div>

        <div className="flex items-center justify-between p-3">
          <button onClick={toggleMenu} className="md:hidden flex items-center">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className="hidden md:flex md:items-center md:justify-end w-full">
            <button className='py-2 px-2 text-blue-500 font-medium'>Home</button>
            <button className='py-2 px-2'>Contact</button>
            <button className='py-2 px-2'>MarkedUP</button>
            <img src={lineV} alt="image_lineV" className="ml-3"/>
            <img src={linkedin} alt="image_linkedin" className="ml-3 w-5"/>
            <img src={instagram} alt="image_instagram" className="ml-3"/>
            <img src={facebook} alt="image_facebook" className="ml-3"/>
            <img src={lineV} alt="image_lineV" className="ml-2"/>
          </div>

          <div className='hidden md:flex md:items-center md:justify-end w-full'>
            <button className='py-1 px-6 text-sm ml-5 text-blue-500 border-2 border-blue-500 rounded-lg md:mr-5 mb-2 md:mb-0'>
              Login
            </button>
            <button className='py-1 px-7 text-sm bg-black text-white border-2 border-black rounded-lg md:mr-24'>
              Register
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
          <div className="flex flex-col items-center justify-center p-6 mt-20">
            <button onClick={toggleMenu} className="text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className='py-2 px-4 text-white font-medium'>Home</button>
            <button className='py-2 px-4 text-white'>Contact</button>
            <button className='py-2 px-4 text-white'>MarkedUP</button>
            <div className="mt-6 flex space-x-4">
              <img src={linkedin} alt="image_linkedin" className="w-5"/>
              <img src={instagram} alt="image_instagram"/>
              <img src={facebook} alt="image_facebook"/>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center p-4'>
        <p className='font-bold text-4xl md:text-6xl text-center'>Discover, develop, deploy</p>
        <br></br>
        <p className='font-bold text-4xl md:text-6xl mb-8 text-center'>Maintain, access, Marked<span className='text-blue-500 font-bold'>UP</span>.</p>
        <p className='text-gray-400 text-md md:w-6/12 text-center'>MarkedUP is a leading company in the development of innovative</p>
        <p className='text-gray-400 mb-16 text-md md:w-6/12 text-center'>  
          software solutions that transform the way businesses operate.
        </p>
        <img src={head} alt="image_people" className="object-cover w-10/12"/>
        <p className='text-4xl mt-16 mb-5 font-medium md:w-6/12 text-center'>Our Collaborative Approach</p>
        <p className='text-gray-400 text-md md:w-6/12 text-center'>With a team of dedicated specialists, MarkedUP stands out by creating</p>
        <p className='text-gray-400 mb-16 text-md md:w-6/12 text-center'>  
          customized solutions tailored to meet each client's specific needs.
        </p>
      </div>

      <div className='flex flex-col md:flex-row w-10/12 mx-auto'>
        <div className='flex justify-center items-center mb-4 md:mb-0'>
          <img src={hand} alt="image_hand" className="mr-2 md:mr-8 object-cover w-1/4"/>
          <p className='w-full md:w-4/12 text-center md:text-left'>
            Cutting-Edge Green Technology for a Sustainable Future
          </p>
        </div>
        <div className='flex justify-center items-center mb-4 md:mb-0'>
          <img src={money} alt="image_money" className="mr-3 md:mr-8 object-cover w-1/4"/>
          <p className='w-full md:w-4/12 text-center md:text-left'>
            Innovation in Software Development Leading to Significant Profit Increases
          </p>
        </div>
        <div className='flex justify-center items-center mb-4 md:mb-0'>
          <img src={cell} alt="image_cell" className="mr-3 md:mr-8 object-cover w-1/5"/>
          <p className='w-full md:w-6/12 text-center md:text-left'>
            Client Focus, Results, and 24/7 Support for each company
          </p>
        </div>
      </div>

      <div className='flex flex-row justify-between items-center w-full mx-auto'> 
        <div className='flex flex-col md:flex-row w-10/12 mx-auto'>
          <p className='text-2xl mb-5 font-medium md:w-6/12'>Talk to us to be part of the MarkedUP solutions and make your company grow</p>
          <p className='text-sm w-1/3'>MarkedUP is a leading company in the development of innovative software solutions that transform the way businesses operate. With a team of dedicated specialists, 
            MarkedUP stands out by creating customized solutions tailored to meet each client's specific needs. Our mission is to simplify complex processes and increase 
            efficiency through advanced technologies, ensuring our clients are always ahead in the competitive market. As a result, our clients have reported significant profit 
            increases thanks to our effective solutions.
          </p>

          <div className='flex flex-row'>
            <img src={lineBlue} alt="image_line" className='mt-8 w-8 h-8'/>
            <p className='text-sm w-1/3'>Entrepreneurs from various sectors praise the company for its ability to understand their specific needs and deliver products that exceed expectations.</p>
          </div>
        </div>
        <FormComponent />
      </div>
    </div>
  )
}

export default Home;