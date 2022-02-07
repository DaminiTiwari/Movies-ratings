import { ActionType } from "../actionType/actionType";


const inialState = {

    movies: {},
      key: "good"
};


export const moviesReducer = (state = inialState, {type, payload}) => {

    switch (type) {
        case ActionType.SET_MOVIE:
            return {
                ...state, movies: payload
            };
           
    
        default:
           return state;
    }
}

export const selectedMoviesReducer = (state = {}, {type, payload}) => {

    switch (type) {

        case ActionType.SELECTED_MOVIE:
            return {
                ...state,  ...payload
            };

           case ActionType.REMOVE_SELECTES_MOVIE:
               
               return{};
    
        default:
           return state;
    }
}

export const keyReducer = (state = inialState, {type, payload}) => {

    switch (type) {
        case ActionType.SEARCH_KEY:
            return {
                key: payload
            };
           
            default:
           return state;
    }
}