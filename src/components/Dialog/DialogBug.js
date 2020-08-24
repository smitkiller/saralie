import React,{ Component} from 'react';
import {
  mFlatButton as FlatButton,
  mDialog as Dialog,
  mReactMarkdown as ReactMarkdown,
  mActionAssignment as ActionAssignment,
  mListItem as ListItem,
  mClear as Clear,
  mAvatar as Avatar,
} from '../../library';


const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class DialogBug extends Component{
  state={
    open:false
  }
  handleOpen= () =>{
    this.setState({
      open:true
    })
  }
  handleClose= () =>{
    this.setState({
      open:false
    })
  }

  render(){
    const {issue,detail,solution}=this.props
    //console.log('props====>',this.props.data)
    const actions= [
      <FlatButton
      icon={<Clear/>}
      onTouchTap={this.handleClose}/>,
    ]

    return(
  <div>        
      <ListItem
      onTouchTap={this.handleOpen}
        leftAvatar={<Avatar icon={<ActionAssignment />}  />}
      //  rightIcon={<ActionInfo />}
        primaryText={issue}
        secondaryText={detail}
      />
      <Dialog
      title={issue}
      actions={actions}
      modal={false}//คลิก นอก dialog ปิด
      onRequestClose={this.handleClose}//คลิก นอก dialog ปิด
      open={this.state.open}
      contentStyle={customContentStyle}
      autoScrollBodyContent={true}>  

      <ReactMarkdown
          source={detail}
             // escapeHtml={!html}
        />  

      <ReactMarkdown
          source={solution}
             // escapeHtml={!html}
      />  

      </Dialog>
      </div>
    )
  }
}


export default DialogBug;