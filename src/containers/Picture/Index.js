import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { loadPictures,createPicture } from '../../actions';
import {Picture} from '../../components';
import {reduxForm} from 'redux-form';

class PicCon extends Component{

  static propTypes = {
    load: PropTypes.func.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pictures !== nextProps.pictures;
  }

  componentDidMount() {
    this.props.load();
  }

	render(){
    const {handleSubmit} = this.props;
		//console.log('pin--->',this.state.pic)
		return(
			<div>
			<Picture
				pictures={this.props.pictures}
        handleSubmit={handleSubmit}
			 />
			</div>
		)
	}
}

PicCon=connect(
  (state) => ({ pictures: state.pictures }),
  { load: loadPictures }
)(PicCon)

PicCon = reduxForm({
  form:'uploadPic',
  onSubmit:(values,dispatch)=>dispatch(createPicture(values))
})(PicCon)


export default PicCon;