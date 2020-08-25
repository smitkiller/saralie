import React,{Component} from 'react';
import {
  mReactMarkdown as ReactMarkdown,
  mCardTitle as CardTitle,
  mCardText as CardText,
  mCard as Card,
} from '../library';


class ListHome extends Component{
	render(){
		const {issue,detail,solution} = this.props.bug;
		//console.log('bug===>',issue)
		return(
			<div style={{margin:20}}>
			<Card>
				<CardTitle title={issue} subtitle="" />	 
			    <CardText>
			    	<ReactMarkdown
			          source={detail}
			             // escapeHtml={!html}
			        /> 

			        <ReactMarkdown
			          source={solution}
			             // escapeHtml={!html}
			      	/>
			    </CardText>
		  	</Card>
		  </div>
		)
	}
}

export default ListHome;