import { combineReducers } from 'redux';
import movieReducer from './movie';
import userReducer from './user';
const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
});
export default rootReducer;
