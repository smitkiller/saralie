import React from 'react'
import logo from '../img/logoCrewww.png';
import {ListHome} from '../components';
import {
  mActionAssignment as ActionAssignment,
  mListItem as ListItem,
  mAvatar as Avatar,
  mLink as Link,
  mCardHeader as CardHeader,
  mCard as Card,
  m_ as _
} from '../library';



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
