import React,{Component} from 'react';
import {ShowArticle,Header} from '../../components';
import {getArticleById} from '../../actions';
import {connect} from 'react-redux';

class ShowArticleCon extends Component{
	render(){
		return(
			<div>
			<Header
				txtTitle="Article Detail"
			/>
			{!this.props.article?<h1>Loading...</h1>
				:
				<ShowArticle
					article={this.props.article}
					types={this.props.types}
				/>
			}
			</div>
			)
	}
}
function mapStateToProps(state,ownProps){
	return{
		article:getArticleById(state, ownProps.params.id),
		types:state.types
	}
}

ShowArticleCon=connect(mapStateToProps)(ShowArticleCon)
export default ShowArticleCon;