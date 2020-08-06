import {
  LOAD_BUGS_SUCCESS
} from '../constants/actionTypes';
import _ from 'lodash';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_BUGS_SUCCESS:
     //const paaaase = _.map(action.payload)
    // console.log('tttttttt',action.payload)
     // _ / lodash แปลงข้อมูลเป็น array
      //return _.map(action.payload)
      return action.payload
    default:
      return state
  }
}
