import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize';
import Welcome from './Components/Welcome'
import './App.css';

const App = () =>
<Router>
  <div>
      <Navbar brand='Mondegreen' right>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/">Profile</Link></NavItem>
      </Navbar>
      <Route exact path='/' component={Welcome} />        
  </div>
</Router>;

export default App;
