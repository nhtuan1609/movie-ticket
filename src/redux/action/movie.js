import MovieApi from '../api/movie';
import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from '../constant/movie';

const MovieAction = {
  // Fetch data list movie
  fetchList: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await MovieApi.getList(option);
        dispatch({
          type: GET_MOVIE_LIST,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },

  // Fetch data detail movie
  fetchDetail: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await MovieApi.getDetail(option);
        dispatch({
          type: GET_MOVIE_DETAIL,
          data,
        });
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
};

export default MovieAction;
