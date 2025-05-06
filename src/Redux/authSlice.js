import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user :JSON.parse(localStorage.getItem('authUser')) || null,
    isAuthenticated:JSON.parse(localStorage.getItem('isUserAuthenticated'))||false
}


const authSlice = createSlice({
    name :"authSlice",
    initialState,
    reducers:{
        handleLogin:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;

            localStorage.setItem('authUser',JSON.stringify(state.user));
            localStorage.setItem('isUserAuthenticated',JSON.stringify(state.isAuthenticated));

        },
        handleLogout:(state,action)=>{
            state.user = null;
            state.isAuthenticated = false;

            localStorage.setItem('authUser',JSON.stringify(state.user));
            localStorage.setItem('isUserAuthenticated',JSON.stringify(state.isAuthenticated));

        }
    }
})

export const {handleLogin,handleLogout} = authSlice.actions;
export default authSlice.reducer;