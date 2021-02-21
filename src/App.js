import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FailureCard from './components/FailureCard';
import FetchImage from './components/FetchImage';
import SuccessfulCard from './components/SuccessfulCard';
import UploadCard from './components/UploadCard';
import Uploading from './components/Uploading';
import GlobalStyles from './globalStyles';

const App = () => {
    const isUploading = useSelector((state) => state.uploading);
    const isUploadSuccessful = useSelector((state) => state.uploadSuccessful);
    const isUploadFailure = useSelector((state) => state.uploadFail);
    const { search } = useLocation();
    const imageURL = search.slice(1);
    return (
        <>
            <GlobalStyles />
            {imageURL && <FetchImage imageURL={imageURL} />}
            {isUploadFailure && <FailureCard />}
            {isUploadSuccessful && <SuccessfulCard />}
            {!isUploading &&
                !isUploadSuccessful &&
                !imageURL &&
                !isUploadFailure && <UploadCard />}
            {isUploading && <Uploading />}
        </>
    );
};

export default App;
