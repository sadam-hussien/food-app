import React from "react";

import {connect} from "react-redux";

import {Title, Item} from "../../global";

import "./PopularItems.scss";

const PopularItems = ({items}) => {

    return (
        <section className="popular-items">
            
            {/* stat title  */}
            <Title title="based on the type of food you like" link="/recipes" />

            {/* start items content  */}
            <div className="items-content">
                <div className="row">
                    {
                        items !== null && items.slice(0, 4).map((item, index) => (
                            <Item theClass="col-sm-12 col-md-6" data={item} key={index} />
                        ))
                    }
                </div>
            </div>

        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(PopularItems);