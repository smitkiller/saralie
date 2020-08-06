import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,

  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE,

  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_FAILURE,

  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,

} from '../constants/actionTypes'
import { 
  upLoadToStorage,
  getInfo,
  getInfoByKey
   } from '../Auth/auth';

export const getArticleByTitle = (state,id)=>(
    _.find(state.articles,(data,key)=> data.title === id)
  )

export const getArticleById = (state, id) => (
 _.find(state.articles,(data,key)=> key === id)
)

export function getCategoryById(state, id){
  const all=[];
   _.filter(state.articles,(data,key)=>{
     if(data.category === id && data.status==='1')
     {
      all.push({
        category:data.category, 
        content:data.content,
        image: data.image,
        status: data.status,
        title: data.title,
        key:key
      })
     }
    }
  )
   return all;
}

/*export const getCategoryById = (state, id) => (
 _.filter(state.articles,(data,key)=> ( 
     data.category === id && data.status==='1'
     ?data:null
  )
 )
)*/


function getRandom() {
  var items='qazwsxedcrfvtgbyhnujmikolp0123456789';
  let data=[''];
  for(var i=0;i<10;i++){
    var m=Math.floor(Math.random()*items.length);
   data=items[m]+data;
  }
  return data;
}

export function loadArticle(id){
  return dispatch=>{
    dispatch(loadArticleRequest());
    getInfoByKey('articles',id)
    .then((snap)=>{
      dispatch(loadArticleSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadArticleFailure());
      })
  }
} 

function loadArticleRequest(){
  return{
    type:LOAD_ARTICLE_REQUEST
  }
}
function loadArticleSuccess(data){
  return{
    type:LOAD_ARTICLE_SUCCESS,
    payload:data
  }
}
function loadArticleFailure(){
  return{
    type:LOAD_ARTICLE_FAILURE
  }
}

export function loadArticles(){
  return dispatch=>{
    dispatch(loadArticlesRequest());
    getInfo('articles')
    .then((snap)=>{
      dispatch(loadArticlesSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadArticlesFailure());
      })
  }
} 

function loadArticlesRequest(){
  return{
    type:LOAD_ARTICLES_REQUEST
  }
}
function loadArticlesSuccess(data){
  return{
    type:LOAD_ARTICLES_SUCCESS,
    payload:data
  }
}
function loadArticlesFailure(){
  return{
    type:LOAD_ARTICLES_FAILURE
  }
}

export function createArticle(values){
  //console.log('values===>',values.image.name)
  const imgName=getRandom();
  var d = new Date();
  var nameImg=imgName+'_'+d.getDate()
  //console.log('date-->',d.getDate())
  return dispatch=>{
    dispatch(createArticleRequest());
    upLoadToStorage(values,'create',nameImg,'articles')
    .then(()=>{
      dispatch(createArticleSuccess())
           .then(function(res){
          browserHistory.push('/articles')
      })
    })
    .catch((error)=>{
      dispatch(createArticleFailure());
    })
  }
}



function createArticleRequest(){
  return{
    type:CREATE_ARTICLE_REQUEST
  }
}

function createArticleSuccess(){
  return{
    type:CREATE_ARTICLE_SUCCESS
  }
}

function createArticleFailure(){
  return{
    type:CREATE_ARTICLE_FAILURE
  }
}

export function updateArticle(values){
  const imgName=getRandom();
  var d = new Date();
  var nameImg=imgName+'_'+d.getDate()
  
  return dispatch=>{
    dispatch(updateArticleRequest());
    upLoadToStorage(values,'update',nameImg,'articles')
   // updateInfo('articles',values)
    .then(()=>{
      dispatch(updateArticleSuccess())
          .then(function(res){
          browserHistory.push('/articles')
      })
    })
      .catch((error)=>{
        dispatch(updateArticleFailure());
      })
  }
} 

function updateArticleRequest(){
  return{
    type:UPDATE_ARTICLE_REQUEST
  }
}

function updateArticleSuccess(){
  return{
    type:UPDATE_ARTICLE_SUCCESS
  }
}

function updateArticleFailure(){
  return{
    type:UPDATE_ARTICLE_FAILURE
  }
}