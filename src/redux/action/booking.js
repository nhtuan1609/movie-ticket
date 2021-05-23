import BookingApi from '../api/booking';
import { GET_SEAT_LIST } from '../constant/booking';

const SeatAction = {
  // Fetch seat list
  fetchSeatList: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await BookingApi.getSeatList(option);
        dispatch({
          type: GET_SEAT_LIST,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
};

export default SeatAction;
