import React,{Component} from 'react';
import {EditBug,Header} from '../../components';
import {connect} from 'react-redux';
import {loadBug} from '../../actions';

class EditBugCon extends Component{

	componentDidMount(){
		const { load, params: { id } } = this.props
    	load(id)
	}

	/*componentDidUpdate(prevProps) {
	  	const { load, params: { id } } = this.props
	  	// Typical usage (don't forget to compare props):
	  	if (this.props.bug !== prevProps.bug) {
	    	this.props.load(id);
	  	}	
	}*/
	render(){
		//console.log('bugggg===>',this.props.bug);
		return(
			<div>
				<Header txtTitle="Edit Bug" />
				{
					!this.props.bug || !this.props.params.id
					?<div><h1>Loading...</h1></div>
					:<EditBug 
						id={this.props.params.id}
						bug={this.props.bug}
					/>
				}

			</div>
		)
	}
}

EditBugCon=connect(
	(state)=>({bug:state.bug}),
	{load:loadBug}
	)(EditBugCon)
export default EditBugCon;