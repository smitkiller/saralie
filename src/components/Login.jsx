import React, { PropTypes,Component } from 'react';
import { FlatButton, TextField } from 'material-ui';
import { Field } from 'redux-form';
import Recaptcha from 'react-recaptcha';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {firebaseAuth} from '../constants/configAuth';
import { browserHistory } from 'react-router';

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
  state = { isSignedIn: false }
 /* state={
    errorLogin:''
  }*/

  constructor(props) {
    super(props)

    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);

    this.state = {
      isVerified: false,
      errorLogin:'',
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

componentDidMount() {
  this.unregisterAuthObserver = firebaseAuth().onAuthStateChanged(
  user =>{this.setState({isSignedIn: !!user})
  console.log("user", user)
  });
}

// Make sure we un-register Firebase observers when the component unmounts.
componentWillUnmount() {
this.unregisterAuthObserver();
}
        // Configure FirebaseUI.
      uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google , Facebook , Etc as auth providers.
      signInOptions: [
      firebaseAuth.GoogleAuthProvider.PROVIDER_ID,
   // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //  firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
        callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
        }
      };

  render(){
    const {login,handleSubmit}=this.props
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
{
 /* this.state.isSignedIn
  ?<div>Login successfully</div>
  :<div><p>Please sign-in:</p>
   <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebaseAuth()}/>
   </div>*/
}
            
      

      </div>     
    </form>
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

