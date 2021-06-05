import React from 'react';

import {IconDelicious} from "../../svg";

import "./Intro.scss";

const Intro = () => {

    return (
        <div className="recipe-intro">
            <div className="row align-items-center">

                {/* start intro-text  */}
                <div className="col-sm-6">
                    <div className="intro-text">
                        <h3 className="intro-text-inner font-weight-bold m-0">
                            let's eat <br />
                            Delicious Food
                            <IconDelicious style={{width: "2rem", height: "auto", marginLeft: "10px", marginTop: "-10px"}} />
                        </h3>
                    </div>
                </div>

                {/* start recipe-search  */}
                <div className="col-sm-6">
                    <div className="recipe-search">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group m-0 d-flex align-items-center">
                                <input type="text" placeholder="search food" className="form-control" />
                                <button type="submit">
                                    <i className="icon fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Intro;
