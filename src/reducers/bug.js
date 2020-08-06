import {
  LOAD_BUG_SUCCESS
} from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_BUG_SUCCESS:
      return action.payload
      //return action.payload
    default:
      return state
  }
}
