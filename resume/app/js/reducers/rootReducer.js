import { combineReducers } from 'redux';
import personalInfo from './personalInfo/index';

const rootReducer = combineReducers({
  personalInfo,
});

export default rootReducer;
