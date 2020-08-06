import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Card, CardTitle, CardText} from 'material-ui/Card';


class More extends Component{
	render(){
		const {content,title} = this.props.data;


		//console.log('bug===>',issue)
		return(
			<div style={{margin:20}}>
			<Card>
				<CardTitle title={title} subtitle="" />	 
			    <CardText>
			    	<ReactMarkdown
			          source={content}
			             // escapeHtml={!html}
			        /> 
			    </CardText>
		  	</Card>
		  </div>
		)
	}
}

export default More;