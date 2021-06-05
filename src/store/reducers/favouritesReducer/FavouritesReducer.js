import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../../types";

const FavouritesReducer = (favourites, action) => {
    switch(action.type) {

        case ADD_TO_FAVOURITES: {
            const favItems = action.payload;
            const favs = favourites !== null ? [...favourites, ...favItems] : [...favItems];
            return favs;
        } 

        case REMOVE_FROM_FAVOURITES: {
            const id = parseInt(action.payload);
            const filterFavs = favourites.filter(item => item.id !== id);
            return filterFavs;
        }

        default: {
            if (favourites) {
                return favourites;
            } else {
                return null
            }
        }
    }
}

export default FavouritesReducer;