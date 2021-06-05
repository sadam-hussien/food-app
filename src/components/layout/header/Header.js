import React, { useState } from "react";

import {NavLink, Link} from "react-router-dom";

import ShareImg from "../../../assete/main-food.png";

import "./Header.scss";

const Header = () => {

    const [activeNav, setActiveNav] = useState(false);

    const nav = [
        {icon: <i className='d-none d-lg-inline-block icon fas fa-th-large'></i>, title: "overview", link: "/"},
        {icon: <i className='d-none d-lg-inline-block icon fas fa-concierge-bell'></i>, title: "recipes", link: "/recipes"},
        {icon: <i className='d-none d-lg-inline-block icon far fa-heart'></i>, title: "favourites", link: "/fa"},
        {icon: <i className='d-none d-lg-inline-block icon fas fa-chart-pie'></i>, title: "community", link: "/co"},
        {icon: <i className='d-none d-lg-inline-block icon fas fa-cog'></i>, title: "settings", link: "/se"},
    ]

    return (
        <header className="main-header d-flex align-items-center align-items-lg-start justify-content-between justify-content-lg-start flex-lg-column position-sticky">

            {/* start logo  */}
            <div className="logo">
                <h4 className="logo-text font-weight-bold m-0">
                    <Link to="/">Eat<span>dish._</span></Link>
                </h4>
            </div>

            {/* start nav  */}
            <nav className={`nav flex-column flex-md-row flex-lg-column ${activeNav ? "active-nav" : ""}`}>

                {
                    nav.map((nav, index) => (
                        <NavLink key={index} to={nav.link} exact activeClassName="active" className="nav-link text-capitalize">
                            {nav.icon}
                            <span>{nav.title}</span>
                        </NavLink>
                    ))
                }

            </nav>

            <button onClick={() => setActiveNav(!activeNav)} className="toggle-nav d-inline-flex d-md-none" type="button">
                <i className="icon fas fa-bars"></i>
            </button>

            {/* start share  */}
            <div className="share d-none d-lg-block">
                <img src={ShareImg} alt="share-img" className="img-fluid" />
                <div className="share-inner">
                    <p className="text">share your own <span>recipe</span> with the community</p>
                    <button type="button" className="share-btn">upload now</button>
                </div>
            </div>

        </header>
    )

}

export default Header;