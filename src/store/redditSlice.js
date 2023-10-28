import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSubredditPosts } from "../api/reddit"


const initialState = {
    post: [],
    hasError: false,
    isLoading: false,
    selectedSubreddit: '/r/pics/',
}



export const startGetPost = createAsyncThunk(
    'reddit/startGetPost',
    async (select, thunkAPI) => {
        const response = await getSubredditPosts(select);
        return response
    }
)

export const redditSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(startGetPost.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(startGetPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.post = action.payload;
            })
            .addCase(startGetPost.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });

    }
});
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;
export const selectPost = (state) => state.reddit.post;
export const selectIsLoading = (state) => state.reddit.isLoading;
export default redditSlice.reducer;


