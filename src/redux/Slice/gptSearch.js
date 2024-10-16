import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        isSearchPage: false,
        searchResult: null,
    },
    reducers: {
        setIsSearchPage: (state, action) => {
            state.isSearchPage = action.payload;
        }, 
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        }
    }
})
export const {setIsSearchPage, setSearchResult} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
