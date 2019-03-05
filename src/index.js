import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Navbar from './components/header/Navbar';
import Routes from "./routes/Routes";
import rootReducer from './reducers';

import 'bootstrap';
import "index.scss";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes /> 
      </div>        
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
