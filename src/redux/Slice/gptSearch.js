import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        isLoading: false,
        isSearchPage: false,
        searchResults: null,
        searchedMoviesData: null,
        errorMessage: null,
    },
    reducers: {
        setIsSearchPage: (state,action) => {
            if(action.payload === false){
                state.isSearchPage = false;
            }else{
                state.isSearchPage = !state.isSearchPage;
            }
            if(state.isSearchPage === false){
                state.searchedMoviesData = null;
                state.searchResults = null;
            }
        }, 
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }, 
        addSearchedMoviesData: (state, action) => {
            state.searchedMoviesData = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        }
    }
})
export const {setIsSearchPage, setSearchResults, addSearchedMoviesData, setIsLoading, setErrorMessage} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
