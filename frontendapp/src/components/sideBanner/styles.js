import styled from 'styled-components';

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    background-color: black;
    background-position: left;

    > img {
        display: fixed;
        width: 50%;
        height: 90%;
        margin-left: 23%;
    }
`;