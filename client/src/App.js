import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Switch } from 'react-router'
import {  } from 'semantic-ui-react';
import './App.css';
import Navbar from './Navbar'
// import Welcome from './Components/Welcome';
// import Signup from './Components/Signup';
// import Signin from './Components/Signin';

import NotFoundPage from './Components/pages/Not-found-page';

import HomePage from './Components/pages/Home-page';  
import Register from './Components/auth/Register';  
import Login from './Components/auth/Login';  
import Dashboard from './Components/Dashboard';  
import RequireAuth from './Components/auth/Require-auth';

const App = () => (
  <Router>  
   <div>
     <Navbar />
     <Route exact path="/" component={HomePage} />
     <Route exact path="/register" component={Register} />
     <Route exact path="/login" component={Login} />
     <Route exact path="/dashboard" component={RequireAuth(Dashboard)} />  
     <Route exact path="/not" component={NotFoundPage} /> 
  </div>
  </Router>
  
)

export default App;
