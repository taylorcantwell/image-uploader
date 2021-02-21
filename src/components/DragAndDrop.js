import axios from 'axios';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import backgroundImage from '../images/image.svg';
import {
    finishedUploading,
    uploadError,
    uploading,
} from '../slices/uploaderSlice';

const Container = styled.form`
    width: 338px;
    height: 218.9px;
    background: #f6f8fb;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: top 25% left 50%;
    border: 1px dashed #97bef4;
    border-radius: 12px;
    transition: all 0.2s ease-in;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1.5rem;

    ${(props) =>
        props.isDragActive &&
        css`
            border: dashed blue 1px;
            background-color: #c6ffc6;
        `}

    ${(props) =>
        props.isDragReject &&
        css`
            border: dashed black 1px;
            background-color: #ffa2a2;
        `};

    &:hover {
        filter: brightness(1.05);
    }
`;

const Input = styled.input`
    display: none;
`;

const DragAndDropText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #bdbdbd;
    margin: 1rem;
`;

const ChooseButton = styled.label`
    padding: 0.4rem 1.25rem;
    background: #2f80ed;
    border: none;
    border-radius: 8px;
    font-family: Noto Sans;
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

const DragAndDrop = () => {
    const dispatch = useDispatch();
    const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
        try {
            dispatch(
                uploading({
                    uploading: true,
                })
            );
            const url =
                'https://api.cloudinary.com/v1_1/dlw8rtuwl/image/upload';
            const formData = new FormData();
            formData.append('file', acceptedFiles[0]);
            formData.append('upload_preset', 'wkhvtkwu');
            const response = await axios.post(url, formData);
            dispatch(
                finishedUploading({
                    uploading: false,
                    uploadSuccessful: true,
                    publicID: response.data.public_id,
                })
            );
        } catch (error) {
            dispatch(
                uploading({
                    uploading: false,
                })
            );
            if (fileRejections.length > 1) {
                dispatch(
                    uploadError({
                        uploadFail: true,
                        errorMessage:
                            'Only one file can be uploaded at a time!',
                    })
                );

                return;
            }
            if (fileRejections.length > 0) {
                dispatch(
                    uploadError({
                        uploadFail: true,
                        errorMessage: fileRejections[0].errors[0].message,
                    })
                );
            }
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
    } = useDropzone({ accept: 'image/*', onDrop, maxFiles: 1 });

    return (
        <>
            <Container {...getRootProps({ isDragActive, isDragReject })}>
                <Input
                    {...getInputProps()}
                    type="file"
                    name="image"
                    id="upload"
                ></Input>
                <DragAndDropText>Drag & Drop your image here</DragAndDropText>
            </Container>
            <DragAndDropText>Or</DragAndDropText>
            <ChooseButton type="file" for="upload">
                Choose File
            </ChooseButton>
        </>
    );
};

export default DragAndDrop;
