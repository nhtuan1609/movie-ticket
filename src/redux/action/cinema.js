import CinemaApi from '../api/cinema';
import {
  GET_COMPANY_LIST,
  GET_CINEMA_LIST,
  GET_SCHEDULE_LIST,
} from '../constant/cinema';

const CinemaAction = {
  // Fetch company list
  fetchCompanyList: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await CinemaApi.getCompanyList(option);
        dispatch({
          type: GET_COMPANY_LIST,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
  // Fetch cinema list
  fetchCinemaList: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await CinemaApi.getCinemaList(option);
        dispatch({
          type: GET_CINEMA_LIST,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
  // Fetch schedule list
  fetchScheduleList: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await CinemaApi.getScheduleList(option);
        dispatch({
          type: GET_SCHEDULE_LIST,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
};

export default CinemaAction;
