import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// for store
import {Provider} from "react-redux";
import {Store} from "./store";

// my scss file
import "./scss/style.scss";

ReactDOM.render(

    <React.StrictMode>

        <Provider store={Store}>
            <App />
        </Provider>
        
    </React.StrictMode>,

    document.getElementById('root')
);