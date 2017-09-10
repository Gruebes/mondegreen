import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
// import { Router, browserHistory } from 'react-router';  
import reduxThunk from 'redux-thunk';  
// import routes from './routes';  
import reducers from './reducers/index';  
import { AUTH_USER } from './actions/types';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import cookie from 'react-cookie';  
import App from './App'
import { BrowserRouter } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
const store = createStoreWithMiddleware(reducers);
const token = cookie.load('token');

if (token) {  
  store.dispatch({ type: AUTH_USER });
}

// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));


registerServiceWorker();
  