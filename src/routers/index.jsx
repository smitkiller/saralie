import React,{Component} from 'react';
import Routes from './route';



class RoutesIndex extends Component {
  render() {
  const {history} = this.props
    return (
      <div>
        <Routes
          history={history}
         />
       
      </div>
    )
  }
}

//function mapStateToProps(state){
//  return{
//    authed:state.login.authed
//  };
//}





 //RoutesIndex = connect(mapStateToProps)(RoutesIndex);

export default RoutesIndex;