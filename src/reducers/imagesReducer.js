import { createSlice } from "@reduxjs/toolkit";
import getAll from "../services/Data";

const initialState = [];

const imagesSlice = createSlice({
    name: "Images",
    initialState,
    reducers: {
        setImages(state, action) {
            return action.payload
        },
    },
});

export const initializeImages = () => {
    return async dispatch => {
        const array = await getAll();
        dispatch(setImages(array));
    };
};

export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;
