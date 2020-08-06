import React,{Component} from 'react';
import {Field} from 'redux-form';
import { FlatButton } from 'material-ui';
import {
  TextField
} from 'redux-form-material-ui';

class NewType extends Component{

	required = value => (value == null ?'required' : undefined);

	render(){
		const {handleSubmit} = this.props;
		return(
			 <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
				<form onSubmit={handleSubmit} >
                <div>
                    <Field 
                      name="category" 
                      component={TextField}
                      hintText="Category"
                      floatingLabelText="Category"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="description" 
                      component={TextField}
                      hintText="Description"
                      floatingLabelText="Description"
                      validate={this.required}
                       />
                </div>
          <FlatButton type='submit' label="Submit" />
        </form>
        </div>
		)
	}
}

export default NewType;