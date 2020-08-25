import React, { Component } from 'react';
import logo from '../img/logo2.png';
import '../styles/show_txt.css';

import {
  mMenuItem as MenuItem,
  mbrowserHistory as browserHistory,
  mLink as Link,
  mAppBar as AppBar,
  mDrawer as Drawer,
  m_ as _
} from '../library';


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


  goBack=()=>{
    browserHistory.goBack();
  }

  render() {
    const { txtTitle,authed,types,onLogout} = this.props

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
          _.map(types,(data,key)=>(
            <Link key={key} className="link_no_line" to={{ pathname: `/main/${key}` }}>
            <MenuItem onTouchTap={this.handleClose}>{data.category}</MenuItem>
            </Link>
            )
          )
        }
          <Link className="link_no_line" to={'/fixbugs'}>
          <MenuItem onTouchTap={this.handleClose}>Fix Bugs</MenuItem>
          </Link>

         {authed
          ?<div>
          <Link className="link_no_line" to={'/types'}>
          <MenuItem onTouchTap={this.handleClose}>Category</MenuItem>
          </Link>
          <Link className="link_no_line" to={'/articles'}>
          <MenuItem onTouchTap={this.handleClose} >Article</MenuItem>
          </Link>
           <Link className="link_no_line" to={'/bugs'}>
          <MenuItem onTouchTap={this.handleClose} >Bugs Fix</MenuItem>
          </Link>
          <Link className="link_no_line" to={'/picture'}>
          <MenuItem onTouchTap={this.handleClose}>Picture</MenuItem>
          </Link>
          <Link className="link_no_line" onClick={onLogout}>
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



export default Header;
