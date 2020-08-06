import React,{ Component} from 'react';
import {Dialog,FlatButton} from 'material-ui';
//import ActionTouch from 'material-ui/svg-icons/action/touch-app'
import Clear from 'material-ui/svg-icons/content/clear'
//import FloatingActionButton from 'material-ui/FloatingActionButton';
import More from 'material-ui/svg-icons/notification/more';
import {getArticleByTitle} from '../../actions';
import {connect} from 'react-redux';
import ReactMarkdown from 'react-markdown';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

class DialogShow extends Component{
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
    //const {id}=this.props
    //console.log('props====>',this.props.data)
    const actions= [
      <FlatButton
      icon={<Clear/>}
      onTouchTap={this.handleClose}/>,
    ]

    return(
  <div>
      <FlatButton title="More" icon={<More/>} onTouchTap={this.handleOpen} />
      <Dialog
      title={this.props.data.title}
      actions={actions}
      modal={false}//คลิก นอก dialog ปิด
      onRequestClose={this.handleClose}//คลิก นอก dialog ปิด
      open={this.state.open}
      contentStyle={customContentStyle}
      autoScrollBodyContent={true}>  
      <ReactMarkdown
          source={this.props.data.content}
             // escapeHtml={!html}
        />  
      </Dialog>
      </div>
    )
  }
}

DialogShow=connect(
  (state,ownProps)=>(
  {data:getArticleByTitle(state,ownProps.id)}
  )
)(DialogShow)

export default DialogShow;