import React from 'react';

import "./AddToCart.scss";

const AddToCartBtn = ({addCartItem}) => {

    return (
        <button type="button" className="add-to-cart-btn" onClick={addCartItem}>
            <i className="icon fas fa-shopping-cart"></i>
            <span>add to cart</span>
        </button>
    );

}

export default AddToCartBtn;