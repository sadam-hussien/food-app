import {ADD_TO_CART, REMOVE_FROM_CART} from "../../types";

// add to cart
export const AddToCart = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }
}

// remove from cart
export const RemoveFromCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }
}