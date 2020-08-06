import React,{Component} from 'react';
import _ from 'lodash';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
//import { firebaseStorage } from '../constants/configAuth';
import {DialogShow} from '../components';
import { Link} from 'react-router';
import {FlatButton} from 'material-ui';
import More from 'material-ui/svg-icons/notification/more';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
    titleStyle: {
    color: 'black',
    margin:5,
  },
    img_:{
      'width':'100%',
      'height':'100%',
      'marginBottom':20
  }
};

class Main extends Component{
 /*   constructor () {
    super()
    this.state = {
      artImage: '',
    //  uk: ''
    }
    
  }*/
  
/*  getImage (img) {
    firebaseStorage.child(`images/${img}`).getDownloadURL().then((url) => {
     this.setState({artImage:url})
    }).catch((error) => {
      // Handle any errors
    })
  }*/

/*  componentDidMount() {

    this.getImage()
    console.log('image===>',this.props.article.image)
  }*/

	render(){
		const {articles}=this.props;
    var u="https://firebasestorage.googleapis.com/v0/b/saralie.appspot.com/o/images%2F";
    var l="?alt=media";
    
     //console.log('main===>>>',articles)
		return(

/* <div className="grid-container">
  <div className="grid-item">1</div>
  <div className="grid-item">2</div>
  <div className="grid-item">3</div>  
  <div className="grid-item">4</div>
  <div className="grid-item">5</div>
  <div className="grid-item">6</div>  
  <div className="grid-item">7</div>
  <div className="grid-item">8</div>
  <div className="grid-item">9</div>  
</div>*/
	<div style={styles.root}>
    
<GridList
      cellHeight='auto'
      cols={2}//จำนวนคอลัม
      style={styles.gridList}
    >
      <Subheader><h1>บทความ</h1></Subheader>
      {
      _.map(articles,(data,key)=>(
       <GridTile 
          key={key} 
          title={data.title}
          subtitle={<span>{data.content}</span>}
 //       actionIcon={<DialogShow id={data.title} />} old version
          actionIcon={
            <Link className="link_no_line" to={{ pathname: `/main/more/${data.title}` }}>
                <FlatButton title="More" icon={<More/>}  />
            </Link>
            }
          titleBackground="gray"
          titleStyle={styles.titleStyle}
        >
        <img style={styles.img_} src={`${u}${data.image}${l}`}/>
        </GridTile>
        )
      )
 
      }
    </GridList> 
  </div>
		)
	}
}

export default Main;