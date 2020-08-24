import React,{Component} from 'react';
import {ListHome} from '../components';
import {getBugById} from '../actions';
import {connect} from 'react-redux';
import {loadBug} from '../actions';

class ListHomeCon extends Component{

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
					:<ListHome 
						bug={this.props.bug}
					/>
				}

			</div>
		)
	}
}


ListHomeCon=connect(
	(state)=>({bug:state.bug}),
	{load:loadBug}
	)(ListHomeCon)

export default ListHomeCon;