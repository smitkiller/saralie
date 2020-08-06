import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Card, CardTitle, CardText} from 'material-ui/Card';


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