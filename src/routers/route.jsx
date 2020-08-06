import React,{Component} from 'react';
import { Router,Route,IndexRoute } from 'react-router';
import {
        NotFound,
        About,
        App
      } from '../components';
import { 
        Login,
        CheckAuthed,
        Home,
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
          <Route path="/" exact component={Home} /> 
         <Route path='main' >
            <IndexRoute component={Main} />
             <Route path=':id'component={Main} /> 
             <Route path='more'>
                <Route path=':id' component={More} />
              </Route>           
        </Route> 
        <Route path='home' >
            <IndexRoute component={Home} />
             <Route path=':id'component={ListHome} />           
        </Route>
        <Route path='app' component={App} />
        <Route path='about' component={About} />
        <Route path="picture" component={CheckAuthed(Picture)} />   
        <Route>             
            <Route path='types' >
                <IndexRoute component={CheckAuthed(Types)} />
                 <Route path='new'component={CheckAuthed(NewType)} /> 
                 <Route path=':id'component={CheckAuthed(ShowType)} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckAuthed(EditType)} />
                 </Route>           
            </Route>
            <Route path='articles' >
                <IndexRoute component={CheckAuthed(Article)} />
                 <Route path='new'component={CheckAuthed(NewArticle)} /> 
                 <Route path=':id'component={CheckAuthed(ShowArticle)} /> 
                 <Route path='edit'>
                      <Route path=':id' component={CheckAuthed(EditArticle)} />
                 </Route>           
            </Route>  
            <Route path='bugs' >
                <IndexRoute component={CheckAuthed(Bugs)} />
                 <Route path='new'component={CheckAuthed(NewBug)} />   
                 <Route path='edit'>
                      <Route path=':id' component={CheckAuthed(EditBug)} />
                 </Route>           
            </Route> 
          </Route>
          <Route path="l0gin" component={Login} />
          <Route path='*' component={NotFound} />     
          </Router>
      </div>
    )
  }
}



export default Routes;