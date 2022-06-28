import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import imagesReducer from "./imagesReducer";
import filterReducer from "./filterReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        images: imagesReducer,
        filter: filterReducer
    },
});

export default store;
