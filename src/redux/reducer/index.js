import { combineReducers } from 'redux';
import cinemaReducer from './cinema';
import movieReducer from './movie';
import userReducer from './user';
const rootReducer = combineReducers({
  cinema: cinemaReducer,
  movie: movieReducer,
  user: userReducer,
});
export default rootReducer;
