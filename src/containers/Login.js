import React, { Component } from 'react'
import { loginUser } from '../actions/login'
import {loginWithGoogle} from '../constants/configAuth';
import Login from '../components/Login'
import Header from '../components/Header'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

const FIELDS = ['email', 'password']

class LoginContainer extends Component{
  
  render () {
    const { handleSubmit } = this.props
   
    return (
       <div>
      <Header txtTitle="Login"/>
      {
        !this.props.login
        ?<div><h1>Loading...</h1></div>
        :this.props.login.authed===true
            ?browserHistory.push('/')
            :<Login
                  login={this.props.login}
                  handleSubmit={handleSubmit}
                  onGoogle={this.props.onGoogle}
                  />
        }
    
       </div>
    );
  }
}
LoginContainer = reduxForm({
    form: 'login',
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(loginUser(values))
}
)(LoginContainer)
LoginContainer = connect(
  (state) => ({ login: state.login }),{onGoogle:loginWithGoogle}
)(LoginContainer)

export default LoginContainer;
