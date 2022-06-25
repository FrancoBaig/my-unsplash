import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/Login";

const initialState = {
    email: "",
    name: "",
    token: "",
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
                token: payload.token
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

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;
