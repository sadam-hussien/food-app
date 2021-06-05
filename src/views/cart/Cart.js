import React, {Fragment} from 'react';

import {connect} from "react-redux";

import { ConfirmOrder, Head, Items, NoItems } from '../../components/cart';

const Cart = ({cart}) => {

    return (
        <section className="cart-page">
            <div className="container">
                <Head />
                <section className="cart-items">
                    <ul className="list-unstyled m-0 p-0">
                        {
                            cart !==null 
                                ? cart.length > 0 ? 
                                    <Fragment>
                                        {cart.map((data, index) => (
                                            <Items data={data} key={index} />
                                        ))}
                                        <ConfirmOrder data={cart} />
                                    </Fragment>
                                : <NoItems /> 
                            : <NoItems />
                        }
                    </ul>
                </section>
            </div>
        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
