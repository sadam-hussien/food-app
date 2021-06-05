import React from 'react';

import { Link } from 'react-router-dom';

import IntroImg from "../../../assete/chef.png";

import "./Intro.scss";

const Intro = () => {

    return (
        <section className="intro">
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="intro-text">
                        <h3 className="intro-text-title text-capitalize">add your own recipe</h3>
                        <p className="intro-text-desc">upload your own home mode recipe, and share it  with other members of our community</p>
                        <Link to="/recipes" className="go-to-btn">
                            <span>explore recipes</span>
                            <i className="icon fas fa-long-arrow-alt-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-4">
                    <div className="intro-img">
                        <img src={IntroImg} alt="intro img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Intro;
