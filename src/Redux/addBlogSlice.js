import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    blog:JSON.parse(localStorage.getItem('blogs')) || []
}

const addBlogSlice = createSlice({
    name :'addBlogSlice',
    initialState,
    reducers:{
        addBlog:(state,action) =>
        {
            state.blog.push(action.payload);
            localStorage.setItem('blogs',JSON.stringify(state.blog))
        },
        editBlog:(state,action) =>{
            const BlogIndex = state.blog.findIndex((blog) => blog.id === action.payload.id);
            state.blog[BlogIndex] = {...action.payload};
            localStorage.setItem('blogs',JSON.stringify(state.blog));
        }
          
        
    }
})

export const {addBlog ,editBlog} = addBlogSlice.actions;
export default addBlogSlice.reducer;