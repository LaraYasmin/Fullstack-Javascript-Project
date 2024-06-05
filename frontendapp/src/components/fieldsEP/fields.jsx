import React from 'react';
import { Container, FieldContainer, Email, Password, Label, Text, Span, Button } from './styles';

const LoginForm = () => {
    return (
        <Container>
            <FieldContainer>
                <Label htmlFor="email">Email</Label>
                <Email id="email" type="email" />
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="password">Password</Label>
                <Password id="password" type="password" />
                <Button id="login" type="button">Login</Button>
            </FieldContainer>
            <Text>Doesn't have an account yet? <Span to="/register">Register.</Span></Text>
        </Container>
    );
};

export default LoginForm;