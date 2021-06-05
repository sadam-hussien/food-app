import React from 'react';

import Client1 from "../../../assete/client1.jpg";

import Client2 from "../../../assete/client2.jpg";

import Client3 from "../../../assete/client3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import "./Testim.scss";

const Testim = () => {

    const clients = [
        {
            id: 1, 
            name: "mahmoud",
            img: Client1,
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
        },
        {
            id: 2, 
            name: "hussien",
            img: Client2,
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
        },
        {
            id: 3, 
            name: "ramadan",
            img: Client3,
            content: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
        }
    ]

    return (
        <Carousel autoPlay={true} interval={4000} emulateTouch={true} infiniteLoop={true} showThumbs={false} showArrows={false} showIndicators={true}>
            {
                clients.map((item, index) => (
                    <div key={index} className="testim-item">
                        <div className="img position-relative d-flex align-items-center justify-content-center">
                            <img src={item.img} alt={item.name} className="img-fluid" />
                        </div>
                        <div className="testim-item-content position-relative">
                            <i className="icon fas fa-quote-left"></i>
                            <p className="m-0 testim-item-content-inner">{item.content}</p>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );

}

export default Testim;