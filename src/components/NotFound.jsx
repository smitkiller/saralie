import React,{Component} from 'react';
import Header from './Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import logo from '../img/logoCrewww.png';

class NotFound extends Component{
	render(){
		return(
				<div>
				<Header txtTitle='Not Found'/>
				<Card style={{'width':'80%','margin':'0 auto',marginTop:20,marginBottom:20}}>
    <CardHeader
      title="Saralie"
      subtitle="สmit"
      avatar={logo}
    />

    <CardTitle className="txtCenter" title="Not Found" />
    <CardText className="txtCenter">
 		ไม่พบหน้าที่ระบุ     
    </CardText>
    <CardActions>
      {/*<FlatButton label="Action1" />
      <FlatButton label="Action2" />*/}
    </CardActions>
  </Card>
				</div>
			)
	}
}
export default NotFound;