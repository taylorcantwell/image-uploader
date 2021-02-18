import React from 'react';
import styled from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Container = styled.div`
    width: 400.36px;
    height: 454.96px;
    padding: 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const Icon = styled(CheckCircleIcon)`
    color: red;
`;

const Title = styled.h2`
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    letter-spacing: -0.035em;
`;

const Image = styled.img`
    width: 338px;
    height: 224.4px;
    background: url(${{}});
    border-radius: 12px;
`;

const URLContainer = styled.div`
    width: 338px;
    height: 38px;

    background: #f6f8fb;
    /* Gray 5 */

    border: 1px solid #2f80ed;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: right;
`;

const CopyLinkButton = styled.button`
    height: 100%;
    padding: 0 1rem;
    background: #2f80ed;
    border-radius: 0 6px 6px 0;
    font-weight: 500;
    font-size: 9px;
    border: none;
    color: #ffffff;
`;

const SuccessfulCard = () => {
    return (
        <Container>
            <Icon />
            <Title>Uploaded Successfully!</Title>
            <Image />
            <URLContainer>
                <CopyLinkButton>Copy Link</CopyLinkButton>
            </URLContainer>
        </Container>
    );
};

export default SuccessfulCard;
