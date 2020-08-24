import React,{Component} from 'react';
import {FieldFileInput} from '../../components';
import {
  mFlatButton as FlatButton,
  mSelectField as SelectField,
  mTextField as TextField,
  mField as Field,
  mMenuItem as MenuItem,
  mReactMDE as ReactMDE,
  m_ as _
} from '../../library';



class NewArticle extends Component{

	required = value => (value == null ?'required' : undefined);

	render(){
		const {handleSubmit,types,pristine, submitting} = this.props;
		return(
			 <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
				<form onSubmit={handleSubmit} >
                <div>
                    <Field 
                      name="title" 
                      component={TextField}
                      hintText="Title"
                      floatingLabelText="Title"
                      validate={this.required}
                       />
                </div>
                <div className="txtFile">
                    <Field 
                      name="image" 
                      component={FieldFileInput}
                      hintText="Image Upload"
                      floatingLabelText="Image Upload"
                       />
               </div>
               <div>
                    <Field 
                      name="status" 
                      component={SelectField}
                      hintText="Status"
                      floatingLabelText="Status"
                      validate={this.required}
                       >
                    <MenuItem value="0" primaryText="ไม่เผยแพร่" />
                    <MenuItem value="1" primaryText="เผยแพร่" />
                  </Field>

                </div>
                <div className="txtFile">
                  <Field
                    name="category"
                    component={SelectField}
                    hintText="Category"
                    floatingLabelText="Category"
                    validate={this.required}
                    //validate={[required,numValidate]}
                  >
                      {
                        _.map(types,(data,key)=>(
                             <MenuItem key={key} value={key} primaryText={data.category} />
                          )
                        )
                      }         
                  </Field>
                </div>
                <div className="txtFile">
                  <Field
                    name="content"
                    component={ReactMDE}
                    hintText="Content"
                    floatingLabelText="Content"
                    validate={this.required}
                  />
                </div>
                <div className="txtFile">
          <FlatButton type='submit' label="Submit" disabled={pristine || submitting} />
          </div>
        </form>
        </div>
		)
	}
}


export default NewArticle;