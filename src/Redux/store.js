import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import authReducer from "./authSlice"
import addBlogReducer from "./addBlogSlice"

const store = configureStore({
    reducer:{
        users:userReducer,
        auth:authReducer,
        blog:addBlogReducer
    }
})

export default store;