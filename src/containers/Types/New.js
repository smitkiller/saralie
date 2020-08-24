import React,{Component} from 'react';
import {NewType} from '../../components';
import {reduxForm} from 'redux-form';
import {createType} from '../../actions';


class NewTypeCon extends Component{
	render(){
		const {handleSubmit} = this.props;
		return(
				<div>
					<NewType
						handleSubmit={handleSubmit}
					/>
				</div>
			)
	}
}
NewTypeCon = reduxForm({
	form:'NewType',
	onSubmit:(values,dispatch)=>dispatch(createType(values))
})(NewTypeCon)

export default NewTypeCon;