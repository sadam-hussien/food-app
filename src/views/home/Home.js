import React from 'react';

import {Search, Intro, PopularItems, GetOurApp} from '../../components/home';

const Home = () => {

    return (
        <section className="home-page">
            <div className="container">
                <div className="overfiew-content">
                    <Search />
                    <Intro />
                    <PopularItems />
                    <GetOurApp />
                </div>
            </div>
        </section>
    );

}

export default Home;