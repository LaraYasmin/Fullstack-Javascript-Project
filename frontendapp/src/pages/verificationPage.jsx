import React from 'react';
import BannerComponent from '../components/bannerComponent';
import LogoComponent from '../components/logoComponent';
import VerificationComponent from '../components/verificationComponent';

const Verification = () => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 flex-col md:flex-row'>
    <div className='w-full md:w-1/2 hidden md:flex'>
      <BannerComponent />
    </div>
    <div className='w-full md:w-1/2 md:order-2 mt-16 flex flex-col justify-center items-center'>
      <LogoComponent />
      <div className='w-full max-w-sm'>
        <VerificationComponent />
      </div>
    </div>
  </div>
  );
};

export default Verification;