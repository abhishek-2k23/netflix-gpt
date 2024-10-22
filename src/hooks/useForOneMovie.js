import { useDispatch, useSelector } from "react-redux"
import {addMovieId, addShowMovieInfo} from '../redux/Slice/moviesSlice';
const useForOneMovie = () => {
    const dispatch = useDispatch();
    const {movieId, movieInfo} = useSelector((store) => store.movies);

    const handleMovieCard = (id) => {
        dispatch(addMovieId(id));
        dispatch(addShowMovieInfo());
    }
    

    return {handleMovieCard, };
}

export default useForOneMovie;