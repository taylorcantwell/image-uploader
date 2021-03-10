import { configureStore } from '@reduxjs/toolkit';
import uploaderSlice from '../slices/uploaderSlice';

export default configureStore({
    reducer: uploaderSlice,
});
