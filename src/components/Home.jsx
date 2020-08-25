import React, { Component } from 'react'
import logo from '../img/logoCrewww.png';
import {
  mActionAssignment as ActionAssignment,
  mAttachmoney as Attachmoney,
  mListItem as ListItem,
  mAvatar as Avatar,
  mCard as Card,
  mCardHeader as CardHeader,
} from '../library';


class Home extends Component{
	render(){
		return(
      <div className="App">
         <Card style={{'width':'80%','margin':'0 auto',marginTop:20,marginBottom:20}}>
    <CardHeader
      title="smt"
      subtitle="Email:wsxmit@gmail.com"
      avatar={logo}
    />
     <ListItem
            //onTouchTap={this.handleOpen}
            leftAvatar={<Avatar icon={<ActionAssignment />}  />}
          //  rightIcon={<ActionInfo />}
            primaryText="รับทำเว็บด้วย React + Firebase"
            secondaryText={
              <p>เว็บ responsive รองรับหน้าจอ smartphone + Hosting Free ของ Firebase
              </p>

            }
          />

       <ListItem
            //onTouchTap={this.handleOpen}
            leftAvatar={<Avatar icon={<Attachmoney />}  />}
          //  rightIcon={<ActionInfo />}
            primaryText="ราคา 1,500 บาท"
            secondaryText={
              <p>ดึงข้อมูลจาก Firebase Realtime database มาแสดง
              ไม่เกิน 5 หน้า
              </p>
              }
          />

        <ListItem
            //onTouchTap={this.handleOpen}
            leftAvatar={<Avatar icon={<Attachmoney />}  />}
          //  rightIcon={<ActionInfo />}
            primaryText="ราคา 7,500 บาท"
            secondaryText={
              <p>จัดการข้อมูล (เพิ่ม,ลบ,แก้ไข) Firebase Realtime database จำนวนหน้าไม่เกิน
               5 หน้า ระบบหลังบ้าน(Back-End)
              </p>
              }
          />

        </Card>
      </div>
			)
	}
}
export default Home;