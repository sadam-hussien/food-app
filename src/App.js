import React, { useEffect } from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import {connect} from "react-redux";

import {LoadItems} from "./store/actions";

import {Header, Aside, Footer} from "./components/layout";

import {Home, Recipes, RecipeItem, Cart} from "./views";

function App({LoadItems}) {

    useEffect(() => {
        LoadItems();
    }, [LoadItems])

    return (
        <BrowserRouter>
            <div className="App">

                <div className="row no-gutters">

                    <div className="col-lg-2">
                        <Header />
                    </div>

                    <div className="col-lg-7 page order-2 order-lg-1">
                        <article className="page-content d-flex flex-column">
                            <Switch>
                                <Route path="/" exact component={Home}  />
                                <Route path="/recipes" component={Recipes} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/recipeitem/:id" component={RecipeItem} />
                            </Switch>

                            <Footer />
                            
                        </article>
                    </div>

                    <div className="col-lg-3 order-1 order-lg-2">
                        <Aside />
                    </div>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default connect(null, {LoadItems})(App);