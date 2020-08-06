import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS
} from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
  case "persist/REHYDRATE":{
      return {...state, ...action.payload.login}
    } 
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          'authed': true,
          'userName':action.user.firstname,
          'admin_page':1,
          'room_page':1,
          'statusText': null
      });
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
          'authed': false,
          'userName': null,
          'admin_page':null,
          'room_page':null,
          'statusText': 'Invalid username/password.'
      });
     case LOGOUT_USER_SUCCESS:
         return Object.assign({}, state, {
          'authed': false,
          'userName': null,
          'admin_page':null,
          'room_page':null,
          'statusText': null
      });
    default:
      return state
  }
}
