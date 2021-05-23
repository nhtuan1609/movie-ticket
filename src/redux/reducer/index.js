import { combineReducers } from 'redux';
import cinemaReducer from './cinema';
import movieReducer from './movie';
import userReducer from './user';
import bookingReducer from './booking';
const rootReducer = combineReducers({
  cinema: cinemaReducer,
  movie: movieReducer,
  user: userReducer,
  booking: bookingReducer,
});
export default rootReducer;
