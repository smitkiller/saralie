import React, { Component } from 'react'
import { loginUser,loadRecaptcha } from '../actions/login'
import {Login} from '../components'
import {
  mconnect as connect,
  mreduxForm as reduxForm,
} from '../library';


const FIELDS = ['email', 'password']


class LoginContainer extends Component{

  componentDidMount(){
    this.props.onRecaptcha();
}
  render () {
    const { handleSubmit } = this.props
  // console.log('recaptcha',this.props.login)
    return (
       <div>
          <Login
              login={this.props.login}
              handleSubmit={handleSubmit}
              />
        
    
       </div>
    );
  }
}
LoginContainer = reduxForm({
    form: 'login',
    enableReinitialize : true, 
    fields: FIELDS,
    validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' }, {}),
    onSubmit:(values,dispatch)=> dispatch(loginUser(values))
}
)(LoginContainer)
LoginContainer = connect(
  (state,ownProps) => ({ login: state.login,
    initialValues:{
      token:state.token,
    }
 }),{onRecaptcha:loadRecaptcha}
)(LoginContainer)

export default LoginContainer;
