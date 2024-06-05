import React from 'react';
import { Container, FieldContainer, Email, Password, Label, Text, Span, Name, Button } from './styles';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <Container>
            <FieldContainer>
                <Label htmlFor="name">Name</Label>
                <Name id="name" type="text" />
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="email">Email</Label>
                <Email id="email" type="email" />
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="password">Password</Label>
                <Password id="password" type="password" />
                <Link to="/verification" style={{ width: '100%' }}>
                    <Button id="register" type="button">Register</Button>
                </Link>
            </FieldContainer>
            <Text>Already have an account? <Span to="/login">Login.</Span></Text>
        </Container>
    );
};

export default RegisterForm;