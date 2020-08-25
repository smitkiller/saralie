import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import {
        NotFound,
        App,
        Home
      } from '../components';
import { 
        Login,
        CheckAdmin,
        CheckUser,
        CheckLoginPage,
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
        ListHome,
        More,
        Picture
         } from '../containers';


class Routes extends Component {
  render() {
  const {history} = this.props

    return (
      <div>
         <Router history={history}>       
          <Route path="/" exact component={CheckUser(Home,"Home")} /> 
         <Route path='main' >
            <IndexRoute component={CheckUser(Main,"Main")} />
             <Route path=':id'component={CheckUser(Main,"Main More")} /> 
             <Route path='more'>
                <Route path=':id' component={CheckUser(More,"More")} />
              </Route>           
        </Route> 
        <Route path='home' >
            <IndexRoute component={CheckUser(Home,"Home")} />
             <Route path=':id'component={CheckUser(ListHome,"Bug More")} />           
        </Route>
        <Route path='app' component={CheckUser(App,"App")} />
        <Route path='fixbugs' component={CheckUser(FixBugs,"Fix Bugs")} />
        <Route path="picture" component={CheckAdmin(Picture,"Picture")} />   
        <Route>             
            <Route path='types' >
                <IndexRoute component={CheckAdmin(Types,"Types")} />
                 <Route path='new'component={CheckAdmin(NewType,"New Type")} /> 
                 <Route path=':id'component={CheckAdmin(ShowType,"Type Display")} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckAdmin(EditType,"Edit Type")} />
                 </Route>           
            </Route>
            <Route path='articles' >
                <IndexRoute component={CheckAdmin(Article,"Article")} />
                 <Route path='new'component={CheckAdmin(NewArticle,"New Article")} /> 
                 <Route path=':id'component={CheckAdmin(ShowArticle,"Article Display")} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckAdmin(EditArticle,"Edit Article")} />
                 </Route>           
            </Route>  
            <Route path='bugs' >
                <IndexRoute component={CheckAdmin(Bugs,"Bugs")} />
                 <Route path='new'component={CheckAdmin(NewBug,"New Bug")} />   
                 <Route path='edit'>
                      <Route path=':id' component={CheckAdmin(EditBug,"Edit Bug")} />
                 </Route>           
            </Route> 
          </Route>
          <Route path="l0gin" component={CheckLoginPage(Login,"Login")} />
          <Route path='*' component={CheckUser(NotFound,"Not Found")} />     
          </Router>
      </div>
    )
  }
}



export default Routes;