import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 150px;
    top: 35%;
    width: 30%;
    padding: 2%;
    box-sizing: border-box;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    margin-bottom: 15px;
`;

export const Name = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
`;

export const Email = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
`;

export const Password = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
`;

export const Label = styled.label`
    font-size: 15px;
    color: black;
    margin-bottom: 6px;
    margin-left: 10px;
`;

export const Text = styled.p`
    font-size: 14px;
    color: black;
`;

export const Span = styled(Link)`
    font-size: 14px;
    text-decoration: none;
    color: #007EC6;
`;

export const Button = styled.button`
    background-color: #B8E0F7;
    border-radius: 16px;
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
        background-color: #007EC6;
    }
`;