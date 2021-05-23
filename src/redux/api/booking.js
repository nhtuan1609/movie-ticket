import axiosClient from '../axiosInstant';

const BookingApi = {
  // Get seat list
  getSeatList: ({ maLichChieu = '16153' }) => {
    const url = '/api/QuanLyDatVe/LayDanhSachPhongVe';
    return axiosClient.get(
      url + (maLichChieu ? '?maLichChieu=' + maLichChieu : '')
    );
  },
};

export default BookingApi;
