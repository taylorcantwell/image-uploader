import { configureStore } from '@reduxjs/toolkit';
import uploaderSlice from '../slices/uploaderSlice';
// import rootReducer from '../slices';

export default configureStore({
    reducer: uploaderSlice,
});
