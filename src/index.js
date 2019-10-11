import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './data/reducer';
import './index.css';
import './res/flash-css/css/layouts.css';
import './res/flash-css/templates/topBar/top-bar.css';
import './res/flash-css/css/image.css'
import './res/flash-css/css/headings.css'
import './res/flash-css/css/buttons.css'
import './res/flash-css/css/alerts.css'
import App from './App';
import * as serviceWorker from './serviceWorker';


window.onload = () => {
    let store = createStore(reducer);

    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
