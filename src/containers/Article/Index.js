import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadArticles } from '../../actions';
import {Article} from '../../components';

class ArticleContainer extends Component {
  static propTypes = {
    onLoadArticles: PropTypes.func.isRequired
  }

  static need = [
    loadArticles
  ]

  /*shouldComponentUpdate(nextProps) {
    return this.props.articles !== nextProps.articles;
  }*/

  onReloadArticles = () => {
    this.props.onLoadArticles()
  }

  componentDidMount() {
    this.onReloadArticles()
  }

 /* componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.articles !== prevProps.articles) {
        this.onReloadArticles();
      } 
  }*/


  render() {
    return (
      <div>
      <Article
        articles={this.props.articles}
        types={this.props.types}
        onReloadArticles={this.onReloadArticles}
         />
      </div>
    )
  }
}

export default connect(
  (state) => ({ articles: state.articles,types:state.types }),
  { onLoadArticles: loadArticles }
)(ArticleContainer)
