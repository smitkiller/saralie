import React,{Component} from 'react';
import {logoutUser,loadTypes} from '../actions';
import {Header} from '../components';
import { firebaseAuth } from '../constants/configAuth';

import {
  mconnect as connect,
} from '../library';


class HeaderCon extends Component{
	onLogout = () => {
    	this.props.onLogClick()
  	}


	componentDidMount(){
		this.props.onLoadType()

	}

	render(){
		const {txtTitle,authed,types} = this.props;
		//console.log('authed',authed)
		return(
			<div>
		{
			authed === null || !types
			?<div><h1>Loading...</h1></div>
			:
			<Header 
					txtTitle={txtTitle}
					types={types}
					authed={authed}
					onLogout={this.onLogout}
				/>
		}
			</div>
		)
	}
}

function mapStateToProps(state){
  return{
    types:state.types
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogClick: () =>{dispatch(logoutUser())},
    onLoadType:()=>{dispatch(loadTypes())}
  };
}


 HeaderCon = connect(mapStateToProps,mapDispatchToProps)(HeaderCon);


export default HeaderCon;