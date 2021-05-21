import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import dateFormat from 'date-format';
import moment from 'moment';

import CinemaAction from '../../redux/action/cinema';

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },
  cinemaBlockContainer: {
    height: '800px',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  companyList: {
    float: 'left',
    width: '92px',
    height: '100%',
    borderRight: `1px solid ${theme.palette.borderColor.light}`,
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
  companyItem: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '&:hover': {
      '& img': {
        opacity: '1',
      },
    },
  },
  companyItemHightligh: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '& img': {
      opacity: '1',
    },
  },
  companyItemLogo: {
    width: '50px',
    height: '50px',
    margin: 'auto',
    opacity: '0.6',
  },
  cinemaList: {
    float: 'left',
    width: '30%',
    height: '100%',
    borderRight: `1px solid ${theme.palette.borderColor.light}`,
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
  cinemaItemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '&:hover': {
      '& div': {
        opacity: '1',
      },
    },
  },
  cinemaItemContainerHighlight: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '& div': {
      opacity: '1',
    },
  },
  cinemaItem: {
    marginTop: '14px',
    marginBottom: '14px',
    opacity: '0.6',
  },
  cinemaItemImage: {
    float: 'left',
    width: '50px',
    height: '50px',
    marginTop: '4px',
  },
  cinemaItemInfor: {
    marginLeft: '60px',
  },
  cinemaItemInforName: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
  },
  cinemaItemInforNameHighlight: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.primary.main,
  },
  cinemaItemInforAddress: {
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    color: theme.palette.textColor.light,
  },
  cinemaItemLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize: '14px',
  },
  movieList: {
    float: 'left',
    width: 'calc(100% - 30% - 92px)',
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

export default function CinemaBlock() {
  const classes = useStyles();
  const [currentCompanyCode, setCurrentCompanyCode] = React.useState('BHDStar');
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState(
    'bhd-star-cineplex-3-2'
  );

  const companyList = useSelector((state) => state.cinema.companyList);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const scheduleList = useSelector((state) => state.cinema.scheduleList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CinemaAction.fetchCompanyList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      CinemaAction.fetchCinemaList({ maHeThongRap: currentCompanyCode })
    );
  }, [dispatch, currentCompanyCode]);

  useEffect(() => {
    dispatch(
      CinemaAction.fetchScheduleList({ maHeThongRap: currentCompanyCode })
    );
  }, [dispatch, currentCompanyCode]);

  useEffect(() => {
    if (cinemaList.length > 0) {
      setCurrentCinemaCode(cinemaList[0].maCumRap);
    }
  }, [cinemaList]);

  if (
    companyList.length === 0 ||
    cinemaList.length === 0 ||
    scheduleList.length === 0
  )
    return <div />;

  const handleSelectCompany = (companyCode) => () => {
    setCurrentCompanyCode(companyCode);
  };

  const handleSelectCinema = (cinemaCode) => (event) => {
    setCurrentCinemaCode(cinemaCode);
  };

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

  const renderCompanyList = (
    companyList,
    currentCompanyCode,
    handleSelectCompany
  ) => {
    return companyList.map((item, index) => {
      return (
        <div
          className={
            item.maHeThongRap === currentCompanyCode
              ? classes.companyItemHightligh
              : classes.companyItem
          }
          key={index}
          onClick={handleSelectCompany(item.maHeThongRap)}
        >
          <img
            className={classes.companyItemLogo}
            src={item.logo}
            alt={item.maHeThongRap}
          ></img>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  const renderCinemaList = (
    cinemaList,
    currentCinemaCode,
    handleSelectCinema
  ) => {
    return cinemaList.map((item, index) => (
      <div
        className={
          item.maCumRap === currentCinemaCode
            ? classes.cinemaItemContainerHighlight
            : classes.cinemaItemContainer
        }
        key={index}
        onClick={handleSelectCinema(item.maCumRap)}
      >
        <div className={classes.cinemaItem}>
          <img
            className={classes.cinemaItemImage}
            src='/assets/img/cinema/bhd-star/bhd-star-bitexco.png'
            alt='company-logo'
          ></img>
          <div className={classes.cinemaItemInfor}>
            <span className={classes.cinemaItemInforName}>
              <span className={classes.cinemaItemInforNameHighlight}>
                {item.tenCumRap.slice(0, item.tenCumRap.search('-'))}
              </span>
              {item.tenCumRap.slice(
                item.tenCumRap.search('-'),
                item.tenCumRap.length
              )}
            </span>
            <span className={classes.cinemaItemInforAddress}>
              {item.diaChi}
            </span>
            <a className={classes.cinemaItemLink} href={`/cinema/${item.code}`}>
              [chi tiết]
            </a>
          </div>
        </div>
        <div className={classes.horizontalSeparate}></div>
      </div>
    ));
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

  const renderMovieList = (scheduleList, currentCinemaCode) => {
    let currenCinemaSchedule = undefined;
    if (scheduleList.length > 0) {
      currenCinemaSchedule = scheduleList[0].lstCumRap.find(
        (item) => item.maCumRap === currentCinemaCode
      );
    }

    let movieList = [];
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

      movieList = currenCinemaScheduleFiltered.filter(
        (item) => item.lstLichChieuTheoPhim.length > 0
      );
    }

    if (movieList.length === 0) {
      return (
        <p className={classes.movieListNotify}>Hiện tại không có suất chiếu</p>
      );
    }

    return movieList.map((item, index) => {
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
    <Container maxWidth='md' className={classes.containerPadding}>
      <div className={classes.cinemaBlockContainer}>
        <div className={classes.companyList}>
          {renderCompanyList(
            companyList,
            currentCompanyCode,
            handleSelectCompany
          )}
        </div>
        <div className={classes.cinemaList}>
          {renderCinemaList(cinemaList, currentCinemaCode, handleSelectCinema)}
        </div>
        <div className={classes.movieList}>
          {renderMovieList(scheduleList, currentCinemaCode)}
        </div>
      </div>
    </Container>
  );
}
