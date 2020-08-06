import React,{Component} from 'react';

class ShowType extends Component{
	render(){
		const type=this.props.type
		return(
			<div className="middle">
			<article>
				<div>
					<p>{type.category}</p>
					<p>{type.description}</p>
				</div>
			</article>
			</div>
		)
	}
}
export default ShowType;