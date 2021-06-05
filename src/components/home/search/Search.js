import React from 'react';

import "./Search.scss";

const Search = () => {

    return (
        <section className="search">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group m-0">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="inp-group d-flex align-items-center">
                                <label htmlFor="search"><i className="fas fa-search"></i></label>
                                <input type="text" placeholder="search by food name" id="search" className="form-control" />
                            </div>
                        </div>
                        <div className="d-none d-md-block col-4 col-md-3">
                            <button className="filter-btn w-100" type="button">
                                <i className="fas fa-filter"></i>
                                <span>filter</span>
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    );

}

export default Search;
