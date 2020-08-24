import React, { Component } from 'react'
import { createPage } from '../actions/page'
import {
  mField as Field,
  mTextField as TextField,
} from '../library';


/*const renderTextField = props => (
  <div>
  <TextField hintText={props.label}
    floatingLabelText={props.label}
    type={props.type}
    errorText={props.meta.touched && props.meta.error}
    {...props.input}/></div>
)*/

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }


  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    createPage(this.state)
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
                <Field
                    name="file"
                    hintText="File Upload"
                    floatingLabelText="File Upload"
                    component={TextField}
                    type="file"
                    validate={this.required}
                  />
{/*          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />*/}
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
