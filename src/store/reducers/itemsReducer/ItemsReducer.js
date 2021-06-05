import {LOAD_ITEMS} from "../../types";

const ItemsReducer = (items, action) => {
    switch(action.type) {

        // load
        case LOAD_ITEMS: {
            return [...action.payload]
        }

        default: {
            if (items) {
                return items;
            } else {
                return null;
            }
        }
    }
}

export default ItemsReducer;