import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie', 
    initialState: {
        nowPlayingMovies: null,
        trailerKey: null,
        popularMovies: null,
        topRatedMovies: null,
        movieId: null,
        movieInfo: null,
        actors: null,
        showMovieInfo : false,
        movieVideos: null,
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
        addMovieId: (state, action) => {
            state.movieId = action.payload;
        }, 
        addMovieInfo : (state, action) => {
            state.movieInfo = action.payload;
        },
        addShowMovieInfo : (state, action) => {
            state.showMovieInfo = action.payload
        }, 
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload;
        }
        
    }
});
export const {addNowPlayingMovies, addTrailerKey, addPopuplarMovies, addTopRatedMovies, addMovieId, addMovieInfo, addShowMovieInfo, addMovieVideos}  = movieSlice.actions;
export default movieSlice.reducer;