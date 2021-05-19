import axiosClient from '../axiosInstant';

const UserApi = {
  // User login
  login: ({ taiKhoan = '', matKhau = '' }) => {
    const url = '/api/QuanLyNguoiDung/DangNhap';
    return axiosClient.post(url, { taiKhoan, matKhau });
  },
};

export default UserApi;
