import React,{Component} from 'react';
import {BugMore} from '../components';
import {getBugById} from '../actions';
import {connect} from 'react-redux';
import {loadBug} from '../actions';

class BugMoreCon extends Component{

	shouldComponentUpdate(nextProps){
		return this.props.bug!==nextProps.bug;
	}
	componentDidMount(){
		const { load, params: { id } } = this.props
    	load(id)
	}
	render(){
		return(
			<div>
				{
					!this.props.bug || !this.props.params.id
					?<div><h1>Loading...</h1></div>
					:<BugMore 
						bug={this.props.bug}
					/>
				}

			</div>
		)
	}
}


BugMoreCon=connect(
	(state)=>({bug:state.bug}),
	{load:loadBug}
	)(BugMoreCon)

export default BugMoreCon;