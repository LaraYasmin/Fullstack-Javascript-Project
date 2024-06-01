import React from 'react';
import { Banner } from './styles.js';
import undraw_cloud from '../../assets/undraw_cloud_hosting_7xb1.svg';

const SideBanner = () => {  
    return (    
        <Banner>
            <img src={undraw_cloud} alt='svg' />
        </Banner>
    );
};

export default SideBanner;