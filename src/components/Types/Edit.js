import React,{Component,PropTypes} from 'react';
import {updateType} from '../../actions';
import {
  mFlatButton as FlatButton,
  mTextField as TextField,
  mField as Field,
  mreduxForm as reduxForm,
  mconnect as connect,
} from '../../library';


const FIELDS=['category','description']

class EditType extends Component{

	render(){
		const {handleSubmit}=this.props;
		return(
			 <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
				<form onSubmit={handleSubmit} >
                <div>
                    <Field 
                      name="category" 
                      component={TextField}
                      hintText="Category"
                      floatingLabelText="Category"
                       />
                </div>
                <div>
                    <Field 
                      name="description" 
                      component={TextField}
                      hintText="Description"
                      floatingLabelText="Description"               
                       />
                </div>
          <FlatButton type='submit' label="Submit" />
        </form>
        </div>
		)
	}
}

EditType.propTypes={
  category:PropTypes.object,
  description:PropTypes.object
}

EditType = reduxForm({
	form:'EditType',
	enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
	fields:FIELDS,
	validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' },{}),
	onSubmit:(values,dispatch)=>dispatch(updateType(values))
})(EditType)

EditType = connect(
  (state, ownProps) => ({
    initialValues:{
      id:ownProps.id,
      category:ownProps.tye.category,
      description:ownProps.tye.description
    }
  })
)(EditType)



export default EditType;