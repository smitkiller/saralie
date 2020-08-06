import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  LOAD_TYPES_REQUEST,
  LOAD_TYPES_SUCCESS,
  LOAD_TYPES_FAILURE,

  LOAD_TYPE_REQUEST,
  LOAD_TYPE_SUCCESS,
  LOAD_TYPE_FAILURE,

  CREATE_TYPE_REQUEST,
  CREATE_TYPE_SUCCESS,
  CREATE_TYPE_FAILURE,

  UPDATE_TYPE_REQUEST,
  UPDATE_TYPE_SUCCESS,
  UPDATE_TYPE_FAILURE,

} from '../constants/actionTypes';
import { 
  addInfo,
  getInfo,
  getInfoByKey,
  updateInfo,
   } from '../Auth/auth';

export const getTypeById = (state, id) => (
 _.find(state.types,(type,key)=> key === id)
)


export function loadType(id){
  return dispatch=>{
    dispatch(loadTypeRequest());
    getInfoByKey('types',id)
    .then((snap)=>{
      dispatch(loadTypeSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadTypeFailure());
      })
  }
} 

function loadTypeRequest(){
  return{
    type:LOAD_TYPE_REQUEST
  }
}
function loadTypeSuccess(data){
  return{
    type:LOAD_TYPE_SUCCESS,
    payload:data
  }
}
function loadTypeFailure(){
  return{
    type:LOAD_TYPE_FAILURE
  }
}

export function loadTypes(){
  return dispatch=>{
    dispatch(loadTypesRequest());
    getInfo('types')
    .then((snap)=>{
      dispatch(loadTypesSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadTypesFailure());
      })
  }
} 

function loadTypesRequest(){
  return{
    type:LOAD_TYPES_REQUEST
  }
}
function loadTypesSuccess(data){
  return{
    type:LOAD_TYPES_SUCCESS,
    payload:data
  }
}
function loadTypesFailure(){
  return{
    type:LOAD_TYPES_FAILURE
  }
}

export function createType(values){
  return dispatch=>{
    dispatch(createTypeRequest());
    addInfo('types',values)
    .then(()=>{
      dispatch(createTypeSuccess())
           .then(function(res){
          browserHistory.push('/types')
      })
    })
    .catch((error)=>{
      dispatch(createTypeFailure());
    })
  }
}



function createTypeRequest(){
  return{
    type:CREATE_TYPE_REQUEST
  }
}

function createTypeSuccess(){
  return{
    type:CREATE_TYPE_SUCCESS
  }
}

function createTypeFailure(){
  return{
    type:CREATE_TYPE_FAILURE
  }
}

export function updateType(values){
  return dispatch=>{
    dispatch(updateTypeRequest());
    updateInfo('types',values,values.id)
    .then(()=>{
      dispatch(updateTypeSuccess())
          .then(function(res){
          browserHistory.push('/types')
      })
    })
      .catch((error)=>{
        dispatch(updateTypeFailure());
      })
  }
} 

function updateTypeRequest(){
  return{
    type:UPDATE_TYPE_REQUEST
  }
}

function updateTypeSuccess(){
  return{
    type:UPDATE_TYPE_SUCCESS
  }
}

function updateTypeFailure(){
  return{
    type:UPDATE_TYPE_FAILURE
  }
}