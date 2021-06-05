import React from 'react';

import {Link} from "react-router-dom";

import "./Head.scss";

const Head = () => {
    return (
        <section className="cart-head d-flex align-items-center justify-content-between">
            <Link to="/recipes" className="cart-head-btn go-to-recipes-btn"><i className="icon fas fa-chevron-left"></i></Link>
            <h3 className="m-0 cart-head-text font-weight-bold text-capitalize">my orders</h3>
            <button type="button" className="cart-head-btn cart-head-menu-btn"><i className="icon fas fa-ellipsis-v"></i></button>
        </section>
    );
}

export default Head;
