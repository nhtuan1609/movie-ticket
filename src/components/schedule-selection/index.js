import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dateFormat from 'date-format';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    borderLeft: 'none',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
      backgroundColor: '#e8e3e3',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
    },
  },
  movieListNotify: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
    textAlign: 'center',
  },
  movieItemContainer: {
    margin: '10px',
    padding: '10px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
  },
  movieItemInfor: {
    display: 'flex',
  },
  movieItemImage: {
    width: '50px',
    height: '70px',
    borderRadius: '4px',
  },
  movieItemDetail: {
    marginLeft: '10px',
    width: '440px',
  },
  movieItemName: {
    color: theme.palette.textColor.main,
    fontSize: '18px',
    fontWeight: '500',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  movieItemLength: {
    color: theme.palette.textColor.light,
    fontSize: '16px',
    fontWeight: '400',
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
    height: '24px',
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
    height: '24px',
    float: 'left',
  },
  movieItemSession: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sessionContainer: {
    width: '110px',
    padding: '2px 0px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginRight: '10px',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  sessionStart: {
    color: theme.palette.primary.main,
    fontSize: '18px',
    fontWeight: '500',
  },
  sessionEnd: {
    color: theme.palette.textColor.light,
    fontSize: '14px',
    fontWeight: '400',
  },
  horizontalSeparate: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

export default function ScheduleSelection(props) {
  const classes = useStyles();
  const { scheduleList, currentCinemaCode, filterMovieCode } = props;

  const renderMovieType = () => {
    const ageAllow = Math.floor(Math.random() * 4);
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

  const renderSessionList = (sessionList, movieLength) => {
    return sessionList.map((item, index) => {
      let starDate = new Date(item.ngayChieuGioChieu);
      let endDate = moment(starDate).add(movieLength, 'm').toDate();

      return (
        <a className={classes.sessionContainer} href='/' key={index}>
          <span className={classes.sessionStart}>
            {dateFormat('hh:mm', starDate)}
          </span>
          &nbsp;
          <span className={classes.sessionEnd}>
            ~ {dateFormat('hh:mm', endDate)}
          </span>
        </a>
      );
    });
  };

  const renderScheduleList = (scheduleList, currentCinemaCode) => {
    let currenCinemaSchedule = undefined;
    if (scheduleList.length > 0) {
      currenCinemaSchedule = scheduleList[0].lstCumRap.find(
        (item) => item.maCumRap === currentCinemaCode
      );
    }

    let movieSchedule = [];
    if (currenCinemaSchedule !== undefined) {
      let filterDate = '2020-05';
      let currenCinemaScheduleFiltered = currenCinemaSchedule.danhSachPhim.map(
        (item, index) => {
          let movieSchedule = item.lstLichChieuTheoPhim.filter(
            (itemFilter) =>
              itemFilter.ngayChieuGioChieu.slice(0, 7) === filterDate
          );
          return { ...item, lstLichChieuTheoPhim: [...movieSchedule] };
        }
      );

      movieSchedule = currenCinemaScheduleFiltered.filter(
        (item) => item.lstLichChieuTheoPhim.length > 0
      );

      if (filterMovieCode !== undefined) {
        movieSchedule = movieSchedule.filter(
          (item) => item.maPhim === filterMovieCode
        );
      }
    }

    if (movieSchedule.length === 0) {
      return (
        <p className={classes.movieListNotify}>Hiện tại không có suất chiếu</p>
      );
    }

    return movieSchedule.map((item, index) => {
      let movieLength = Math.floor(Math.random() * 20 + 90);
      let movieIMDb = (Math.floor(Math.random() * 13) + 8) / 2;
      return (
        <div className={classes.movieItemContainer} key={index}>
          <div className={classes.movieItemInfor}>
            <img
              className={classes.movieItemImage}
              src={item.hinhAnh}
              alt={item.tenPhim}
            ></img>
            <div className={classes.movieItemDetail}>
              <div className={classes.movieItemName}>
                {renderMovieType()}
                {item.tenPhim}
              </div>
              <div className={classes.movieItemLength}>
                {movieLength} Phút - IMDb: {movieIMDb}
              </div>
            </div>
          </div>
          <div className={classes.movieItemSession}>
            {' '}
            {renderSessionList(item.lstLichChieuTheoPhim, movieLength)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      {renderScheduleList(scheduleList, currentCinemaCode)}
    </div>
  );
}
