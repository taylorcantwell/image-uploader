import React from 'react';
import styled from 'styled-components';
import DragAndDrop from './DragAndDrop';

const Container = styled.div`
    width: 402px;
    height: 469px;
    padding: 2.5rem;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
`;

const Info = styled.p`
    font-weight: 500;
    font-size: 10px;
    letter-spacing: -0.035em;
    color: #828282;
    margin: 1rem 0 1.5rem 0;
`;

const UploadCard = () => {
    return (
        <Container>
            <Title>Upload your image</Title>
            <Info>File should be Jpeg, Png,...</Info>
            <DragAndDrop />
        </Container>
    );
};

export default UploadCard;
