import React, { useEffect, useState } from "react";

import {connect} from "react-redux";

import {RemoveFromCart} from "../../../store/actions";

import {Quantity} from "../../global";

// alerts
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Items.scss";

const MySwal = withReactContent(Swal);

const Items = ({data, RemoveFromCart}) => {

    const [qty, setQty] = useState();

    // set quantity
    useEffect( () => {
        setQty(data.quantity);
    }, [data.quantity]);

    const increaseQuantity = () => {
        setQty((state) => state += 1);
    }

    const dereaseQuantity = () => {
        if (qty !== 1) {
            setQty((state) => state -= 1);
        }
    }

    const deleteCartItem = () => {
        MySwal.fire({
            icon: 'warning',
            title: 'are you sure?',
            text: `you want to delete ${data.cartItem.name}?`,
            confirmButtonColor: "#f44336",
            confirmButtonText: "Yes",
            showCancelButton: true,
        }).then(result => {

            if (result.isConfirmed) {
                MySwal.fire({
                    icon: "success",
                    title: "item deleted"
                })

                RemoveFromCart(data.cartItem.id);
            }

        }) 
    }

    return (
        <li className="cart-item">
            <div className="row">

                {/* start img  */}
                <div className="col-4 col-sm-3">
                    <div className="img d-flex align-items-center justify-content-center">
                        <img src={data.cartItem.img} alt={data.cartItem.name} className="img-fluid" />
                    </div>
                </div>

                {/* start name  */}
                <div className="col-5 col-sm-6">
                    <div className="name h-100 d-flex flex-column">
                        <h5 className="name-text font-weight-bold text-capitalize">{data.cartItem.name}</h5>
                        <p className="sub-details d-none d-sm-block">
                            <span>
                                {data.cartItem.calories && data.cartItem.calories}<span>calories,</span>
                            </span>
                            <span>
                                {data.cartItem.carbs && data.cartItem.carbs}<span>carbs,</span>
                            </span>
                            <span>
                                {data.cartItem.protein && data.cartItem.carbs}<span>protein</span>
                            </span>
                        </p>
                        <Quantity qty={qty} increaseQuantity={increaseQuantity}  dereaseQuantity={dereaseQuantity} />
                    </div>
                </div>

                {/* start options  */}
                <div className="col-3 d-flex justify-content-end">
                    <div className="options d-flex flex-column">
                        <span className="price font-weight-bold"><sub className="font-weight-normal">$</sub>90</span>
                        <button type="button" className="delete-btn" onClick={deleteCartItem}><i className="icon fas fa-trash"></i></button>
                    </div>
                </div>

            </div>
        </li>
    )

}

export default connect(null, {RemoveFromCart})(Items);