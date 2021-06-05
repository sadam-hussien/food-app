import React from 'react';

import "./ConfirmOrder.scss";

const ConfirmOrder = ({data}) => {

    const price = 90;

    let itemTotal = data.reduce((prev, current) => current.quantity * price + prev, 0).toFixed(2);

    const deliveryCharge = Number(0).toFixed(2);

    const tax = Number(0).toFixed(2);

    let total = Number(itemTotal + parseInt(deliveryCharge) + parseInt(tax)).toFixed(2); 

    return (
        <section className="cart-confirm-order">
            <div className="box d-flex align-items-center justify-content-between">
                <span>item total</span>
                <span><sub>$</sub>{itemTotal}</span>
            </div>
            <div className="box d-flex align-items-center justify-content-between">
                <span>delivery charge</span>
                <span><sub>$</sub>{deliveryCharge}</span>
            </div>
            <div className="box d-flex align-items-center justify-content-between">
                <span>tax</span>
                <span><sub>$</sub>{tax}</span>
            </div>
            <div className="box d-flex align-items-center justify-content-between">
                <span>total</span>
                <span><sub>$</sub>{total}</span>
            </div>
            <div className="confirm-order-btn d-flex justify-content-center">
                <button type="button">confirm order <i className="icon fas fa-long-arrow-alt-right"></i></button>
            </div>
        </section>
    );
}

export default ConfirmOrder;
