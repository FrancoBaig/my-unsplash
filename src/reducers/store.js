import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import imagesReducer from "./imagesReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        Images: imagesReducer
    },
});

export default store;
