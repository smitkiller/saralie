import React,{Component} from 'react';
import {updateArticle,getRandom} from '../../actions';
import {FieldFileInput} from '../../components';
import { firebaseStorage } from '../../constants/configAuth';
import {
  mFlatButton as FlatButton,
  mSelectField as SelectField,
  mTextField as TextField,
  mField as Field,
  mreduxForm as reduxForm,
  mconnect as connect,
  mMenuItem as MenuItem,
  mReactMDE as ReactMDE,
  m_ as _
} from '../../library';


const FIELDS=['title','category','status','content']

class EditArticle extends Component{
    constructor () {
        super()
        this.state = {
          artImage: '',
        //  uk: ''
        }
        
      }
  
  getImage (image) {
    firebaseStorage.child(`images/${image}`).getDownloadURL().then((url) => {
     this.setState({artImage:url})
    }).catch((error) => {
      // Handle any errors
    })
  }

  componentDidMount() {
    this.getImage(this.props.article.image)//2=image
    //console.log('image===>',this.props.article)
  }
	render(){
		const {handleSubmit,article,types}=this.props;
    var u="https://firebasestorage.googleapis.com/v0/b/saralie.appspot.com/o/images%2F";
    var l="?alt=media";
    //console.log('------<',article)
		return(
			 <div className="editView">
				<form onSubmit={handleSubmit} >
              <div>
                    <Field 
                      name="title" 
                      component={TextField}
                      hintText="Title"
                      floatingLabelText="Title"
                       />
                </div>
                <div className="txtFile">
                    <Field 
                      name="image" 
                      component={FieldFileInput}
                      url={
                        !this.state.artImage
                        ?`${u}${article.image}${l}`
                        :this.state.artImage
                      }
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
                       >
                    <MenuItem value="0" primaryText="ไม่เผยแพร่" />
                    <MenuItem value="1" primaryText="เผยแพร่" />
                  </Field>

                </div>
                <div  className="txtFile">
                  <Field
                    name="category"
                    component={SelectField}
                    hintText="Category"
                    floatingLabelText="Category"
                  >
                      {
                        _.map(types,(data,key)=>(
                             <MenuItem key={key} value={key} primaryText={data.category} />
                          )
                        )
                      }         
                  </Field>
                </div>
                <div  className="txtFile">
                   <Field
                    name="content"
                    component={ReactMDE}
                    hintText="Content"
                    floatingLabelText="Content"
                  />
                </div>
          <FlatButton type='submit' label="Submit"  />
        </form>
        </div>
		)
	}
}

EditArticle = reduxForm({
	form:'EditArticle',
	enableReinitialize : true,  // สำคัญ ทำให้ ownProps found
	fields:FIELDS,
	validate: (values, props) =>
      FIELDS.reduce((errors, field) =>
        values[field] ? errors : { ...errors, [field]: 'Required' },{}),
	onSubmit:(values,dispatch)=>dispatch(updateArticle(values))
})(EditArticle)

EditArticle = connect(
  (state, ownProps) => ({
    initialValues:{
      id:ownProps.id,
      title:ownProps.article.title,//title
      status:ownProps.article.status,//status
      category:ownProps.article.category,//category
      content:ownProps.article.content,//content
    }
  })
)(EditArticle)


export default EditArticle;