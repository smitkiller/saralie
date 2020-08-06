import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
//import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router';
import logo from '../img/logo2.png';
import {logoutUser} from '../actions';
//import { firebaseAuth } from '../constants/configAuth';
import { connect } from 'react-redux';
//import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { browserHistory } from 'react-router';
import '../styles/show_txt.css';
//import BackIcon from 'material-ui/svg-icons/content/backspace';
//import FlatButton from 'material-ui/FlatButton';
import _ from 'lodash';

class Header extends Component {

  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }

  handleToggle = () =>this.setState({
    open:!this.state.open
  })

  handleClose=()=>this.setState({
    open:false
  })

  onLogout = () => {
    this.props.onLogClick()
  }

  goBack=()=>{
    browserHistory.goBack();
  }

  render() {
    const { txtTitle } = this.props

    return (
      <div>  
      <header className="header" >
          <AppBar
          title={txtTitle}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<img src={logo} alt="Logo"/>}/>
          {/*iconElementRight =*/} {/*<img src='header-logo.png' alt="Logo" />*/}
          <div>
          {/*<FlatButton onClick={this.goBack}  icon={<BackIcon/>} />*/}
          <Drawer
          docked={false}
          width={250}
          openSecondary={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >

          <AppBar title={txtTitle} onLeftIconButtonTouchTap={this.handleToggle}/>
          <Link className="link_no_line" to={'/'}>
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          </Link>
        {
          _.map(this.props.types,(data,key)=>(
            <Link key={key} className="link_no_line" to={{ pathname: `/main/${key}` }}>
            <MenuItem onTouchTap={this.handleClose}>{data.category}</MenuItem>
            </Link>
            )
          )
        }
          <Link className="link_no_line" to={'/about'}>
          <MenuItem onTouchTap={this.handleClose}>About</MenuItem>
          </Link>

         {this.props.authed
          ?<div>
          <Link className="link_no_line" to={'/types'}>
          <MenuItem onTouchTap={this.handleClose}>Category</MenuItem>
          </Link>
          <Link className="link_no_line" to={'/articles'}>
          <MenuItem onTouchTap={this.handleClose} >Article</MenuItem>
          </Link>
           <Link className="link_no_line" to={'/bugs'}>
          <MenuItem onTouchTap={this.handleClose} >Bugs</MenuItem>
          </Link>
          <Link className="link_no_line" to={'/picture'}>
          <MenuItem onTouchTap={this.handleClose}>Picture</MenuItem>
          </Link>
          <Link className="link_no_line" onClick={this.onLogout}>
          <MenuItem onTouchTap={this.handleClose} >Logout</MenuItem>
          </Link>
          </div>
        : <div></div>
        /*<Link className="link_no_line" to={'/l0gin'}>
        <MenuItem onTouchTap={this.handleClose} >Login</MenuItem>
        </Link>*/
      }
          </Drawer>
          </div>
      </header>
      </div>
   )    
 }
}

function mapStateToProps(state){
  return{
    authed:state.login.authed,
    types:state.types
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogClick: () => {
      dispatch(logoutUser())
    }
  };
}


 Header = connect(mapStateToProps,mapDispatchToProps)(Header);


export default Header;
