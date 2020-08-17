import React,{Component} from 'react';
import {Header,Main} from '../components';
import {connect} from 'react-redux';
import { loadArticles,getCategoryById } from '../actions';

class MainCon extends Component{
  
  onReloadArticles = () => {
    this.props.onLoadArticles()
  }


  componentDidMount() {
    this.onReloadArticles();
    //this.onReloadReserve(this.props.params.id);
  }

 /* componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.articles !== prevProps.articles) {
        this.onReloadArticles();
    }
  }*/

	render(){
    //console.log('zzzzzzz===>',this.props.articles)
		return(
			<div>
				<Header txtTitle="Main" />
        {
          !this.props.articles.length
          ?<div><h1>Loading...</h1></div>
          :<Main
            articles={this.props.articles}
           />
        }
			</div>
		)
	}
}
/*const mapStateToProps=(state)=>{
  return{
    reserves:state.reserves
  };
}
*/

MainCon=connect(
  (state,ownProps)=>(
    {articles:getCategoryById(state,ownProps.params.id)}),
  { onLoadArticles: loadArticles} 	
)(MainCon)

export default MainCon;