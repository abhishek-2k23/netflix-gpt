import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser : (state, action) => {
            return action.payload; //it will set the initalState with action.payload data
        }, 
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const {addUser ,removeUser} = userSlice.actions;
export default userSlice.reducer;