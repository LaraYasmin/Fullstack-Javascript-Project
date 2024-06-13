import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 150px;
    top: 36%;
    width: 30%;
    padding: 2%;
    box-sizing: border-box;
`;

export const Label = styled.label`
    font-size: 15px;
    color: black;
    align-self: center;
`;

export const ContainerV = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 23px;
    margin-bottom: 17px;
`;

export const Code = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 6%;
    height: 40px;
    border: none;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
`

export const Code1 = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 6%;
    height: 40px;
    border: none;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-left: 13px;
`
export const Code2 = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 6%;
    height: 40px;
    border: none;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-left: 13px;
`
export const Code3 = styled.input`
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 6%;
    height: 40px;
    border: none;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-left: 13px;
`

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
    border-radius: 6px;
    width: 20%;
    margin-left: 12px;
    height: 35px;
    border: none;
    outline: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
    margin-top: 15px;
    align-self: center;

    &:hover {
        background-color: #007EC6;
    }
`;

export const Line = styled.img`
    margin-top: 28px;
    display: block;
    width: 70%;
    height: auto;
`;