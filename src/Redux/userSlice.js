import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:JSON.parse(localStorage.getItem("blogusers")) || []
}

const userSlice = createSlice({
    name:"useSlice",
    initialState,
    reducers:{
        userRegister:(state,action)=>{
            state.users.push(action.payload);
            localStorage.setItem("blogusers",JSON.stringify(state.users))
        }
    }
})

export const {userRegister} = userSlice.actions;
export default userSlice.reducer;