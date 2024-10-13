import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie', 
    initialState: {
        nowPlayingMovies: null,
        trailerKey: null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        }, 
        addTrailerKey:(state, action) => {
            state.trailerKey = action.payload;
        }, 
        addPopuplarMovies: (state, action) => {
            state.popularMovies = action.payload;
        }, 
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }, 
        
    }
});
export const {addNowPlayingMovies, addTrailerKey, addPopuplarMovies, addTopRatedMovies}  = movieSlice.actions;
export default movieSlice.reducer;