import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import login from './login';
import types from './types';
import articles from './articles';
import tye from './tye';
import article from './article';
import bugs from './bugs';
import bug from './bug';
import pictures from './pictures';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  types,
  login,
  articles,
  tye,
  article,
  bugs,
  bug,
  pictures
})
