import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    state = { activeItem: 'home' }
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
      render() {
        const { activeItem } = this.state
    
        return (
          <Segment inverted>
            <Menu inverted pointing secondary>
              <Menu.Item name='welcome' active={activeItem === 'welcome'} onClick={this.handleItemClick} ><Link to="/">welcome</Link></Menu.Item>
              <Menu.Item name='Signin' active={activeItem === 'Signin'} onClick={this.handleItemClick} ><Link to="/signin">signin</Link></Menu.Item>
              <Menu.Item name='Signup' active={activeItem === 'Signup'} onClick={this.handleItemClick} ><Link to="/signup">signup</Link></Menu.Item>
              </Menu>
          </Segment>
        )
      }
}

