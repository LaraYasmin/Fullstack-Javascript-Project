import React from "react";
import { LogoNameContainer, Title, Slogan, Image, Line } from './styles.js';
import name from '../../assets/name.svg';
import line from '../../assets/line.svg';

const LogoName = () => {
    return (
        <LogoNameContainer>
            <Title>Welcome to</Title>
            <Image src={name} alt="name"/>
            <Slogan>Building solutions for your company</Slogan>
            <Line src={line} alt="line" />
        </LogoNameContainer>
    );
};

export default LogoName;