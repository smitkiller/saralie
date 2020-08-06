import React, { Component } from 'react'
import {Header} from '../components';
import {Card, CardHeader} from 'material-ui/Card';
import logo from '../img/logoCrewww.png';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';

class About extends Component{
	render(){
		return(
      <div className="App">
      <Header txtTitle="ติดต่อ" />
         <Card style={{'width':'80%','margin':'0 auto',marginTop:20,marginBottom:20}}>
    <CardHeader
      title="smt"
      subtitle="Email:...."
      avatar={logo}
    />
     <ListItem
            //onTouchTap={this.handleOpen}
            leftAvatar={<Avatar icon={<ActionAssignment />}  />}
          //  rightIcon={<ActionInfo />}
            primaryText="รายละเอียด"
            secondaryText="Test....."
          />
        </Card>
      </div>
			)
	}
}
export default About;