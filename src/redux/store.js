import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Slice/userSlice"
import movieReducer from './Slice/moviesSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
})

export default store
