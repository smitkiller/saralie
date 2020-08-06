import React,{Component} from 'react';
import {connect} from 'react-redux';
import {loadArticle} from '../../actions';
import {EditArticle,Header} from '../../components';

class EditArticleCon extends Component{
	/*static propTypes = {
	    category: PropTypes.object,
	    description: PropTypes.object
	  }*/

	static need = [
    	(params) => (loadArticle(params.id))
 	 ]

  	componentDidMount() {
	    const { onLoad, params: { id } } = this.props
	    onLoad(id)
  	}

	/*componentDidUpdate(prevProps) {
	  	const { onLoad, params: { id } } = this.props
	  	// Typical usage (don't forget to compare props):
	  	if (this.props.article !== prevProps.article) {
	    	this.props.onLoad(id);
	  	}	
	}*/

	render(){
//console.log('ssss--->',this.props.article)
		return(
			<div>
				<Header txtTitle="Edit Article" />
				{
					!this.props.article || !this.props.types
					?<div><h1>Loading...</h1></div>
					:<EditArticle
						id={this.props.params.id}
						article={this.props.article}
						types={this.props.types}
					/>
				}

			</div>
		)
	}
}

EditArticleCon=connect(
	(state,ownProps)=>(
	{//article:getArticleById(state,ownProps.params.id),
		types:state.types,
		article:state.article
	}
  ),
	{onLoad:loadArticle}
)(EditArticleCon)

export default EditArticleCon;