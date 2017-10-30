import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <provider store = {store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  </provider>
  , document.querySelector('#root'));
