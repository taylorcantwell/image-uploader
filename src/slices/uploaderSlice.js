import { createSlice } from '@reduxjs/toolkit';

export const uploaderSlice = createSlice({
    name: 'uploading',
    initialState: {
        uploading: false,
        uploadSuccessful: null,
        uploadFail: null,
        errorMessage: '',
        publicID: '',
        imageLoaded: null,
    },
    reducers: {
        uploading: (state, { payload }) => {
            state.uploading = payload.uploading;
        },

        finishedUploading: (state, { payload }) => {
            state.uploading = payload.uploading;
            state.uploadSuccessful = payload.uploadSuccessful;
            state.publicID = payload.publicID;
        },

        uploadError: (state, { payload }) => {
            state.uploadFail = payload.uploadFail;
            state.errorMessage = payload.errorMessage;
        },

        imageLoaded: (state) => {
            state.imageLoaded = true;
        },
    },
});

export const {
    uploading,
    finishedUploading,
    uploadError,
    imageLoaded,
} = uploaderSlice.actions;

export default uploaderSlice.reducer;
