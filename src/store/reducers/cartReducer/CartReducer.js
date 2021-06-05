import {ADD_TO_CART, REMOVE_FROM_CART} from "../../types";

const CartReducer = (cart, action) => {

    switch(action.type) {

        case ADD_TO_CART: {
            const item = action.payload;
            const checkIfCartItemIsExist = cart !== null && cart.some(c => c.cartItem.id === item.cartItem.id);
            if (checkIfCartItemIsExist) {
                let getCartItems = [...cart];
                let getCartItem = getCartItems.filter(c => c.cartItem.id === item.cartItem.id)[0];
                getCartItem.quantity += item.quantity;
                return getCartItems;
            } else {
                const cartItems = cart ? [...cart, item] : [item];
                return cartItems; 
            }
        }

        case REMOVE_FROM_CART: {
            const itemId = action.payload;
            const NewCart = cart.filter(c => c.cartItem.id !== itemId);
            return NewCart;
        }


        default: {
            if(cart) {
                return cart
            } else {
                return null
            }
        }

    }

}

export default CartReducer;