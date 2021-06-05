import {combineReducers} from "redux";

import ItemsReducer from "./itemsReducer/ItemsReducer";

import FavouritesReducer from "./favouritesReducer/FavouritesReducer";

import CartReducer from "./cartReducer/CartReducer";

const AppReducer = combineReducers({
    items: ItemsReducer,
    favourites: FavouritesReducer,
    cart: CartReducer,
    
});

export default AppReducer;