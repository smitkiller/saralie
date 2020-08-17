import React, { PropTypes,Component } from 'react';
import { FlatButton, TextField } from 'material-ui';
import { Field } from 'redux-form';
import Recaptcha from 'react-recaptcha';


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



class Login extends Component{

  constructor(props) {
    super(props)

    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false,
      errorLogin:'',
      currentUser:null
    }
  }

 errorText=()=>{
    this.setState({
      errorLogin:this.props.login.statusText
    })
 }

  recaptchaLoaded() {
    console.log('capcha successfully loaded');
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render(){
    const {login,handleSubmit,onGoogle}=this.props
    //console.log('mmmm===>',this.state.userSignedIn)
    return(
        <div className="style_login">{this.state.errorLogin}

    <form
      onSubmit={handleSubmit}
      className='form'>
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
       <Recaptcha
            sitekey="6LceRLMUAAAAAPQHwqQoxyQ142GbZVr_3hRPPOLw"
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
          {
            !this.state.isVerified
            ?<div></div>
            :<div></div>
          }

            <FlatButton type='submit' label="Submit" onClick={this.errorText}/>
              
      </div>     
    </form>
    <div>  
   {/* <FlatButton type='button' label="LoginWithGoogle" onClick={onGoogle}/>
 */}
    </div>
    </div>
    )
  }
}
Login.propTypes = {
  fields: PropTypes.array,
  email: PropTypes.object,
  password: PropTypes.object,
  handleSubmit: PropTypes.func
}

export default Login;