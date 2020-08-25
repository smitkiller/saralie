import React, { Component } from 'react';
import {Header} from '../containers'
import { firebaseAuth } from '../constants/configAuth';
import { browserHistory } from 'react-router';

export default function(ComposedComponent,title,type) {
  class CheckUser extends Component {
    constructor(props){
      super(props);
      this.state = {
        authed:null
      }
     }
      componentDidMount () {
            this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
              if (!user) {
                if(type==="allUser" || type==="login"){
                  this.setState({authed:false})
                }else if(type==="admin"){
                  browserHistory.push('/l0gin');
                  return;
                }
                  
              }else{
                if(type==="allUser" || type === "admin"){
                  this.setState({authed:true})
                }else if(type==="login"){
                  browserHistory.push('/');
                  return;
                }

              }
            })  
      }

    render() {
      const {authed} = this.state;
        return (
           authed===null 
          ?<div></div>
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

  return CheckUser;
}