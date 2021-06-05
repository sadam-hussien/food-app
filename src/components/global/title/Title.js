import React from 'react';

import { Link } from 'react-router-dom';

import "./Title.scss";

const Title = ({title, link}) => {

    return (
        <div className="title d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="title-text font-weight-bold m-0">{title}</h5>
            {
                link && (
                    <Link to={link} className="more-btn d-flex align-items-center"><span>view more</span> <i className="icon fas fa-long-arrow-alt-right"></i></Link>
                )
            }
        </div>
    );

}

export default Title;
