import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../../types";

// add to favourit
export const AddToFavourites = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_FAVOURITES,
            payload: item
        })
    }
}

// remove from favourites
export const RemoveFromFavourites = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_FAVOURITES,
            payload: id
        })
    }
}