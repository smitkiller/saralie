import React,{Component} from 'react';
import {More} from '../components';
import {getArticleById,loadArticles} from '../actions';
import {connect} from 'react-redux';

class MoreCon extends Component{
  onReloadArticles = () => {
    this.props.onLoadArticles()
  }


  componentDidMount() {
    this.onReloadArticles();
    //this.onReloadReserve(this.props.params.id);
  }
	render(){
		 //console.log('props====>',this.props.params.id)
		return(
			<div>
				{
					!this.props.data || !this.props.params.id
					?<div><h1>Loading...</h1></div>
					:<More 
						data={this.props.data}
					/>
				}

			</div>
		)
	}
}

MoreCon=connect(
  (state,ownProps)=>(
  {data:getArticleById(state,ownProps.params.id)}),{ onLoadArticles: loadArticles}
)(MoreCon)

export default MoreCon;