import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import imagesReducer from "./imagesReducer";
import filterReducer from "./filterReducer";
import { subscribe } from "react-redux";

const store = configureStore({
    reducer: {
        user: userReducer,
        images: imagesReducer,
        filter: filterReducer
    },
});

store.subscribe(()=>{
    const storeNow = store.getState();
    console.log(storeNow);
})

export default store;
