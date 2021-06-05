import React from 'react';

import "./Quantity.scss";

const Quantity = ({qty, increaseQuantity, dereaseQuantity}) => {

    return (
        <div className="recipe-item-details-quantity d-flex align-items-center justify-content-center">
            <button onClick={increaseQuantity} className="recipe-item-details-quantity-btn"><i className="icon fas fa-plus"></i></button>
            <span className="quantity-text">{qty}</span>
            <button onClick={dereaseQuantity} className="recipe-item-details-quantity-btn"><i className="icon fas fa-minus"></i></button>
        </div>
    );

}

export default Quantity;
