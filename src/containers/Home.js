import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {Home} from '../components';
import {loadTypes,loadBugs} from '../actions';

class HomesContainer extends Component {
	static propTypes={
		loadTypes:PropTypes.func,
		loadBugs:PropTypes.func
	}
	
	onLoad=()=>{
		this.props.loadB();
	}


	componentDidMount(){
		this.onLoad()
	}

	/*componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.types !== prevProps.types) {
	    	this.onLoad()
	  }
	}*/

  render() {
  //	var d = new Date()
  //  console.log('date-->',d.getDate())
    
    return (
		<div>
          <Home bugs={this.props.bugs}/>
    	</div>
    )
  }
}

HomesContainer=connect(
	(state)=>({types:state.types,bugs:state.bugs}),
	{loadB:loadBugs}
)(HomesContainer)

export default HomesContainer;
