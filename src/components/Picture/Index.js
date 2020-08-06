import React,{Component} from 'react';
import {Field} from 'redux-form';
import {FileInputPic} from '../../components';
import _ from 'lodash';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop:'20px'
  },
  gridList: {
    width: '23%',
    height: '30%',
    overflowY: 'auto',
  },
};


class Picture extends Component{
	render(){
		const {handleSubmit,pristine, submitting,pictures} = this.props;
		var u="https://firebasestorage.googleapis.com/v0/b/saralie.appspot.com/o/images%2F";
    	var l="?alt=media";
    	
		return(
			<div>
			<form onSubmit={handleSubmit} >
			<div>
                    <Field 
                      name="image" 
                      component={FileInputPic}
                      hintText="Image Upload"
                      floatingLabelText="Image Upload"
                       />
       
			</div>
			</form>

			<div style={styles.root}>
			{
				_.map(pictures,(data,key)=>(
						<div style={styles.gridList} key={key}>
							<p ><a href={`${u}${data.image}${l}`}>{data.image}</a></p>
						</div>
					)
				)
			}

			</div>
			</div>
		)
	}
}
export default Picture;