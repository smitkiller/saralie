import React from 'react'
import {Card, CardHeader} from 'material-ui/Card';
import logo from '../img/logoCrewww.png';
import _ from 'lodash';
import { Link} from 'react-router';
//import {DialogBug} from '../components'; old version
import {ListHome} from '../components';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {ListItem} from 'material-ui/List';


const Home = ({bugs}
) => (
  <div>
 <Card style={{'width':'80%','margin':'0 auto',marginTop:20,marginBottom:20}}>
    <CardHeader
      title="Saralie"
      subtitle="สmit"
      avatar={logo}
    />
{ 
    _.map(bugs,(data,key)=>(
      <div key={key}>
      <Link className="link_no_line" to={{ pathname: `/home/${key}` }}>
          <ListItem
            //onTouchTap={this.handleOpen}
            leftAvatar={<Avatar icon={<ActionAssignment />}  />}
          //  rightIcon={<ActionInfo />}
            primaryText={data.issue}
            secondaryText={data.detail}
          />
      </Link>
        {/*<DialogBug 
                  issue={data.issue}
                  detail={data.detail}
                  solution={data.solution}
                /> old version*/ }
      </div>
      )
    )
}

  </Card>
  </div>
)

export default Home;
