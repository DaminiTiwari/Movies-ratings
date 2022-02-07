import { ActionType } from "../actionType/actionType";


export const setSearched = (movies) => {
    return {
        type: ActionType.SET_MOVIE,
        payload: movies
    }
}

export const setSelectedSearched = (movie) => {
    return {
        type: ActionType.SELECTED_MOVIE,
        payload: movie
    }
}

export const removeSelectedSearched = (movie) => {
    return {
        type: ActionType.REMOVE_SELECTES_MOVIE,
      
    }
}

export const keySelected = (key) => {
    return {
        type: ActionType.SEARCH_KEY,
        payload: key
    }
}