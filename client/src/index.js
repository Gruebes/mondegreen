import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import { Router } from 'react-router';  
import reduxThunk from 'redux-thunk';  
import routes from './routes';  
import reducers from './reducers/index';  
import { AUTH_USER } from './actions/types';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import cookie from 'react-cookies';  

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
const store = createStoreWithMiddleware(reducers);
const token = cookie.load('token');


if (token) {  
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(  
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>,
  document.getElementById('root'));

  registerServiceWorker();
  