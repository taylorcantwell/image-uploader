import React, { useCallback, useState } from 'react';
import { uploading, finishedUploading } from '../slices/uploaderSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { useDropzone } from 'react-dropzone';
import backgroundImage from '../images/image.svg';

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
            border: dashed grey 3px;
            background-color: rgba(255, 255, 255, 0.8);
        `}
`;

const Input = styled.input`
    /* height: 100%;
    width: 100%;
    background-color: red;
    display: block; */
`;

const DragAndDrop = () => {
    const [inDropzone, updateDropzone] = useState(false);
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        dispatch(uploading());
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <Container {...getRootProps()} isDragActive={isDragActive}>
            <Input {...getInputProps()}></Input>
        </Container>
    );
};

export default DragAndDrop;
