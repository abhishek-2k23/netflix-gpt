import { useDispatch, useSelector } from "react-redux"
import {addMovieId, addMovieInfo, addShowMovieInfo} from '../redux/Slice/moviesSlice';
import { useEffect } from "react";
import { movieDetailURL } from "../utils/url";
import { API_OPTION } from "../utils/constants";
import useGetTrailerKey from "./useGetTrailerKey";
const useForOneMovie = () => {
    const dispatch = useDispatch();
    const {movieId, showMovieInfo} = useSelector((store) => store.movies);
    const {getVideoClips} = useGetTrailerKey(movieId, true);
    
    const handleMovieCard = (id) => {
        console.log(movieId, showMovieInfo);
        dispatch(addMovieId(id));
        dispatch(addShowMovieInfo(id !== null));

        id === null && dispatch(addMovieInfo(null));
        
        console.log(movieId, showMovieInfo);
    }

    const fetchMovieDetails = () => {
        fetch(movieDetailURL+movieId, API_OPTION)
        .then(res  => res.json())
        .then(data => dispatch(addMovieInfo(data)))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        if(movieId){
            fetchMovieDetails();
        }
    }, [movieId]);
    

    return {handleMovieCard};
}

export default useForOneMovie;