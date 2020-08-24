import React,{Component} from 'react';
import {NewBug} from '../../components';
import {reduxForm} from 'redux-form';
import {createBug} from '../../actions';

class NewBugCon extends Component{
	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
				<NewBug 
					handleSubmit={handleSubmit}
				/>
			</div>
		)
	}
}

NewBugCon = reduxForm({
	form:'NewBug',
	onSubmit:(values,dispatch)=>dispatch(createBug(values))
})(NewBugCon)


export default NewBugCon;