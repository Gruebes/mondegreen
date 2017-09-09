import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize';
import './App.css';

import Welcome from './Components/Welcome';
import Signup from './Components/Signup';
import Signin from './Components/Signin';



const App = () =>
<Router>
  <div>
      <Navbar brand='Mondegreen' right>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/signup">Signup</Link></NavItem>
        <NavItem><Link to="/signin">Signin</Link></NavItem>        
      </Navbar>
      <Route exact path='/' component={Welcome} /> 
      <Route exact path='/signup' component={Signup} />        
      <Route exact path='/signin' component={Signin} />        
  </div>
</Router>;

export default App;
