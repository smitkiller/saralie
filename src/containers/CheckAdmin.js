import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {Header} from '../containers'
import { firebaseAuth } from '../constants/configAuth';


export default function(ComposedComponent,title) {
  class CheckAdmin extends Component {
     constructor(props){
      super(props);
      this.state = {
        authed:null
      }
     }
      componentDidMount () {
            this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
              if (!user) {
                  //this.setState({authed:false})
                  browserHistory.push('/l0gin');
                  return;
              }else{
                  this.setState({authed:true})
              }
            })  
      }


    render() {
     const {authed} = this.state;
        return (
          authed===null || authed === false
          ?<div><h1>Loading...</h1></div>
          :
          <div>
          <Header 
            txtTitle={title}
            authed={authed}
          />
          <ComposedComponent {...this.props} />
          </div>
      );

 
    }
  }

  return CheckAdmin;
}