import {
  LOAD_TYPES_SUCCESS
} from '../constants/actionTypes';


const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_TYPES_SUCCESS:
     //const paaaase = _.map(action.payload)
     //console.log('xxxxxxxxxxx',paaaase)
     // _ / lodash แปลงข้อมูลเป็น array
      //return _.map(action.payload)
      return action.payload
    default:
      return state
  }
}
