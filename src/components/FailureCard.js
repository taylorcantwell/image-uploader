import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { uploadError } from '../slices/uploaderSlice';
import { Container, Title } from './SuccessfulCard';

const RetryButton = styled.button`
    background-color: #2f80ed;
    padding: 0.5rem 2rem;
    color: white;
    border-radius: 5px;
    border: none;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        filter: brightness(1);
    }
`;

const Icon = styled(CloseIcon)`
    color: red;
`;

const ImageAndLoaderContainer = styled.div`
    margin: 2rem 0rem;
    width: 338px;
    height: 224.4px;
    border-radius: 12px;
    position: relative;
`;

const ErrorMessage = styled.p`
    color: red;
`;

const FailureCard = () => {
    const dispatch = useDispatch();
    const imageUploadFail = useSelector((state) => state.uploadFail);
    const errorMessage = useSelector((state) => state.errorMessage);

    const onClickHandler = () => {
        dispatch(
            uploadError({
                uploadFail: false,
                errorMessage: '',
            })
        );
    };

    return (
        <Container>
            <Title>Upload was unsuccessful</Title>
            <ErrorMessage>{imageUploadFail && errorMessage}</ErrorMessage>
            <ImageAndLoaderContainer>
                <Icon style={{ fontSize: 250 }} />
            </ImageAndLoaderContainer>
            <RetryButton onClick={onClickHandler}>Try Again!</RetryButton>
        </Container>
    );
};

export default FailureCard;
