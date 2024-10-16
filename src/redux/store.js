import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./Slice/userSlice"
import movieReducer from './Slice/moviesSlice'
import gptSearchReducer from './Slice/gptSearch'
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptSearchReducer,
  },
})

export default store
