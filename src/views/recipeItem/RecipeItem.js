import React, { useEffect, useState } from 'react';

import {useParams} from "react-router-dom";

import {connect} from "react-redux";

import {AddToCart} from "../../store/actions";

import {Head, Details, AddToCartBtn} from "../../components/recipeItem";

import {Quantity} from "../../components/global";

// alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const RecipeItem = ({items, AddToCart}) => {

    const [item, setItem] = useState(null);

    const [qty, setQty] = useState(1);

    const {id} = useParams();

    useEffect( () => {

        const getItem = items !== null && items.filter(item => item.id === parseInt(id));

        setItem(getItem);

    }, [items, id]);

    const increaseQuantity = () => {
        setQty((state) => state += 1);
    }

    const dereaseQuantity = () => {
        if (qty !== 1) {
            setQty((state) => state -= 1);
        }
    }

    const addCartItem = () => {

        const cartItem = {
            cartItem: item[0],
            quantity: qty
        }

        MySwal.fire({
            icon: 'success',
            title: 'Good job!',
            titleText: 'The item has been added to your CART',
            confirmButtonColor: "#FF8D00"
        })

        AddToCart(cartItem);

    }

    return (
        <section className="recipe-item-page">
            <div className="container">
                <Head item={item} />
                <Details item={item} />
                <div className="recipe-item-shape m-auto position-relative">
                    <span className="left"></span>
                    <span className="center"></span>
                    <span className="right"></span>
                    <Quantity qty={qty} increaseQuantity={increaseQuantity}  dereaseQuantity={dereaseQuantity}/>
                    <AddToCartBtn addCartItem={addCartItem} />
                </div>
            </div>
        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {AddToCart})(RecipeItem);
