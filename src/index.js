import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';


import { createStore } from "redux";
import reducers from "./reducers/index";
const store = createStore(reducers);
 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>


, 

document.getElementById('root'));