import React,{Component} from 'react';
import ReactMarkdown from 'react-markdown';
// ทดลอง ใช้ react-markdown แสดงข้อมูลที่เพิ่มผ่าน react-forms-markdown-editor

class ShowArticle extends Component{



	render(){
		const {article,types}=this.props
    //console.log('mmmmm===>',this.state.artImage)
		return(
			<div className="show">
			<article>
				<div>
					<p>{article.title}</p>
					<p>{types[article.category].category}</p>
					<p>
          
             <ReactMarkdown
              source={article.content}
             // escapeHtml={!html}
             />
          </p>
				</div>
			</article>
			</div>
		)
	}
}
export default ShowArticle;