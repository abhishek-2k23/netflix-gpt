import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        isSearchPage: false,
        searchResults: null,
        searchedMoviesData: null,
    },
    reducers: {
        setIsSearchPage: (state) => {
            state.isSearchPage = !state.isSearchPage;
        }, 
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }, 
        addSearchedMoviesData: (state, action) => {
            state.searchedMoviesData = action.payload;
        }
    }
})
export const {setIsSearchPage, setSearchResults, addSearchedMoviesData} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
