import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadTypes } from '../../actions';
import {Types,Header} from '../../components';

class TypesContainer extends Component {
  static propTypes = {
    onLoadTypes: PropTypes.func.isRequired
  }

  static need = [
    loadTypes
  ]


  onReloadTypes = () => {
    this.props.onLoadTypes()
  }

  componentDidMount() {
    this.onReloadTypes()
  }

  /*componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.types !== prevProps.types) {
        this.onReloadTypes()
    }
  }*/


  render() {
    return (
      <div>
      <Header txtTitle='Category'/>
      <Types
        types={this.props.types}
        onReloadTypes={this.onReloadTypes}
         />
      </div>
    )
  }
}

export default connect(
  (state) => ({ types: state.types }),
  { onLoadTypes: loadTypes }
)(TypesContainer)
