import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import reduxThunk from 'redux-thunk';  
import reducers from './reducers/index';  
import { AUTH_USER } from './actions/types';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import cookie from 'react-cookies';  
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFoundPage from './Components/pages/Not-found-page';
import HomePage from './Components/pages/Home-page';  
import Register from './Components/auth/Register';  
import Login from './Components/auth/Login';  
import Dashboard from './Components/Dashboard';  
import RequireAuth from './Components/auth/Require-auth';
import Navbar from './Navbar';


// Import stylesheets like this, if you choose: import './public/stylesheets/base.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
const store = createStoreWithMiddleware(reducers);
const token = cookie.load('token');

console.log(`reducers: ${reducers} && 
Store: ${JSON.stringify(store)} && 
Token ${token}` );



if (token) {  
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(  
  <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/" component={Navbar} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={RequireAuth(Dashboard)} />  
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root'));

  registerServiceWorker();
  