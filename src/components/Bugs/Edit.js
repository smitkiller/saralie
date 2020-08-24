import React,{Component} from 'react';
import {updateBug} from '../../actions';
import {
  mFlatButton as FlatButton,
  mTextField as TextField,
  mField as Field,
  mreduxForm as reduxForm,
  mconnect as connect,
  mReactMDE as ReactMDE,
} from '../../library';


const FIELDS =['issue','detail','solution'];

class EditBug extends Component{
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
                       />
                </div>
                <div>
                    <Field 
                      name="detail" 
                      component={ReactMDE}
                      placeholder="Detail"
                       />
                </div>
                <div>
                    <Field 
                      name="solution" 
                      component={ReactMDE}
                      placeholder="Solution"
                       />
                </div>
          		<FlatButton type='submit' label="Submit" />
        	</form>
        </div>
		)
	}
}
 
 EditBug = reduxForm({
	form:'EditBug',
	enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
	fields:FIELDS,
	validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]:<span style={{color:"red"}}>Required</span> },{}),
	onSubmit:(values,dispatch)=>dispatch(updateBug(values))
})(EditBug)

EditBug = connect(
  (state, ownProps) => ({
    initialValues:{
      id:ownProps.id,
      issue:ownProps.bug.issue,
      detail:ownProps.bug.detail,
      solution:ownProps.bug.solution
    }
  })
)(EditBug)


 export default EditBug;