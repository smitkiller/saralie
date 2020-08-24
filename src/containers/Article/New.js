import React,{Component} from 'react';
import {NewArticle} from '../../components';
import {reduxForm} from 'redux-form';
import {createArticle} from '../../actions';
import {connect} from 'react-redux';

class NewArticleCon extends Component{
	render(){
		const {handleSubmit} = this.props;
		return(
				<div>
					<NewArticle
						handleSubmit={handleSubmit}
						types={this.props.types}
					/>
				</div>
			)
	}
}
NewArticleCon=connect(
  (state,ownProps)=>({types:state.types})
)(NewArticleCon)


NewArticleCon = reduxForm({
	form:'NewArticle',
	onSubmit:(values,dispatch)=>dispatch(createArticle(values))
})(NewArticleCon)


export default NewArticleCon;