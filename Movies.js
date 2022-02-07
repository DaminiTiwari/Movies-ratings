import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuList } from './MenuList';
// import MenuItem from './MenuItem';
import '../styles/Menu.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearched } from '../redux/actions/moviesAction';
import { useState } from 'react';


const Movies = () => {
    const key = useSelector((state) => state.allMovies.key);
    const movies = useSelector((state) => state.allMovies.movies.Search);
    // const movies = useSelector((state) => state);

    console.log(key);
    console.log(movies);

    const dispatch = useDispatch();
    
    const fetchMoviesWithKey = async () => {    
          const response = await axios.get(`http://www.omdbapi.com/?s=${key}&apikey=3e426a6f`)
            .catch((err) => console.log("error", err))
            // console.log(response.data)
            dispatch(setSearched(response.data))
            
    }


useEffect(() => {

    // if (key !== "good") 
    fetchMoviesWithKey();

//    else fetchMovies();

}, []);


return (

    <div className="menu">

        <h1 className="menuTitle">Movies</h1>
        <div className="menuList">
            {movies?.map(({ Title, Year, imdbID, Poster }) => {

                return (
                    <div className="menuItem" key={imdbID}>
                        <Link to={`./menuItem/${imdbID}`}>    <div style={{ backgroundImage: `url(${Poster})` }}></div>
                            <h1>{Title}</h1>
                            <p>{Year}</p>
                        </Link>
                    </div>
                )
            })
            }
        </div>
    </div>

)

}

export default Movies;
