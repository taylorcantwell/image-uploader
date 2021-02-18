import React from 'react';
import { useSelector } from 'react-redux';
import Card from './components/Card';
import Uploading from './components/Uploading';
import GlobalStyles from './styles/globalStyles';
import SuccessfulCard from './components/SuccessfulCard';

const App = () => {
    const isUploading = useSelector((state) => state.uploading);

    console.log(isUploading);
    return (
        <>
            <GlobalStyles />
            <SuccessfulCard />
            {/* {!isUploading && <Card />} */}

            {isUploading && <Uploading />}
        </>
    );
};

export default App;
