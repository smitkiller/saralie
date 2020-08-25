import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import {
        NotFound,
        App,
        Home
      } from '../components';
import { 
        Login,
        CheckUser,
        FixBugs,
        Types,
        NewType,
        ShowType,
        EditType,
        Article,
        NewArticle,
        ShowArticle,
        EditArticle,
        Main,
        Bugs,
        NewBug,
        EditBug,
        BugMore,
        More,
        Picture
         } from '../containers';


class Routes extends Component {
  render() {
  const {history} = this.props

    return (
      <div>
         <Router history={history}>       
          <Route path="/" exact component={CheckUser(Home,"Home","allUser")} /> 
         <Route path='main' >
            <IndexRoute component={CheckUser(Main,"Main","allUser")} />
             <Route path=':id'component={CheckUser(Main,"Main More","allUser")} /> 
             <Route path='more'>
                <Route path=':id' component={CheckUser(More,"More","allUser")} />
              </Route>           
        </Route> 
        <Route path='fixbugs' >
            <IndexRoute component={CheckUser(FixBugs,"Fix Bugs","allUser")} />
             <Route path=':id'component={CheckUser(BugMore,"Fix Bugs","allUser")} />           
        </Route>
        <Route path='app' component={CheckUser(App,"App","allUser")} />
        <Route path="picture" component={CheckUser(Picture,"Picture","admin")} />   
        <Route>             
            <Route path='types' >
                <IndexRoute component={CheckUser(Types,"Types","admin")} />
                 <Route path='new'component={CheckUser(NewType,"New Type","admin")} /> 
                 <Route path=':id'component={CheckUser(ShowType,"Type Display","admin")} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckUser(EditType,"Edit Type","admin")} />
                 </Route>           
            </Route>
            <Route path='articles' >
                <IndexRoute component={CheckUser(Article,"Article","admin")} />
                 <Route path='new'component={CheckUser(NewArticle,"New Article","admin")} /> 
                 <Route path=':id'component={CheckUser(ShowArticle,"Article Display","admin")} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckUser(EditArticle,"Edit Article","admin")} />
                 </Route>           
            </Route>  
            <Route path='bugs' >
                <IndexRoute component={CheckUser(Bugs,"Bugs","admin")} />
                 <Route path='new'component={CheckUser(NewBug,"New Bug","admin")} />   
                 <Route path='edit'>
                      <Route path=':id' component={CheckUser(EditBug,"Edit Bug","admin")} />
                 </Route>           
            </Route> 
          </Route>
          <Route path="l0gin" component={CheckUser(Login,"Login","login")} />
          <Route path='*' component={CheckUser(NotFound,"Not Found","allUser")} />     
          </Router>
      </div>
    )
  }
}



export default Routes;