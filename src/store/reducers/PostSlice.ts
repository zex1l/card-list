import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostState } from "../../types/IPost";

const initialState : IPostState= {
    posts: [],
    limitOffset: 10
}


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

        setPosts(state, action: PayloadAction<IPost[]>) {
            state.posts = action.payload
        },

        deleteCurrentPost(state, action: PayloadAction<number | null>) {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },

        likeCurrentPost(state, action: PayloadAction<number | null>) {
            state.posts = state.posts.map((post) => {
                if(post.id === action.payload) {
                    post.isLiked = !post.isLiked
                }
                return post
            })
        },

        setLimitOffset(state, action: PayloadAction<number>) {
            
            state.limitOffset += action.payload

        }
        
    }
})


export default postSlice.reducer