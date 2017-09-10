import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {  } from 'semantic-ui-react';
import './App.css';
import Navbar from './Navbar'
import Welcome from './Components/Welcome';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

const App = () =>
<Router>
  <div>
      <Navbar />
      <Route exact path='/' component={Welcome} /> 
      <Route exact path='/signup' component={Signup} />        
      <Route exact path='/signin' component={Signin} />  
  </div>
</Router>;

export default App;
