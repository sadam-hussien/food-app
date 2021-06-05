import React, { useEffect, useState } from "react";

import {connect} from "react-redux";

import {Intro, Categories, Items} from "../../components/recipes";

const Recipes = ({items}) => {

    // categories
    const [categories, setCategories] = useState([]);

    // / active category 
    const [activeCategory, setActiveCategory] = useState(null);

    // set categories
    useEffect( () => {

        let theCat = items !== null && items.length > 0 && [...new Set(items.map(item => item.categ))];

        setCategories(theCat);

    }, [items]);

    // set active category
    useEffect( () => {

        setActiveCategory(categories[0]);

    }, [categories]);

    // change active category
    const changeActiveCategory = (index) => {
        setActiveCategory(categories[index])
    }

    return (
        <section className="recipes-page">
            <div className="container">
                <Intro />
                <Categories categories={categories} activeCategory={activeCategory} changeActiveCategory={changeActiveCategory} />
                <Items items={items} activeCategory={activeCategory} />
            </div>
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Recipes);