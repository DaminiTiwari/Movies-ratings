import { combineReducers } from "@reduxjs/toolkit";
import {keyReducer, moviesReducer, selectedMoviesReducer} from "./moviesReducer";



const reducers = combineReducers({
allMovies: moviesReducer,
movie: selectedMoviesReducer,
key:keyReducer

});

export default reducers;