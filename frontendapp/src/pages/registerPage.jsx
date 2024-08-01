import React from 'react';
import BannerComponent from '../components/bannerComponent';
import LogoComponent from '../components/logoComponent';
import RegisterComponent from '../components/registerComponent';

const Register = () => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50'>
    <div className='w-1/2'>
      <BannerComponent />
    </div>
    <div className='w-1/2 flex flex-col justify-center items-center'>
      <LogoComponent />
      <div className='w-full max-w-sm'>
        <RegisterComponent />
      </div>
    </div>
  </div>
  );
};

export default Register;
