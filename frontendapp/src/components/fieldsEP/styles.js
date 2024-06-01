import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 140px;
    top: 53%;
    transform: translateY(-50%);
    width: 30%;
    padding: 2%;
    box-sizing: border-box;
`;

export const Email = styled.input`
    display: flex;
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 330px;
    height: 40px;
    border: none;
`;

export const Password = styled.input`
    display: flex;
    background-color: #F0F0F0;
    border-radius: 20px;
    width: 330px;
    height: 40px;
    border: none;
`;

export const EmailName = styled.p`
    display: flex;
    font-size: 15px;
    align-self: flex-start;
    margin-left: 35px;
    color: black;
    margin-bottom: 6px;
`;

export const PassName = styled.p`
    display: flex;
    font-size: 15px;
    align-self: flex-start;
    margin-left: 35px;
    color: black;
    margin-bottom: 6px;
`;