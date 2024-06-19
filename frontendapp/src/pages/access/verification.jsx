import React from 'react';
import SideBanner from '../../components/sideBanner/sideBanner.jsx';
import LogoName from '../../components/logoName/logoName.jsx';
import VerificationFields from '../../components/fieldsVE/fieldsVE.jsx';

const Verification = () => {
  return (  
    <div className='verification'> 
      <SideBanner />
      <LogoName />
      <VerificationFields />
    </div>
  )
};

export default Verification;