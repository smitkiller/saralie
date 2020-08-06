import React, {Component} from 'react'
import { FlatButton } from 'material-ui';

export default class FileInputPic  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {file: '',imagePreviewUrl: '',bton:true};
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
          imagePreviewUrl: reader.result,
          bton:false,
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
    let {imagePreviewUrl,bton} = this.state;
    //console.log('state====>',this.props.url);
    //console.log("bton---->",this.state.bton)
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="style_center"><p style={{color:'red'}}>Please select an Image for Preview</p></div>);
    }
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
     <div>
     <label>{label}</label>
      <div className="style_center">
       <input
        type='file'
        id='fileUpload'
        accept='.jpg, .png, .jpeg'
        onChange={(e)=>this._handleImageChange(e)}
       />
   
      {
        !this.props.url
        ?<p></p>
        :<div>
          <h1>Old</h1>
          <img src={this.props.url}/>
          <h1>New</h1>
        </div>
      }
      </div>
    <div className="style_pic">
          {     
            $imagePreview         
          }
     
    </div>
    <div className="style_center">
              <FlatButton 
                backgroundColor="#FF7F50"
                hoverColor="#FF6347"
                type='submit' 
                label="Submit"
                disabled={bton}
              />
              </div>
     </div>
    )
  }
}