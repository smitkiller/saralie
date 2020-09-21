import React, {Component} from 'react'

export default class FieldFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleImageChange(e) {
    var file_type;
    e.preventDefault();
    e?file_type=e.target.files[0].type:file_type=''
    if(file_type==='image/png' || file_type==='image/jpg' || file_type==='image/jpeg')
    {
      //console.log('true')
      let reader = new FileReader();
      let file = e.target.files[0];
      const { input: { onChange } } = this.props
      onChange(e.target.files[0])

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)
    }else{
      //console.log('false')
      this.setState({
          file: '',
          imagePreviewUrl:''
        });
      document.getElementById("fileUpload").value = "";
      e.stopPropagation();
    }
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    let {imagePreviewUrl} = this.state;
    //console.log('state====>',this.props.url);
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="err_role">Please select an Image for Preview</div>);
    }
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div><label>{label}</label>
     <div>
       <input
        type='file'
        id='fileUpload'
        accept='.jpg, .png, .jpeg'
        onChange={(e)=>this._handleImageChange(e)}
       />
     </div>
      <div className="imgPreview">
      {
        !this.props.url
        ?<p></p>
        :<div>
          <h1>Old</h1>
          <img src={this.props.url} className="imgPreview"/>
          <h1>New</h1>
        </div>
      }
      
          {
            $imagePreview          
          }
        </div>
     </div>
    )
  }
}