import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    font-size: 3rem;
    text-align: center;
`;

const FetchImage = ({ imageURL }) => {
    const [doesImageExist, updateImageExistence] = useState(true);
    const ref = useRef();
    const imageSource = `http://res.cloudinary.com/dlw8rtuwl/image/upload/${imageURL}`;
    const handleError = (e) => {
        updateImageExistence(false);
    };
    return (
        <>
            {doesImageExist ? (
                <img ref={ref} onError={handleError} src={imageSource} />
            ) : (
                <ErrorMessage>
                    An image doesn't exist at this address
                    <br />
                    :(
                </ErrorMessage>
            )}
        </>
    );
};

export default FetchImage;
