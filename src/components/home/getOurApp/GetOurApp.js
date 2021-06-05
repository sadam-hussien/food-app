import React from 'react';

import {Title} from "../../global";

import {IconApple, IconAndroid} from "../../svg";

import Application from "../../../assete/application.svg";

import "./GetOurApp.scss";

const GetOurApp = () => {

    const iconStyles = {width: "1.5rem", height: "auto"};

    return (
        <section className="get-our-app">
            <Title title="get our app" link="" />

            <div className="get-our-app-content">
                <div className="row align-items-center">
                    <div className="col-md-7 order-1 order-md-0 d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start">
                        <button type="button" className="android-btn d-flex align-items-center">
                            <IconAndroid style={{...iconStyles, fill: "#fff"}} />
                            <span>Get android app</span>
                        </button>
                        <button type="button" className="apple-btn d-flex align-items-center">
                            <IconApple style={iconStyles} />
                            <span>Get ios app</span>
                        </button>
                    </div>
                    <div className="col-md-5 order-0 order-md-1 d-flex justify-content-center justify-content-md-end">
                        <div className="img">
                            <img src={Application} alt="application" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default GetOurApp;