import { login,logout } from '../Auth/auth';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  RECAPTCHA_SUCCESS
} from '../constants/actionTypes'
//import { getInfoByUid } from '../Auth/auth';
import _ from 'lodash';


export function loginUser(values){
  return dispatch=>{
  const secret_key = process.env.SECRET_KEY;
  axios.post(`https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${values.token}`)
      .then(res => {
        //console.log('respone ',res.data)
            if(res.data.success === true){          
                      dispatch(loginRequest());
                      login(values.email,values.password)
                      .then((val)=>{
                        //getInfoByUid('users',val.email,val.uid)
                        //.then((data)=>{    
                        dispatch(loginSuccess(val.email))
                        browserHistory.push('/')
                      })
                      .catch((error)=>{
                          dispatch(loadRecaptcha())
                          dispatch(loginFailure())
                      })
            }else{
              console.log('token mistake')
            }

      })
  }
}


export function loadRecaptcha(){
  return dispatch=>{
    window.grecaptcha.ready(()=>{
    window.grecaptcha.execute('6LdZR8IZAAAAAG8ujaLUjMBum2m8jxNbNYucbhpr',{action: 'submit'}).then((token)=>{
        dispatch(reCaptchaSuccess(token))
    });
  });
  }
}

function reCaptchaSuccess(token){
   return{
    type:RECAPTCHA_SUCCESS,
    payload:token
  }
}
export function logoutUser(){
   return dispatch=>{
    dispatch(logoutRequest());
    logout()
    .then(()=>{
      dispatch(logoutSuccess())
      browserHistory.push('/l0gin')
      return;
    })
      .catch((error)=>{
        dispatch(logoutFailure());
      })
  }
}

function logoutRequest(){
 return{
    type:LOGOUT_USER_REQUEST
 }
}

function logoutSuccess(){
 return{
    type:LOGOUT_USER_SUCCESS
 }
}

function logoutFailure(){
 return{
    type:LOGOUT_USER_FAILURE
 }
}

function loginFailure(){
  return{
    type:LOGIN_USER_FAILURE
  }
}
export function loginSuccess(data){
 //var user=_.map(data,(val)=>val)
  return{
    type:LOGIN_USER_SUCCESS,
    user:data
  }
}
function loginRequest(){
  return{
    type:LOGIN_USER_REQUEST
  }
}
