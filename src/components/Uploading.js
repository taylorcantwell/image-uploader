import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(0%);
    ;
}

25% {
    opacity: .7;

}


50% {
    transform: translateX(220%)  ;
    opacity: 0;
   
}
51% {
    transform: translateX(-5%)  ;
    opacity: 0;

}

75% {
    opacity: .7;

}

100% {
  
    transform: translateX(220%)  ;
    opacity: 0;

}

`;

const Container = styled.div`
    width: 400.36px;
    height: 143.57px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 2.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    margin-bottom: auto;
`;

const Loader = styled.div`
    height: 6px;
    background: #f2f2f2;
    border-radius: 8px;
    &::after {
        content: ' ';
        display: block;
        width: 100.93px;
        background: #2f80ed;
        border-radius: 8px;
        position: relative;
        height: 6px;
        animation: ${loadingAnimation} 2.5s infinite ease-out;
    }
`;
const Uploading = () => {
    return (
        <Container>
            <Title>Uploading</Title>
            <Loader />
        </Container>
    );
};

export default Uploading;
