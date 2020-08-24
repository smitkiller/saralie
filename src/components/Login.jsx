import React, {Component } from 'react';
import {
  mField as Field,
  mTextField as TextField,
  mFlatButton as FlatButton,
} from '../library';


const renderTextField = props => (
  <div>
    <TextField
      hintText={props.label}
      floatingLabelText={props.label}
      type={props.type}
      errorText={props.meta.touched && props.meta.error}
      {...props.input} />
  </div>
)

const renderTextInput = props => (
  <div>
    <input
      type={props.type}
      {...props.input} />
  </div>
)


class Login extends Component{

  render(){
    const {login,handleSubmit}=this.props
    return(
   <div className="style_login">
    <p>{login.statusText}</p>
    <form onSubmit={handleSubmit} className="g-recaptcha">
      <div>
        <Field   
         name="email"
         type="text"
         label="E-mail"
         component={renderTextField} />
      </div>
      <div>
      <Field
       name="password"
       type="password"
       label="Password"
       component={renderTextField} />
      </div>
      <div>
          <Field name="token" type="hidden"  component={renderTextInput} />
      </div>
      <div>
            <FlatButton type='submit' label="Submit" />
              
      </div>     
    </form>
    <div>  
    </div>
    </div>
    )
  }
}

export default Login;