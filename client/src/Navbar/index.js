import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { logoutUser } from '../actions';

console.log(logoutUser)

export default class Navbar extends Component {
    state = { activeItem: 'home' }
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })

      handleLogout = () => {
        logoutUser()
      }
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} ><Link to="/">home</Link></Menu.Item>
              <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} ><Link to="/dashboard">dashboard</Link></Menu.Item>              
              <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} ><Link to="/register">register</Link></Menu.Item>
              <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} ><Link to="/login">login</Link></Menu.Item>
              <Menu.Item name='logout' active={activeItem === 'login'} onClick={this.handleLogout.bind(this)} ></Menu.Item>
              
              </Menu>
          </Segment>
        )
      }
}

