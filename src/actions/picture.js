import { browserHistory } from 'react-router';
import _ from 'lodash';
import {
  LOAD_PICTURES_REQUEST,
  LOAD_PICTURES_SUCCESS,
  LOAD_PICTURES_FAILURE,

  LOAD_PICTURE_REQUEST,
  LOAD_PICTURE_SUCCESS,
  LOAD_PICTURE_FAILURE,

  CREATE_PICTURE_REQUEST,
  CREATE_PICTURE_SUCCESS,
  CREATE_PICTURE_FAILURE,


} from '../constants/actionTypes'
import { 
  upLoadPicture,
  getInfo,
  getInfoByKey
   } from '../Auth/auth';


function getRandom() {
  var items='qazwsxedcrfvtgbyhnujmikolp0123456789';
  let data=[''];
  for(var i=0;i<10;i++){
    var m=Math.floor(Math.random()*items.length);
   data=items[m]+data;
  }
  return data;
}

export function loadPicture(id){
  return dispatch=>{
    dispatch(loadPictureRequest());
    getInfoByKey('pictures',id)
    .then((snap)=>{
      dispatch(loadPictureSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadPictureFailure());
      })
  }
} 

function loadPictureRequest(){
  return{
    type:LOAD_PICTURE_REQUEST
  }
}
function loadPictureSuccess(data){
  return{
    type:LOAD_PICTURE_SUCCESS,
    payload:data
  }
}
function loadPictureFailure(){
  return{
    type:LOAD_PICTURE_FAILURE
  }
}

export function loadPictures(){
  return dispatch=>{
    dispatch(loadPicturesRequest());
    getInfo('pictures')
    .then((snap)=>{
      dispatch(loadPicturesSuccess(snap.val()))
    })
      .catch((error)=>{
        dispatch(loadPicturesFailure());
      })
  }
} 

function loadPicturesRequest(){
  return{
    type:LOAD_PICTURES_REQUEST
  }
}
function loadPicturesSuccess(data){
  return{
    type:LOAD_PICTURES_SUCCESS,
    payload:data
  }
}
function loadPicturesFailure(){
  return{
    type:LOAD_PICTURES_FAILURE
  }
}

export function createPicture(values){
  //console.log('values===>',values.image.name)
  const imgName=getRandom();
  var d = new Date();
  var nameImg=imgName+'_'+d.getDate()
  //console.log('date-->',d.getDate())
  return dispatch=>{
    dispatch(createPictureRequest());
    upLoadPicture(values,nameImg,'pictures')
    .then(()=>{
      dispatch(createPictureSuccess())
           .then(function(res){
            alert("success")
            window.location.reload();
          //browserHistory.push('/picture')
      })
    })
    .catch((error)=>{
      dispatch(createPictureFailure());
    })
  }
}



function createPictureRequest(){
  return{
    type:CREATE_PICTURE_REQUEST
  }
}

function createPictureSuccess(){
  return{
    type:CREATE_PICTURE_SUCCESS
  }
}

function createPictureFailure(){
  return{
    type:CREATE_PICTURE_FAILURE
  }
}
