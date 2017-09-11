import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { reduxForm } from 'redux-form';  
// import { Link } from 'react-router';  
import { logoutUser } from '../../../actions';

const form = reduxForm({  
    form: 'login'
  });
  

class Logout extends Component {  
  handleFormSubmit() {    
    this.props.logoutUser();
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
          {this.renderAlert()}      
          <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit.bind(this)}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { logoutUser })(form(Logout)); 
