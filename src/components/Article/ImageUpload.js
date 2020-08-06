/*Test File*/
import React, { Component } from 'react'
import {Field} from 'redux-form';
import { FlatButton,TextField } from 'material-ui';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

 required = value => (value == null ?'required' : undefined);

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
{/*          <Field 
                      name="mm" 
                      component={TextField}
                      hintText="mm"
                      floatingLabelText="mm"
                       />*/}
          {/* <input 
            name="imgUp"
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
