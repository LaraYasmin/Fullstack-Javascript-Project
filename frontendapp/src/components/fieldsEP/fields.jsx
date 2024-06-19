import React from 'react';
import { Container, FieldContainer, Email, Password, Label, Text, Span, Button } from './styles';
import { useState } from 'react';
import { postLogin } from '../../utils/serverFront';
const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userData = { email, password };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await postLogin(userData);
        console.log(response)
    }

    return (
        <Container>
            <FieldContainer>
                <Label htmlFor="email">Email</Label>
                <Email id="email" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="password">Password</Label>
                <Password id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button id="login" type="button" onClick={handleSubmit}>Login</Button>
            </FieldContainer>
            <Text>Doesn't have an account yet? <Span to="/register">Register.</Span></Text>
        </Container>
    );
};

export default LoginForm;