import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        isSearchPage: false,
    },
    reducers: {
        setIsSearchPage: (state, action) => {
            state.isSearchPage = action.payload;
        }
    }
})
export const {setIsSearchPage} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
