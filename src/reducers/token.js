import {
  RECAPTCHA_SUCCESS
} from '../constants/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case RECAPTCHA_SUCCESS:
      return action.payload
      //return action.payload
    default:
      return state
  }
}
