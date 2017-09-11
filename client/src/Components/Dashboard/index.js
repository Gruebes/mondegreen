import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import logo from '../../logo.svg';
import './Dashboard.css'

import * as actions from '../../actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.props.protectedTest();
  }

  renderContent() {
    if(this.props.content) {
      return (
        <p>{this.props.content}</p>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(Dashboard);  