import UserApi from '../api/user';
import { LOGIN_SUCCESS, REGISTER, LOGOUT } from '../constant/user';

const UserAction = {
  // User login
  fetchLogin: (option = {}) => {
    return async (dispatch) => {
      try {
        const { data, status } = await UserApi.login(option);
        if (data.maLoaiNguoiDung === 'KhachHang') {
          dispatch({
            type: LOGIN_SUCCESS,
            data,
          });
          window.location.href = '..';
        } else if (data.maLoaiNguoiDung === 'QuanTri') {
          dispatch({
            type: LOGIN_SUCCESS,
            data,
          });
          window.location.href = '..';
        }
        return { data, status };
      } catch (error) {
        throw error;
      }
    };
  },
  // User reigster
  fetchRegister: (option = {}) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: LOGIN_SUCCESS,
          data: option,
        });
        window.location.href = '..';
      } catch (error) {
        throw error;
      }
    };
  },
  // User logut
  fetchLogout: () => {
    return (dispatch) => {
      try {
        dispatch({
          type: LOGOUT,
          data: {},
        });
        window.location.href = '..';
      } catch (error) {
        throw error;
      }
    };
  },
};

export default UserAction;
