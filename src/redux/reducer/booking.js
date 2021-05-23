import { GET_SEAT_LIST } from '../constant/booking';
const initialState = {
  seatList: [],
};

const bookingReducer = (state = initialState, action) => {
  let { type, data } = action;
  switch (type) {
    case GET_SEAT_LIST: {
      return { ...state, seatList: data };
    }
    default:
      return state;
  }
};

export default bookingReducer;
