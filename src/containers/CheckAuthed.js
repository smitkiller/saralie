import React, { Component } from 'react';
import { browserHistory } from 'react-router';
//import { connect } from 'react-redux';
import { firebaseAuth } from '../constants/configAuth';


export default function(ComposedComponent) {
  class CheckAuthed extends Component {
     
      componentDidMount () {
            this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
              if (!user) {
                  browserHistory.push('/');
              }
            })  
      }


    render() {
     
   
        return (
        <ComposedComponent {...this.props} />
      );

 
    }
  }

  return CheckAuthed;
}