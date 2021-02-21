import React from 'react';
import styled from 'styled-components';
import DragAndDrop from './DragAndDrop';

const Container = styled.div`
    width: 402px;
    height: 469px;
    padding: 3rem;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
`;

const Info = styled.p`
    font-family: Poppins;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: -0.035em;
    color: #828282;
`;

const DragAndDropText = styled.p`
    font-family: Poppins;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
`;

const ChooseButton = styled.label`
    padding: 0.4rem 1.1rem;
    background: #2f80ed;
    border: none;
    border-radius: 8px;
    font-family: Noto Sans;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.035em;
    color: #ffffff;
    cursor: pointer;
    outline: none;
    transition: all 0.1s ease-out;
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(1);
    }
`;

const ChooseInput = styled.input`
    display: none;
`;

const UploadCard = () => {
    return (
        <Container>
            <Title>Upload your image</Title>
            <Info>File should be Jpeg, Png,...</Info>
            <h2></h2>
            <DragAndDrop>
                <DragAndDropText>Drag & Drop your image here</DragAndDropText>
            </DragAndDrop>
            <DragAndDropText>Or</DragAndDropText>
            <ChooseButton type="file" for="upload">
                Choose File
            </ChooseButton>
            <ChooseInput type="file" name="photo" id="upload" />
        </Container>
    );
};

export default UploadCard;
