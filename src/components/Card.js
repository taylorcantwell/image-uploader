import React from 'react';
import styled from 'styled-components';

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

const Title = styled.h1``;

const Info = styled.p``;

const DragAndDrop = styled.div``;

const Button = styled.button``;

const Card = () => {
    return (
        <Container>
            <h1>Upload your image</h1>
            <p>File should be Jpeg, Png,...</p>
            <h2></h2>
            <div className="drop-area">
                <p>Drag & Drop your image here</p>
            </div>
            <p>Or</p>
            <button>Choose a file</button>
        </Container>
    );
};

export default Card;
