import React, { Component } from 'react'
import logo from '../img/logoCrewww.png';
import {
  mActionAssignment as ActionAssignment,
  mAttachmoney as Attachmoney,
  mCardText as CardText,
  mAvatar as Avatar,
  mCard as Card,
  mCardHeader as CardHeader,
} from '../library';

const liStyles = {
  marginLeft: 30,
};
const ulStyles = {
  marginLeft: 60,
};

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
    <CardText>
      <h1><ActionAssignment/>รับทำเว็บด้วย React + Firebase</h1>
      <p style={liStyles}>เว็บ responsive รองรับหน้าจอ smartphone + Hosting Free ของ Firebase</p>
      <p style={liStyles}><Attachmoney/>ราคา 1,500 บาท</p>
      <p style={ulStyles}>ดึงข้อมูลจาก Firebase Realtime database มาแสดงไม่เกิน 5 หน้า</p>
      <p style={liStyles}><Attachmoney/>ราคา 7,500 บาท</p>
      <p style={ulStyles}>จัดการข้อมูล (เพิ่ม,ลบ,แก้ไข) Firebase Realtime database จำนวนหน้าไม่เกิน5 หน้า ระบบหลังบ้าน(Back-End)</p>
    </CardText>
        </Card>
      </div>
			)
	}
}
export default Home;