import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { selectedMovies } from '../redux/reducers/moviesReducer';
import Expensive from "../pepperoni.jpg";
import { setSelectedSearched } from '../redux/actions/moviesAction';

function MenuItem() {
    const movieee = useSelector((state) => state.movie);
    console.log(movieee)

    const { imdbID } = useParams();
    const dispatch = useDispatch();

    // console.log(imdbID);
    const {Title , Year, Poster} = movieee;


    const fetchSingleMovie = async () => {

        const response = await axios
            .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=KEY`)
            .catch((err) => {
                console.log("error is : ", err);
            })
        // console.log(response.data)

        dispatch(setSelectedSearched(response.data));
    
    }

    useEffect(() => {
        fetchSingleMovie();
    }, [imdbID])



    return (
        <div className="menuItem" >
            <div style={{ backgroundImage: `url(${Poster})` }}></div>
            <h1>{Title}</h1>
            <p>{Year}</p>
        </div>
    )
}

export default MenuItem;


