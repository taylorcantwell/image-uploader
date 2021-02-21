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
import CloseIcon from '@material-ui/icons/Close';

const Container = styled.form`
    width: 338px;
    height: 218.9px;
    background: #f6f8fb;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    border: 1px dashed #97bef4;
    border-radius: 12px;
    transition: all 0.2s ease-in;

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
        `}
`;

const Input = styled.input``;

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
        <Container {...getRootProps({ isDragActive, isDragReject })}>
            <Input {...getInputProps()}></Input>
        </Container>
    );
};

export default DragAndDrop;
