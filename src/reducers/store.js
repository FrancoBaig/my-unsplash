import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import imagesReducer from "./imagesReducer";
import { subscribe } from "react-redux"

const store = configureStore({
    reducer: {
        user: userReducer,
        Images: imagesReducer
    },
});

store.subscribe(()=>{
    const storeNow = store.getState();
    console.log(storeNow);
})

export default store;
