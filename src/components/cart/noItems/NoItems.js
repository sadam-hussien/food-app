import React from 'react';

import { Link } from 'react-router-dom';

import EmptyCart from '../../../assete/empty-cart.svg';

import "./NoItems.scss";

const NoItems = () => {

    return (
        <div className="cart-no-item d-flex flex-column justify-content-center align-items-center">
            <img src={EmptyCart} alt="empty cart" className="img-fluid" />
            <Link to="/recipes" className="shop-btn d-flex align-items-center justify-content-center">let's eat! <i className="icon fas fa-long-arrow-alt-right"></i></Link>
        </div>
    );

}

export default NoItems;
