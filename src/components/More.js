import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Card, CardTitle, CardText} from 'material-ui/Card';

function Image(props) {
  return <img {...props} style={{maxWidth: '100%'}} />
}
function TextC(props) {
  return <CardText {...props} style={{color: 'red'}} />
}

const renderers = {
    image: Image,
    //text:TextC
  };

class More extends Component{
	render(){
		const {content,title} = this.props.data;

		//console.log('bug===>',this.props.data)
		return(
			<div style={{margin:20}}>
			<Card>
				<CardTitle title={title} subtitle="" />	 
			    <CardText>
			    	<div className='markdown-body'>
			    	<ReactMarkdown
			          source={content}
			          renderers={renderers}
			             // escapeHtml={!html}        
			        /> 
			        </div>
			    </CardText>
		  	</Card>
		  </div>
		)
	}
}

export default More;