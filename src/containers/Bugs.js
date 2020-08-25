import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import {FixBugs} from '../components';
import {loadTypes,loadBugs} from '../actions';

class FixBugsContainer extends Component {
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
          <FixBugs bugs={this.props.bugs}/>
    	</div>
    )
  }
}

FixBugsContainer=connect(
	(state)=>({types:state.types,bugs:state.bugs}),
	{loadB:loadBugs}
)(FixBugsContainer)

export default FixBugsContainer;
