import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Image } from 'cloudinary-react';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { imageLoaded } from '../slices/uploaderSlice';

const loaderAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Container = styled.div`
    width: 400.36px;
    height: 454.96px;
    padding: 1.5rem 2rem 0rem 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    text-align: center;
`;

const Icon = styled(CheckCircleIcon)`
    color: #219653;
    margin-top: 0.5rem;
`;

const Title = styled.h2`
    color: #4f4f4f;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.035em;
`;

const ImageAndLoaderContainer = styled.div`
    margin: 1.5rem 0rem;
    width: 338px;
    height: 224.4px;
    border-radius: 12px;
    position: relative;
`;

const StyledImage = styled(Image)`
    width: 338px;
    height: 224.4px;
    border-radius: 12px;
    display: none;
    object-fit: cover;
    ${(props) => {
        return (
            props.isImageLoaded &&
            css`
                display: block;
            `
        );
    }};
`;

const LoaderContainer = styled.div`
    width: 338px;
    height: 230px;
    display: flex;
    position: absolute;
    top: 0%;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in;
    background-color: white;
    ${(props) => {
        return (
            props.isImageLoaded &&
            css`
                opacity: 0;
            `
        );
    }};
`;

const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #2a73d5;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${loaderAnimation} 2s linear infinite;
`;

const URLContainer = styled.div`
    width: 338px;
    height: 38px;
    background: #f6f8fb;
    border: 1px solid #2f80ed;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding-left: 0.5rem;
    align-items: center;
`;

const UrlText = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: #f6f8fb;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
    font-weight: 500;
    font-size: 8px;
    letter-spacing: -0.035em;
`;

const CopyLinkButton = styled.button`
    height: 100%;
    width: 30%;
    padding: 0 1rem;
    background: #2f80ed;
    border-radius: 0 6px 6px 0;
    font-weight: 500;
    font-size: 9px;
    border: none;
    color: #ffffff;
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(1);
    }
`;

const SuccessfulCard = () => {
    const uploadedImage = useSelector((state) => state.publicID);
    const imageURL = `https://ecstatic-hoover-70015d.netlify.app/?${uploadedImage}`;
    const textArea = useRef();
    const dispatch = useDispatch();
    const isImageLoaded = useSelector((state) => state.imageLoaded);

    const copyURL = () => {
        textArea.current.select();
        textArea.current.setSelectionRange(0, 99999);
        document.execCommand('copy');
        textArea.current.blur();
    };

    return (
        <Container>
            <Icon style={{ fontSize: 40 }} />
            <Title>Uploaded Successfully!</Title>
            <ImageAndLoaderContainer>
                <StyledImage
                    onLoad={() => {
                        dispatch(imageLoaded());
                    }}
                    isImageLoaded={isImageLoaded}
                    cloudName="dlw8rtuwl"
                    publicId={uploadedImage}
                    width="300"
                    crop="scale"
                />
                <LoaderContainer isImageLoaded={isImageLoaded}>
                    <Loader />
                </LoaderContainer>
            </ImageAndLoaderContainer>
            <URLContainer>
                <UrlText type="text" value={imageURL} ref={textArea} />
                <CopyLinkButton onClick={copyURL}>Copy Link</CopyLinkButton>
            </URLContainer>
        </Container>
    );
};

export { Container, Title };
export default SuccessfulCard;
