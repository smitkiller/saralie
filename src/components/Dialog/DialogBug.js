import React,{ Component} from 'react';
import {Dialog,FlatButton} from 'material-ui';
//import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import Clear from 'material-ui/svg-icons/content/clear'
//import FloatingActionButton from 'material-ui/FloatingActionButton';
import ReactMarkdown from 'react-markdown';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

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