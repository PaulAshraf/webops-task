import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from './reducers/index'
import App from './App';

const store = configureStore({
    reducer: rootReducer
  })

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


