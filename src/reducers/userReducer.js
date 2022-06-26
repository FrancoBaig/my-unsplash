import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/Login";
import { updateLikes } from "../services/Data";

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
            console.log(payload);
            

            return {
                email: payload.email,
                name: payload.name,
                token: payload.token,
                likes: [...payload.likes],
                id: payload.id
            }

        },
        like(state, action){
            const likesArray = action.payload;
            
            return {
                ...state,
                likes: [...likesArray]
            }
        },
    },
});

export const login = (credentials) => {

    return async dispatch => {

        const user = await loginService(credentials);
        dispatch(loginUser(user));
    };
};

export const handleLike = (userId, likes, item) => {

    const newArray = likes.includes(item) ? likes.filter(el => el !== item) : [...likes, item];

    return async dispatch => {
        const array = await updateLikes(userId, newArray);
        dispatch(like(array));
    };

};


export const { loginUser, like } = userSlice.actions;
export default userSlice.reducer;
