import React,{Component,PropTypes} from 'react';
import {Bugs,Header} from '../../components';
import {loadBugs} from '../../actions';
import {connect} from 'react-redux';

class BugsCon extends Component{
	static propTypes={
		load:PropTypes.func
	}

	componentDidMount(){
		this.props.load();
	}

	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.bugs !== prevProps.bugs) {
	    	this.props.load();
	  }
	}

	render(){
		return(
			<div>
			  <Header txtTitle="Solution Bugs"/>
			  <Bugs 
			  	bugs={this.props.bugs}
			  />
			</div>
		)
	}
}

BugsCon=connect(
		(state)=>({bugs:state.bugs}),
		{load:loadBugs}
	)(BugsCon)
export default BugsCon;