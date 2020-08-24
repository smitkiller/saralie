import React,{Component} from 'react';
import {More} from '../components';
import {getArticleByTitle} from '../actions';
import {connect} from 'react-redux';

class MoreCon extends Component{

	render(){
		 //console.log('props====>',this.props.data)
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
  {data:getArticleByTitle(state,ownProps.params.id)}
  )
)(MoreCon)

export default MoreCon;