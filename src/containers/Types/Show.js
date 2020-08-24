import React,{Component,PropTypes} from 'react';
import {ShowType} from '../../components';
import {getTypeById} from '../../actions';
import {connect} from 'react-redux';

class ShowTypeCon extends Component{
	static propTypes = {
    type: PropTypes.object.isRequired,
  }
	render(){
		return(
			<div>
			{!this.props.type?<h1>Loading...</h1>
				:
				<ShowType
					type={this.props.type}
				/>
			}
			</div>
			)
	}
}
function mapStateToProps(state,ownProps){
	return{
		type:getTypeById(state, ownProps.params.id)
	}
}
ShowTypeCon=connect(mapStateToProps)(ShowTypeCon)
export default ShowTypeCon;