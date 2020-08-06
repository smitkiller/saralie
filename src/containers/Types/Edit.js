import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadType} from '../../actions';
import {EditType,Header} from '../../components';

class EditTypeCon extends Component{
	static propTypes = {
	    category: PropTypes.object,
	    description: PropTypes.object
	  }

	static need = [
    	(params) => (loadType(params.id))
 	 ]

	shouldComponentUpdate(nextProps) {
    	return this.props.tye !== nextProps.tye;
  	}

  	componentDidMount() {
    const { onLoad, params: { id } } = this.props

    onLoad(id)

  }
	

	render(){
	//console.log('fffff===>',this.props.tye)
		return(
			<div>
				<Header txtTitle="Edit Category" />
				{
					!this.props.tye
					?<div><h1>Loading...</h1></div>
					:<EditType
						id={this.props.params.id}
						tye={this.props.tye}
					/>
				}
			
			</div>
		)
	}
}

EditTypeCon=connect(
	(state)=>({tye:state.tye}),
	{onLoad:loadType}
)(EditTypeCon)

export default EditTypeCon;