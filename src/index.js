import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchMonsters, getMonsters } from './reducer';

const logger = createLogger({});
const store = createStore(
    combineReducers({ searchMonsters, getMonsters }),
    compose(applyMiddleware(thunk, logger))
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
