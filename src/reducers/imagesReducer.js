import { createSlice } from "@reduxjs/toolkit";
import {getAll, postPhoto} from "../services/Data";

const initialState = [];

const imagesSlice = createSlice({
    name: "Images",
    initialState,
    reducers: {
        setImages(state, action) {
            return action.payload
        },
        setNewImage(state, action){
            return [action.payload, ...state]
        }
    },
});

export const initializeImages = () => {
    return async dispatch => {
        const array = await getAll();
        dispatch(setImages(array));
    };
};

export const addPhoto = (data, user) => {
    return async dispatch => {
        const response = await postPhoto(data, user)
        dispatch(setNewImage(response))
        
    }
}

export const { setImages, setNewImage } = imagesSlice.actions;
export default imagesSlice.reducer;
