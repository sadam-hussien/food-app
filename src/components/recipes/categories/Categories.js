import React from 'react';

import "./Categories.scss";

const Categories = ({categories, activeCategory, changeActiveCategory}) => {

    return (
        <section className="recipes-categoories d-flex flex-wrap">
            {
                categories !== null && categories.length > 0 && categories.map((categ, index) => (
                    <button type="button" 
                        key={index}
                        onClick={() => changeActiveCategory(index)}
                        className={`recipes-categoories-btn ${categ === activeCategory && "active"}`}>
                                {categ}
                    </button>
                ))
            }
        </section>
    );

}

export default Categories;