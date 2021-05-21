import axiosClient from '../axiosInstant';

const MovieApi = {
  // Get movie list
  getList: ({ maNhom = 'GP09', tenPhim = false }) => {
    const url = '/api/QuanLyPhim/LayDanhSachPhim';
    return axiosClient.get(
      url +
        (maNhom ? '?maNhom=' + maNhom : '') +
        (tenPhim ? '&tenPhim' + tenPhim : '')
    );
  },

  // Get movie detail
  getDetail: ({ maPhim = '1397' }) => {
    const url = '/api/QuanLyPhim/LayThongTinPhim';
    return axiosClient.get(url + (maPhim ? '?MaPhim=' + maPhim : ''));
  },
};

export default MovieApi;
