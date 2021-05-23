import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import FadeLoading from '../../components/fade-loading';

import BookingAction from '../../redux/action/booking';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
  },
  overalInforContainer: {
    backgroundColor: 'rgba(10, 32, 41, 1)',
  },
  cinemaInforContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '20px',
  },
  cinemaInforWrap: {
    width: '100%',
  },
  cinemaInforImage: {
    float: 'left',
    width: '80px',
    height: '80px',
  },
  cinemaInforDetail: {
    marginLeft: '90px',
  },
  cinemaInforName: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
  },
  cinemaInforNameHighlight: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  cinemaInforAddress: {
    display: 'block',
    width: '100%',
    fontSize: '16px',
    color: theme.palette.textColor.white,
  },
  movieInforContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '20px',
  },
  movieAgeTypeAll: {
    minWidth: '34px',
    lineHeight: '22px',
    textAlign: 'center',
    backgroundColor: 'rgb(0,172,77)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    padding: '0 4px',
    borderRadius: '4px',
    marginRight: '6px',
    marginTop: '4px',
    float: 'left',
  },
  movieAgeTypeSpecial: {
    minWidth: '34px',
    lineHeight: '22px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    padding: '0 4px',
    borderRadius: '4px',
    marginRight: '6px',
    marginTop: '4px',
    float: 'left',
  },
  timeInforContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  timeCountDownLabel: {
    fontSize: '24px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
  },
  timeCountDown: {
    fontSize: '30px',
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  roomInforContainer: {
    backgroundColor: 'rgba(10, 32, 41, 0.9)',
  },
  seatInforContainer: {
    height: '800px',
  },
  cinemaScreen: {
    width: '100%',
    height: '160px',
    marginTop: '20px',
  },
  seatContainer: {
    padding: '0 160px',
  },
  referenceSeatItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  referenceSeatItemNumber: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    width: '50px',
    height: '22px',
    textAlign: 'center',
    border: `1px solid ${theme.palette.borderColor.main}`,
    borderRadius: '4px',
    userSelect: 'none',
    backgroundColor: '#333',
  },
  seatItemContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '12px',
  },
  seatItemNumberAvaiable: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    width: '50px',
    height: '22px',
    textAlign: 'center',
    border: `1px solid ${theme.palette.borderColor.light}`,
    borderRadius: '4px',
    cursor: 'pointer',
  },
  seatItemNumberBooked: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#bbb',
    width: '50px',
    height: '22px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#bbb',
    userSelect: 'none',
  },
  seatItemNumberVip: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    width: '50px',
    height: '22px',
    textAlign: 'center',
    border: `1px solid yellow`,
    borderRadius: '4px',
    cursor: 'pointer',
  },
  seatItemNumberSelecting: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    width: '50px',
    height: '22px',
    textAlign: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
  },
  seatNoteContainer: {
    marginTop: '40px',
    padding: '0 160px',
  },
  seatItemNote: {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    marginLeft: '10px',
  },
  bookingInforContainer: {
    width: '100%',
    boxShadow: '2px 2px 20px 4px rgba(0, 0, 0, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  bookingInforPrice: {
    fontSize: '50px',
    fontWeight: '400',
    color: theme.palette.primary.main,
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '40px',
  },
  bookingInforDetail: {
    width: '100%',
    margin: '30px 0',
  },
  bookingInforCinema: {},
  bookingInforMovie: {
    marginTop: '10px',
  },
  bookingInforSeat: {
    width: '100%',
    textAlign: 'left',
    margin: '30px 0',
  },
  bookingInforSeatLabel: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  bookingInforSeatContent: {
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.white,
    margin: '10px 0',
  },
  bookingInforUser: {
    width: '100%',
    margin: '30px 0',
  },
  bookingInforUserLabel: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  bookingInforUserGroup: {
    display: 'flex',
    margin: '10px 0',
  },
  bookingInforUserGroupLabel: {
    width: '140px',
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.white,
  },
  bookingInforUserGroupContent: {
    width: 'calc(100% - 140px)',
    paddingLeft: '10px',
    fontSize: '16px',
    fontWeight: '400',
    color: theme.palette.textColor.white,
  },
  bookingInforButton: {
    width: '100%',
    height: '52px',
  },
  dialogTitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
    padding: '40px 20px',
    minWidth: '460px',
  },
  dialogButton: {
    width: '120px',
    height: '40px',
    margin: '10px',
  },
  horizontalSeparate: {
    margin: '0 20px',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.borderColor.main}`,
  },
}));

const PrimaryButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: '#eee',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f43f24',
    },
    '&:disabled': {
      backgroundColor: '#bbb',
      color: '555',
      cursor: 'default',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: '20px',
    fontWeight: '500',
  },
})(Button);

const NormalButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderRadius: '4px',
    border: 0,
    color: '#333',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      backgroundColor: '#bbb',
      color: '555',
      cursor: 'default',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: '20px',
    fontWeight: '500',
  },
})(Button);

export default function LoginPage() {
  const classes = useStyles();
  const { maLichChieu } = useParams();
  const seatList = useSelector((state) => state.booking.seatList);
  const userInfor = useSelector((state) => state.user.infor);
  const [selectedSeatList, setSelectedSeatList] = React.useState([]);
  const [isShowTimoutDialog, setIsShowTimeoutDialog] = React.useState(false);
  const [isShowBookingDialog, setIsShowBookingDialog] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BookingAction.fetchSeatList({ maLichChieu }));
  }, [dispatch, maLichChieu]);

  useEffect(() => {
    let duration = 60 * 5;
    let timer = duration,
      minutes,
      seconds;
    let interval = setInterval(function () {
      let display = document.querySelector('#booking-timer');

      if (display !== null) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
          setIsShowTimeoutDialog(true);
          clearInterval(interval);
        }
      }
    }, 1000);
  }, []);

  if (seatList.length === 0) return <FadeLoading />;

  const handleTimeoutDialogConfirm = () => {
    window.location.href = '..';
  };

  const handleBookingDialogConfirm = () => {
    window.location.href = '..';
  };

  const handleSelectSeat = (index) => () => {
    let newSelectedSeatList = [];
    let seatIsSelected = selectedSeatList.indexOf(index);

    if (seatIsSelected !== -1) {
      newSelectedSeatList = selectedSeatList.filter((item) => item !== index);
    } else {
      newSelectedSeatList = selectedSeatList.concat(index);
    }
    setSelectedSeatList(newSelectedSeatList);
  };

  const movieInfor = seatList.thongTinPhim;

  const referenceSeat = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
  ];

  const renderMovieType = () => {
    const ageAllow = 0;
    switch (ageAllow) {
      case 1:
        return <span className={classes.movieAgeTypeSpecial}>C13</span>;
      case 2:
        return <span className={classes.movieAgeTypeSpecial}>C16</span>;
      case 3:
        return <span className={classes.movieAgeTypeSpecial}>C18</span>;
      default:
        return <span className={classes.movieAgeTypeAll}>P</span>;
    }
  };

  const renderReferenceSeatList = (seatList, referenceSeat) => {
    let maxRow = Math.floor(seatList.length / 12);
    let referenceSeatFiltered = referenceSeat.filter(
      (item, index) => index < maxRow
    );

    return referenceSeatFiltered.map((item, index) => (
      <Grid item xs={12}>
        <div className={classes.referenceSeatItemContainer}>
          <div className={classes.referenceSeatItemNumber}>{item}</div>
        </div>
      </Grid>
    ));
  };

  const renderSeatList = (seatList, selectedSeatList, handleSelectSeat) =>
    seatList.map((item, index) => {
      let seatRow = Math.floor(index / 12);
      let seatNumber = (index % 12) + 1;
      let seatName =
        seatNumber < 10 ? '0' + seatNumber.toString() : seatNumber.toString();
      let isSelected = selectedSeatList.includes(index);
      return (
        index < 156 && (
          <Grid item xs={1} alignItems='center'>
            <div className={classes.seatItemContainer}>
              <div
                onClick={item.daDat ? () => null : handleSelectSeat(index)}
                className={
                  item.daDat === true
                    ? classes.seatItemNumberBooked
                    : isSelected
                    ? classes.seatItemNumberSelecting
                    : seatRow > 3 && seatRow < 10
                    ? classes.seatItemNumberVip
                    : classes.seatItemNumberAvaiable
                }
              >
                {seatName}
              </div>
            </div>
          </Grid>
        )
      );
    });

  const calculateTotalPrice = (seatList, selectedSeatList) => {
    if (selectedSeatList.length === 0) return 0;
    let totalPrice = selectedSeatList.reduce((accumulator, currentValue) => {
      console.log(currentValue);
      let ticketPrice = seatList[currentValue].giaVe;
      return accumulator + ticketPrice;
    }, 0);

    return totalPrice;
  };

  const convertSelectedSeatToString = (selectedSeatList, referenceSeat) => {
    if (selectedSeatList.length === 0) return 'Chưa có ghế được chọn';
    let selectedSeatListString = selectedSeatList.map((item) => {
      let seatRow = referenceSeat[Math.floor(item / 12)];
      let seatCol = (item % 12) + 1;

      return (
        seatRow + (seatCol < 10 ? '0' + seatCol.toString() : seatCol.toString())
      );
    });

    return selectedSeatListString.join(', ');
  };

  return (
    <div className={classes.container}>
      <Grid container>
        {/* Overal infor */}
        <Grid container xs={12} className={classes.overalInforContainer}>
          {/* Cinema infor */}
          <Grid xs={12} sm={6} md={4}>
            <div className={classes.cinemaInforContainer}>
              <div className={classes.cinemaInforWrap}>
                <img
                  className={classes.cinemaInforImage}
                  src='/assets/img/cinema/lotte/lotte-cinema-cantavil.jpg'
                  alt='company-logo'
                ></img>
                <div className={classes.cinemaInforDetail}>
                  <span className={classes.cinemaInforName}>
                    <span className={classes.cinemaInforNameHighlight}>
                      {movieInfor.tenCumRap.slice(
                        0,
                        movieInfor.tenCumRap.search('-')
                      )}
                    </span>
                    {movieInfor.tenCumRap.slice(
                      movieInfor.tenCumRap.search('-'),
                      movieInfor.tenCumRap.length
                    )}
                  </span>
                  <span className={classes.cinemaInforAddress}>
                    {movieInfor.diaChi}
                  </span>
                </div>
              </div>
            </div>
          </Grid>
          {/* Movie infor */}
          <Grid xs={12} sm={6} md={4}>
            <div className={classes.movieInforContainer}>
              <div className={classes.cinemaInforWrap}>
                <img
                  className={classes.cinemaInforImage}
                  src={movieInfor.hinhAnh}
                  alt={movieInfor.tenPhim}
                ></img>
                <div className={classes.cinemaInforDetail}>
                  <span className={classes.cinemaInforName}>
                    <span className={classes.cinemaInforNameHighlight}>
                      {renderMovieType()}
                      {movieInfor.tenPhim}
                    </span>
                  </span>
                  <span className={classes.cinemaInforAddress}>
                    Suất chiếu: {movieInfor.gioChieu} - {movieInfor.ngayChieu}
                  </span>
                </div>
              </div>
            </div>
          </Grid>
          {/* Time infor */}
          <Grid xs={12} sm={12} md={4}>
            <div className={classes.timeInforContainer}>
              <span className={classes.timeCountDownLabel}>
                Thời gian giữ ghế
              </span>
              <span className={classes.timeCountDown} id='booking-timer'>
                05:00
              </span>
            </div>
          </Grid>
        </Grid>
        {/* room infor */}
        <Grid container xs={12} className={classes.roomInforContainer}>
          {/* Seat infor */}
          <Grid xs={12} sm={12} md={9}>
            <div className={classes.seatInforContainer}>
              {/* Cinema screen */}
              <img
                className={classes.cinemaScreen}
                src='/assets/img/room/cinema-screen.png'
                alt='cinema-screen'
              ></img>
              {/* Cinema seat */}
              <div className={classes.seatContainer}>
                <Grid container>
                  <Grid container xs={1}>
                    {renderReferenceSeatList(
                      seatList.danhSachGhe,
                      referenceSeat
                    )}
                  </Grid>
                  <Grid container xs={11}>
                    {renderSeatList(
                      seatList.danhSachGhe,
                      selectedSeatList,
                      handleSelectSeat
                    )}
                  </Grid>
                </Grid>
              </div>
              {/* Cinema note */}
              <div className={classes.seatNoteContainer}>
                <Grid container>
                  <Grid item xs={3}>
                    <div className={classes.seatItemContainer}>
                      <div className={classes.seatItemNumberVip}></div>
                      <div className={classes.seatItemNote}>Ghế VIP</div>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={classes.seatItemContainer}>
                      <div className={classes.seatItemNumberAvaiable}></div>
                      <div className={classes.seatItemNote}>Ghế thường</div>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={classes.seatItemContainer}>
                      <div className={classes.seatItemNumberBooked}></div>
                      <div className={classes.seatItemNote}>Ghế đã đặt</div>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className={classes.seatItemContainer}>
                      <div className={classes.seatItemNumberSelecting}></div>
                      <div className={classes.seatItemNote}>Ghế đang chọn</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          {/* Booking infor */}
          <Grid xs={12} sm={12} md={3}>
            <div className={classes.bookingInforContainer}>
              <div className={classes.bookingInforPrice}>
                {calculateTotalPrice(seatList.danhSachGhe, selectedSeatList)}đ
              </div>
              <div className={classes.horizontalSeparate}></div>
              <div className={classes.bookingInforDetail}>
                <div className={classes.bookingInforCinema}>
                  <span className={classes.cinemaInforName}>
                    <span className={classes.cinemaInforNameHighlight}>
                      {movieInfor.tenCumRap.slice(
                        0,
                        movieInfor.tenCumRap.search('-')
                      )}
                    </span>
                    {movieInfor.tenCumRap.slice(
                      movieInfor.tenCumRap.search('-'),
                      movieInfor.tenCumRap.length
                    )}
                  </span>
                  <span className={classes.cinemaInforAddress}>
                    {movieInfor.diaChi}
                  </span>
                </div>
                <div className={classes.bookingInforMovie}>
                  <span className={classes.cinemaInforName}>
                    <span className={classes.cinemaInforNameHighlight}>
                      {renderMovieType()}
                      {movieInfor.tenPhim}
                    </span>
                  </span>
                  <span className={classes.cinemaInforAddress}>
                    Suất chiếu: {movieInfor.gioChieu} - {movieInfor.ngayChieu}
                  </span>
                </div>
              </div>
              <div className={classes.horizontalSeparate}></div>
              <div className={classes.bookingInforSeat}>
                <div className={classes.bookingInforSeatLabel}>Ghế đã chọn</div>
                <div className={classes.bookingInforSeatContent}>
                  {convertSelectedSeatToString(selectedSeatList, referenceSeat)}
                </div>
              </div>
              <div className={classes.horizontalSeparate}></div>
              <div className={classes.bookingInforUser}>
                <div className={classes.bookingInforUserLabel}>
                  Thông tin khách hàng
                </div>
                <div className={classes.bookingInforUserGroup}>
                  <span className={classes.bookingInforUserGroupLabel}>
                    Tên tài khoản:
                  </span>
                  <span className={classes.bookingInforUserGroupContent}>
                    {userInfor.taiKhoan}
                  </span>
                </div>
                <div className={classes.bookingInforUserGroup}>
                  <span className={classes.bookingInforUserGroupLabel}>
                    Họ và tên:
                  </span>
                  <span className={classes.bookingInforUserGroupContent}>
                    {userInfor.hoTen}
                  </span>
                </div>
                <div className={classes.bookingInforUserGroup}>
                  <span className={classes.bookingInforUserGroupLabel}>
                    Email:
                  </span>
                  <span className={classes.bookingInforUserGroupContent}>
                    {userInfor.email}
                  </span>
                </div>
                <div className={classes.bookingInforUserGroup}>
                  <span className={classes.bookingInforUserGroupLabel}>
                    SĐT:
                  </span>
                  <span className={classes.bookingInforUserGroupContent}>
                    {userInfor.soDT}
                  </span>
                </div>
              </div>
              <div className={classes.bookingInforButton}>
                <PrimaryButton
                  disabled={selectedSeatList.length === 0 && 'disabled'}
                  onClick={() => setIsShowBookingDialog(true)}
                >
                  Đặt vé
                </PrimaryButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {/* Timeout dialog */}
      <Dialog open={isShowTimoutDialog} className={classes.dialogContainer}>
        <DialogTitle className={classes.dialogTitle}>
          Thời gian giữ ghế đã hết, xin vui lòng đặt vé lại!
        </DialogTitle>
        <DialogActions>
          <div className={classes.dialogButton}>
            <PrimaryButton onClick={handleTimeoutDialogConfirm}>
              Xác nhận
            </PrimaryButton>
          </div>
        </DialogActions>
      </Dialog>
      {/* Booking dialog */}
      <Dialog open={isShowBookingDialog} className={classes.dialogContainer}>
        <DialogTitle className={classes.dialogTitle}>
          Bạn đã kiểm tra thông tin và xác nhận thông tin đặt vé?
        </DialogTitle>
        <DialogActions>
          <div className={classes.dialogButton}>
            <NormalButton onClick={() => setIsShowBookingDialog(false)}>
              Quay lại
            </NormalButton>
          </div>
          <div className={classes.dialogButton}>
            <PrimaryButton onClick={handleBookingDialogConfirm}>
              Xác nhận
            </PrimaryButton>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
