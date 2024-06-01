import React from 'react';
import { Container, Email, PassName, EmailName, Password }  from './styles.js';

const Fields = () => {
    return (
        <Container>
            <EmailName>E-mail</EmailName>
            <Email></Email>
            <PassName>Password</PassName>
            <Password></Password>
        </Container>
    )
};

export default Fields;