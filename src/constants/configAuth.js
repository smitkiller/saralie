import firebase from 'firebase';
import {loginSuccess} from '../actions/login';
//require("firebase/functions");


var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId:process.env.APP_ID
  };
firebase.initializeApp(config);
export const firebaseStorage=firebase.storage().ref();
export const database= firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;


//var functions = firebase.functions();

export const loginWithGoogle= () =>{
	return dispatch=>{
	  var provider = new firebase.auth.GoogleAuthProvider();
	      provider.addScope('profile');
	      provider.addScope('email');
	      firebase.auth().signInWithPopup(provider).then(function(result) {
	     // This gives you a Google Access Token.
	     var token = result.credential.accessToken;
	     // The signed-in user info.
	     //var user = result.user;
	     dispatch(loginSuccess(result.user.email));
	    });
   }
}