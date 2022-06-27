import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/Login";
import { updateLikes, getLikedPhotos } from "../services/Data";

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

            return {
                ...state,
                liked: [...payload]
            }
        }
    },
});

export const login = (credentials) => {

    return async dispatch => {

        const user = await loginService(credentials);
        dispatch(loginUser(user));
    };
};

export const handleLike = (userId, likes, item) => {

    const imageId = item;
    const newArray = likes.includes(imageId) ? likes.filter(el => el !== imageId) : [...likes, item];
    
    return async dispatch => {
        const array = await updateLikes(userId, newArray, imageId);
        dispatch(like(array));
        dispatch(liked())
    };

};

export const handleLiked = (userId) => {
    if(!userId) return;
    console.log("prendido,", userId);
    
    return async dispatch => {
        const array = await getLikedPhotos(userId);
        dispatch(setLiked(array));
    };

};


export const { loginUser, like, setLiked } = userSlice.actions;
export default userSlice.reducer;
