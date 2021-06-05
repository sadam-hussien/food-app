import React, { useEffect, useState } from 'react';

import {Item} from "../../global";

import "./Items.scss";

const Items = ({items, activeCategory}) => {

    const [activeItems, setActiveItems] = useState([]);

    useEffect(() => {

        let filterItems = items !== null && items.length > 0 && items.filter(item => item.categ === activeCategory);

        setActiveItems(filterItems);

    }, [activeCategory, items])

    return (
        <section className="recipes-items">
            <div className="row">
                {
                    activeItems !== null && activeItems.length > 0 && activeItems.map((item, index) => (
                        <Item theClass="col-sm-6 col-md-4 in-recipes-page" data={item} key={item.id} />
                    ))
                }
            </div>
        </section>
    );

}

export default Items;
