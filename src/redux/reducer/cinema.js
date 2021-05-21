import {
  GET_COMPANY_LIST,
  GET_CINEMA_LIST,
  GET_SCHEDULE_LIST,
} from '../constant/cinema';
const initialState = {
  companyList: [],
  cinemaList: [],
  scheduleList: [],
};

const movieReducer = (state = initialState, action) => {
  let { type, data } = action;
  switch (type) {
    case GET_COMPANY_LIST: {
      return { ...state, companyList: data };
    }
    case GET_CINEMA_LIST: {
      return { ...state, cinemaList: data };
    }
    case GET_SCHEDULE_LIST: {
      return { ...state, scheduleList: data };
    }
    default:
      return state;
  }
};

export default movieReducer;
