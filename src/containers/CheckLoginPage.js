import React,{Component} from 'react';
import { firebaseAuth } from '../constants/configAuth';
import {browserHistory} from 'react-router';
import {Header} from '../containers'

export default function(Ccomponent,title){
	class CheckLoginPage extends Component{
		constructor(props){
			super(props);
			this.state = {
				authed:null
			}
		}
		componentDidMount(){
			firebaseAuth().onAuthStateChanged((user)=>{
				if (!user) {
                  this.setState({authed:false})                
              	}else{
                  //this.setState({authed:true})
                  browserHistory.push('/');
                  return;
              	}
			})
		}

		render(){
			const {authed} = this.state;
			return(
				authed === null || authed === true
				?<div>Loading .....</div>
				:
				<div>
				<Header 
					txtTitle={title}
					authed={authed}
					/>
				<Ccomponent {...this.props} />
				</div>				
				)
		}
	}
	return CheckLoginPage;
}