import React, { Component } from 'react'
import {Header} from '../containers';
import logo from '../img/logoCrewww.png';
import {
  mActionAssignment as ActionAssignment,
  mListItem as ListItem,
  mAvatar as Avatar,
  mCard as Card,
  mCardHeader as CardHeader,
} from '../library';


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