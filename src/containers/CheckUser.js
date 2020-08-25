import React, { Component } from 'react';
import {Header} from '../containers'
import { firebaseAuth } from '../constants/configAuth';


export default function(ComposedComponent,title) {
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
                  this.setState({authed:false})
              }else{
                  this.setState({authed:true})
              }
            })  
      }

    render() {
      const {authed} = this.state;
        return (
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