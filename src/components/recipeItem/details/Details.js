import React from 'react';

import "./Details.scss";

const Details = ({item}) => {

    return (
        <section className="recipe-item-details">
            {item !== null && item.length > 0 && item.map((item, index) => (
                <div className="row" key={index}>
                
                    {/* // start img  */}
                    <div className="col-md-5">
                        <div className="img">
                            <img src={item.img} alt={item.name} className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="recipe-item-details-inner">

                            {/* start head   */}
                            <div className="recipe-item-details-inner-head d-flex justify-content-between">
                                <div className="toping-area">
                                    <h3 className="name m-0 font-weight-bold text-capitalize">{item.name}</h3>
                                    <h6 className="sub-name m-0 text-capitalize">sub details here</h6>
                                </div>
                                <div className="bottoming-area">
                                    <span className="price font-weight-bold"><sub className="font-weight-normal">$</sub>3.99</span>
                                </div>
                            </div>

                            {/* start eat-info  */}
                            <div className="eat-info d-flex align-items-center justify-content-between">
                                <div className="eat-info-box rate">
                                    <i className="icon fas fa-star"></i>
                                    <span className="text">4</span>
                                </div>
                                {
                                    item.calories && 
                                        <div className="eat-info-box colories">
                                            <i className="icon fas fa-fire-alt"></i>
                                            <span className="text">4.5</span>
                                        </div>
                                }
                                <div className="eat-info-box time">
                                    <i className="icon fas fa-clock"></i>
                                    <span className="text">00:12:30</span>
                                </div>
                            </div>

                            {/* start body  */}
                            <div className="recipe-item-details-inner-body">
                                <h5 className="details-title font-weight-bold text-capitalize">details</h5>
                                <p className="details-details m-0">{item.desc}</p>
                            </div>
                        
                        </div>
                    </div>
                
                </div>
            ))}
        </section>
    );

}

export default Details;