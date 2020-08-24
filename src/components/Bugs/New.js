import React,{Component} from 'react';
import {
  mFlatButton as FlatButton,
  mTextField as TextField,
  mField as Field,
  mReactMDE as ReactMDE,
} from '../../library';


class NewBug extends Component{
	required=(value)=>(value == null ?<span style={{color:"red"}}>required</span> : undefined);

	render(){
		const {handleSubmit}=this.props;
		return(
			 <div style={{width:"80%", margin: 'auto'}}>
				<form onSubmit={handleSubmit} >
                <div>
                    <Field 
                      name="issue" 
                      component={TextField}
                      hintText="Issue"
                      floatingLabelText="Issue"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="detail" 
                      component={ReactMDE}
                      placeholder="Detail"
                      validate={this.required}
                       />
                </div>
                <div>
                    <Field 
                      name="solution" 
                      component={ReactMDE}
                      placeholder="Solution"
                      validate={this.required}
                       />
                </div>
          <FlatButton type='submit' label="Submit" />
        </form>
        </div>
		)
	}
}

export default NewBug;