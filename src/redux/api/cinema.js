import axiosClient from '../axiosInstant';

const CinemaApi = {
  // Get company list
  getCompanyList: () => {
    const url = '/api/QuanLyRap/LayThongTinHeThongRap';
    return axiosClient.get(url);
  },
  // Get cinema list
  getCinemaList: ({ maHeThongRap = 'BHDStar' }) => {
    const url = '/api/QuanLyRap/LayThongTinCumRapTheoHeThong';
    return axiosClient.get(
      url + (maHeThongRap ? '?maHeThongRap=' + maHeThongRap : '')
    );
  },
  // Get schedule list
  getScheduleList: ({ maHeThongRap = 'BHDStar', maNhom = 'GP09' }) => {
    const url = '/api/QuanLyRap/LayThongTinLichChieuHeThongRap';
    return axiosClient.get(
      url +
        (maHeThongRap ? '?maHeThongRap=' + maHeThongRap : '') +
        (maNhom ? '&maNhom=' + maNhom : '')
    );
  },
};

export default CinemaApi;
