import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        comment: Object,
        email: null
    },
    reducers: {
        setPostList: (state, action) => {
            state.list = action.payload
        },
        setComment: (state, action) => {
            state.comment = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

export const { setPostList, setComment, setEmail } = postSlice.actions;

export default postSlice.reducer;

export const fetchAllPosts = (posts) => (dispatch) => {
    dispatch(setPostList(posts))
};

export const setCommentStore = (comment) => (dispatch) => {
    dispatch(setComment(comment))
}

export const setEmailStore = (email) => (dispatch) => {
    dispatch(setEmail(email))
}