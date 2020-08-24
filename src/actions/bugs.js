import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  LOAD_BUGS_REQUEST,
  LOAD_BUGS_SUCCESS,
  LOAD_BUGS_FAILURE,

  LOAD_BUG_REQUEST,
  LOAD_BUG_SUCCESS,
  LOAD_BUG_FAILURE,

  CREATE_BUG_REQUEST,
  CREATE_BUG_SUCCESS,
  CREATE_BUG_FAILURE,

  UPDATE_BUG_REQUEST,
  UPDATE_BUG_SUCCESS,
  UPDATE_BUG_FAILURE,

} from '../constants/actionTypes'
import { 
  addInfo,
  updateInfo,
  getInfo,
  getInfoByKey
   } from '../Auth/auth';


export const getBugById = (state, id) => (
 _.find(state.bugs,(data,key)=> key === id)
)

export function loadBug(id){
  return dispatch=>{
    dispatch(loadBugRequest());
    getInfoByKey('bugs',id)
    .then((snap)=>{
      dispatch(loadBugSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadBugFailure());
      })
  }
} 

function loadBugRequest(){
  return{
    type:LOAD_BUG_REQUEST
  }
}
function loadBugSuccess(data){
  return{
    type:LOAD_BUG_SUCCESS,
    payload:data
  }
}
function loadBugFailure(){
  return{
    type:LOAD_BUG_FAILURE
  }
}

export function loadBugs(){
  return dispatch=>{
    dispatch(loadBugsRequest());
    getInfo('bugs')
    .then((snap)=>{
      dispatch(loadBugsSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadBugsFailure());
      })
  }
} 

function loadBugsRequest(){
  return{
    type:LOAD_BUGS_REQUEST
  }
}
function loadBugsSuccess(data){
  return{
    type:LOAD_BUGS_SUCCESS,
    payload:data
  }
}
function loadBugsFailure(){
  return{
    type:LOAD_BUGS_FAILURE
  }
}

export function createBug(values){
  var data=[];
  var d = new Date();

  data={
    issue:values.issue,
    detail:values.detail,
    solution:values.solution,
    date:d.toString()
  }
 // console.log('data===>',data)
  return dispatch=>{
    dispatch(createBugRequest());
    addInfo('bugs',data)
    .then(()=>{
      dispatch(createBugSuccess())
      browserHistory.push('/bugs')
    })
    .catch((error)=>{
      dispatch(createBugFailure());
    })
  }
}




function createBugRequest(){
  return{
    type:CREATE_BUG_REQUEST
  }
}

function createBugSuccess(){
  return{
    type:CREATE_BUG_SUCCESS
  }
}

function createBugFailure(){
  return{
    type:CREATE_BUG_FAILURE
  }
}

export function updateBug(values){
  var data=[];
  var d = new Date();
  data={
    issue:values.issue,
    detail:values.detail,
    solution:values.solution,
    date:d.toString()
  }
  return dispatch=>{
    dispatch(updateBugRequest());
    updateInfo('bugs',data,values.id)
    .then(()=>{
      dispatch(updateBugSuccess())
      browserHistory.push('/bugs')
    })
    .catch((error)=>{
        dispatch(updateBugFailure());
      })
  }
} 

function updateBugRequest(){
  return{
    type:UPDATE_BUG_REQUEST
  }
}

function updateBugSuccess(){
  return{
    type:UPDATE_BUG_SUCCESS
  }
}

function updateBugFailure(){
  return{
    type:UPDATE_BUG_FAILURE
  }
}