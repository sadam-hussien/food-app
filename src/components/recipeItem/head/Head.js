import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

import {RemoveFromFavourites, AddToFavourites} from "../../../store/actions";

import "./Head.scss";

const Head = ({favourites, item, AddToFavourites, RemoveFromFavourites}) => {

    const [inFave, setInFav] = useState(false);

    // check if the item in favourites or no
    useEffect( () => {

        const checkIfItemExist = favourites !== null && item !== null && favourites.some(fav => fav.id === item[0].id)

        setInFav(checkIfItemExist);

    }, [favourites, item]);

    const handleFav = () => {

        setInFav(!inFave);
        
        inFave ? RemoveFromFavourites(item.id) : AddToFavourites(item);
    }

    return (
        <section className="recipe-item-head d-flex align-items-center justify-content-between">
            <Link to="/recipes" className="go-to-home-btn recipe-item-head-btn"><i className="icon fas fa-chevron-left"></i></Link>
            {
                inFave ? 
                    <button onClick={handleFav} type="button" className="add-to-fav-btn recipe-item-head-btn in-fav"><i className="icon fas fa-heart"></i></button>
                :
                    <button onClick={handleFav} type="button" className="add-to-fav-btn recipe-item-head-btn out-fav"><i className="icon fas fa-heart"></i></button>
            }
        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites
    }
}

export default connect(mapStateToProps, {AddToFavourites, RemoveFromFavourites})(Head);