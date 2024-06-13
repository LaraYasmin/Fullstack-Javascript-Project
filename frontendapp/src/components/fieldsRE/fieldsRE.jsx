import React, { useState } from 'react';
import { Container, FieldContainer, Email, Password, Label, Text, Span, Name, Button } from './styles';
import { postUsers } from '../../utils/serverFront';
const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async () => {
        try {
            const data = { name, email, password };
            const response = await postUsers(data);
            console.log('Response:', response);
            window.location.href = '/verification';
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container>
            <FieldContainer>
                <Label htmlFor="name">Name</Label>
                <Name id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="email">Email</Label>
                <Email id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FieldContainer>
            <FieldContainer>
                <Label htmlFor="password">Password</Label>
                <Password id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button id="register" type="button" onClick={sendData}>Register</Button>
            </FieldContainer>
            <Text>Already have an account? <Span to="/login">Login.</Span></Text>
        </Container>
    );
};

export default RegisterForm;