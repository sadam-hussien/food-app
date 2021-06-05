import React from 'react';

import { NavLink } from 'react-router-dom';

import {connect} from "react-redux";

import ReportsChart from "./ReportsChart";

import {Testim} from "../../global";

import "./Aside.scss";

const Aside = ({cart}) => {

    return (
        <aside className="reports position-sticky">

            {/* start reports-head */}
            <div className="reports-head d-flex justify-content-end">
                <NavLink to="/cart" className="cart-btn" activeClassName="active">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-length">{cart ? cart.length : 0}</span>
                </NavLink>
                <button type="button" className="notify-btn">
                    <i className="icon fas fa-bell"></i>
                </button>
                <button type="button" className="profile-btn">
                    <i className="icon fas fa-user"></i>
                </button>
            </div>

            <h6 className="report-title d-none d-lg-block">
                <span className="font-weight-bold text-capitalize report-title-word">report</span>
                on this week <span className="d-block">from 1-8 mars 2021</span>
            </h6>

            <div className="reports-chart d-none d-lg-block">
                <ReportsChart />
            </div>

            {/* start drinks-section */}
            <div className="reports-testim d-none d-lg-block">
                <h6 className="reports-testim-title font-weight-bold text-capitalize">clients feedback</h6>
                
                <div className="testim-wrapper">
                    <Testim />
                </div>

            </div>

        </aside>
    );

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Aside);