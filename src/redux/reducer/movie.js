import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from '../constant/movie';
const initialState = {
  list: [],
  detail: {
    lichChieu: [],
    maPhim: null,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: '',
    moTa: '',
    maNhom: '',
    ngayKhoiChieu: '',
    danhGia: null,
  },
};

const movieReducer = (state = initialState, action) => {
  let { type, data } = action;
  switch (type) {
    case GET_MOVIE_LIST: {
      return { ...state, list: data };
    }
    case GET_MOVIE_DETAIL: {
      return { ...state, detail: data };
    }
    default:
      return state;
  }
};

export default movieReducer;
