import { createSlice } from "@reduxjs/toolkit";
import { loginService } from "../services/Login";
import { updateLikes, getLikedPhotos, deletePhoto } from "../services/Data";

const initialState = {
    email: "",
    name: "",
    token: "",
    likes: []
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            const payload = action.payload;

            return {
                email: payload.email,
                name: payload.name,
                token: payload.token,
                likes: [...payload.likes],
                id: payload.id,
                userImages: payload.userImages,
                liked: [...payload.likes],
            }

        },
        like(state, action){
            const likesArray = action.payload;
            
            return {
                ...state,
                likes: [...likesArray]
            }
        },
        setLiked(state, action){
            const payload = action.payload 
            const newState ={
                ...state,
                liked: [...payload]
            }

            return newState;
        },
        addUserImage(state, action){
            const image = action.payload;

            return {
                ...state,
                userImages: [...state.userImages, image]
            }
        },
        deleteImage(state, action){
            const imageId = action.payload
            const filtered = state.userImages.filter(el => el.id !== imageId)

            return {
                ...state,
                userImages: filtered,
            }
        }
    },
});

export const login = (credentials) => {
    return async dispatch => {
        const user = await loginService(credentials);
        dispatch(loginUser(user));
        dispatch(handleLiked(user.id))
    };
};

export const handleLike = (userId, likes, item) => {
    const imageId = item;
    const newArray = likes.includes(imageId) ? likes.filter(el => el !== imageId) : [...likes, item];
     
    return async dispatch => {
        const array = await updateLikes(userId, newArray, imageId);
        dispatch(like(array));
        dispatch(handleLiked(userId))
    };

};

export const handleLiked = (userId) => {
    if(!userId) return; 
    return async dispatch => {
        const array = await getLikedPhotos(userId);
        dispatch(setLiked(array));
    };

};

export const removePhoto = (imageId) =>{
    return async dispatch => {
        await deletePhoto(imageId)
        dispatch(deleteImage(imageId))
    }
}


export const { loginUser, like, setLiked, addUserImage, deleteImage } = userSlice.actions;
export default userSlice.reducer;
