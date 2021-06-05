import React from 'react';

import {useHistory, Link} from "react-router-dom";

import "./Item.scss";

const Item = ({theClass, data}) => {

    const currentPage = useHistory().location.pathname;

    const headClasses = currentPage === "/" ? "in-home" : currentPage === "/recipes" ? "flex-column in-recipes" : null;

    const ingCount = data.ingredients && data.ingredients.length;

    const ingShowing = 2;

    const price = Math.ceil(Math.random() * 1000);

    return (
        <div className={`item ${theClass}`}>
            <Link to={`/recipeitem/${data.id}`} className="item-content d-block h-100">

                {/* start item-head  */}
                <div className={`item-head text-center d-flex align-items-center position-relative ${headClasses}`}>
                    {/* start img  */}
                    <div className="item-img">
                        <img src={data.img} alt={data.name} className="img-fluid" />
                    </div>
                    {/* start name  */}
                    <div className="item-name">
                        <h6 className="text-name font-weight-bold m-0 text-capitalize">{data.name}</h6>
                        <span className="item-colories text-capitalize">
                            {data.calories ? data.calories + " col" : null}
                            {currentPage === "/recipes" && data.sugar && ", " + data.sugar + "sugar"}
                        </span>
                    </div>
                    {
                        currentPage === "/" && <span className="item-cat">{data.categ}</span>
                    }
                    {
                        
                        currentPage === "/recipes" && <span className="item-price"><sub>$</sub>{price}</span>
                    }
                </div>

                {/* start item-boody  */}
                <div className="item-body">

                    {/* start ingredients  */}
                    {
                        currentPage === "/" && data.ingredients && (
                            <div className="item-ing">
                                <h6 className="ing-text text-capitalize">ingredients</h6>
                                <ul className="item-ing-inner list-unstyled m-0 d-flex align-items-center">
                                    {
                                        data.ingredients.slice(0, ingShowing).map((ing, index) => (
                                            <li className="item-ing-box" key={index}>
                                                <span className="name text-capitalize font-weight-bold">{ing.name},</span>
                                            </li>
                                        ))
                                    }
                                    {
                                        ingCount !== ingShowing && (
                                            <li className="item-ing-box more-ingred">
                                                <span className="name">{"+" + ingCount - ingShowing + " More"}</span>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        )
                    }
                </div>

            </Link>
        </div>
    );

}

export default Item;
