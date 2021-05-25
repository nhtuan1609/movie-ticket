import React, { useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import dateFormat from 'date-format';

import SelectionList from './SelectionList';
import MovieAction from '../../../../redux/action/movie';

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '940px',
    height: '80px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px',
    boxShadow: '2px 2px 6px 2px rgba(0, 0, 0, 0.1)',
    zIndex: '1',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  filterGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'calc(70% / 4)',
    height: '60px',
    padding: '0 10px',
  },
  filterGroupLabel: {
    color: theme.palette.textColor.main,
    fontSize: '14px',
    fontWeight: '500',
  },
  verticalSeparate: {
    height: '38px',
    borderRight: '1px solid rgb(210, 210, 210)',
  },
  dropDownIcon: {
    color: theme.palette.textColor.light,
    marginRight: 0,
    marginLeft: 'auto',
  },
}));

const BuyTicketButton = withStyles({
  root: {
    background: '#333',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    height: '40px',
    width: '100%',
    '&:hover': {
      background: '#fb4226',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function FilterBlock(props) {
  const classes = useStyles();
  const { movieList } = props;

  const [isShowFilmList, setIsShowFilmList] = React.useState(false);
  const [isShowCinemaList, setIsShowCinemaList] = React.useState(false);
  const [isShowDateList, setIsShowDateList] = React.useState(false);
  const [isShowSessionList, setIsShowSessionList] = React.useState(false);

  const [currentMovie, setCurrentMovie] = React.useState('');
  const [currentCinema, setCurrentCinema] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState('');
  const [currentSession, setCurrentSession] = React.useState('');

  const movieDetail = useSelector((state) => state.movie.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      MovieAction.fetchDetail({
        maPhim: currentMovie,
      })
    );
  }, [dispatch, currentMovie]);

  const toggleIsShowFilmList = () => {
    setIsShowFilmList(!isShowFilmList);
  };

  const toggleIsShowCinemaList = () => {
    setIsShowCinemaList(!isShowCinemaList);
  };

  const toggleIsShowDateList = () => {
    setIsShowDateList(!isShowDateList);
  };

  const toggleIsShowSessionList = () => {
    setIsShowSessionList(!isShowSessionList);
  };

  const handleSelectFilm = (event) => {
    let movieCode = event.target.dataset.id;
    setCurrentMovie(movieCode);
    setCurrentCinema('');
    setCurrentDate('');
    setCurrentSession('');
  };

  const handleSelectCinema = (event) => {
    if (currentMovie !== '') {
      let cinemaCode = event.target.dataset.id;
      setCurrentCinema(cinemaCode);
      setCurrentDate('');
      setCurrentSession('');
    }
  };

  const handleSelectDate = (event) => {
    if (currentCinema !== '') {
      let dateCode = event.target.dataset.id;
      setCurrentDate(dateCode);
      setCurrentSession('');
    }
  };

  const handleSelectSession = (event) => {
    if (currentDate !== '') {
      let sessionCode = event.target.dataset.id;
      setCurrentSession(sessionCode);
      console.log(sessionCode);
    }
  };

  const decodeCodeToName = (listData, code) => {
    let itemIndex = listData.findIndex((item) => item.code === code);
    let name = 'None value';
    if (itemIndex !== -1) {
      name = listData[itemIndex].name;
    }
    return name;
  };

  const handleBuyTicket = () => {
    if (
      currentMovie !== '' &&
      currentCinema !== '' &&
      currentDate !== '' &&
      currentSession !== ''
    ) {
      let sessionList = filterSessionList(
        movieDetail,
        currentMovie,
        currentCinema,
        currentDate
      );

      let sessionListFiltered = sessionList.find(
        (item) => item.code === currentSession
      );

      if (sessionListFiltered !== undefined) {
        window.location.href = `/book/${sessionListFiltered.maLichChieu}`;
      }
    }
  };

  const filterMovieNameList = (movieList) =>
    movieList.map((item, index) => ({
      name: item.tenPhim,
      code: item.maPhim.toString(),
    }));

  const filterCinemaList = (movieDetail, currentMovie) => {
    if (currentMovie === '') {
      return [{ code: '', name: 'Vui lòng chọn ngày' }];
    } else if (movieDetail.maPhim !== JSON.parse(currentMovie)) {
      return [];
    }

    let schedule = movieDetail.lichChieu;
    let cinemaListRaw = schedule.map((item) => ({
      name: item.thongTinRap.tenCumRap,
      code: item.thongTinRap.maRap.toString(),
    }));

    let cinemaList = cinemaListRaw.filter(
      (item, index, self) =>
        self.findIndex((itemSelf) => itemSelf.name === item.name) === index
    );

    return cinemaList;
  };

  const filterDateList = (movieDetail, currentMovie, currentCinema) => {
    if (currentCinema === '') {
      return [{ code: '', name: 'Vui lòng chọn ngày' }];
    } else if (movieDetail.maPhim !== JSON.parse(currentMovie)) {
      return [];
    }

    let schedule = movieDetail.lichChieu;
    let scheduleCinemaFiltered = schedule.filter((item, index) => {
      return item.thongTinRap.maRap.toString() === currentCinema;
    });

    let dateListRaw = scheduleCinemaFiltered.map((item, index) => ({
      name: dateFormat('dd-MM-yyyy', new Date(item.ngayChieuGioChieu)),
      code: item.ngayChieuGioChieu.slice(0, 10),
    }));

    let dateList = dateListRaw.filter(
      (item, index, self) =>
        self.findIndex((itemSelf) => itemSelf.name === item.name) === index
    );

    return dateList;
  };

  const filterSessionList = (
    movieDetail,
    currentMovie,
    currentCinema,
    currentDate
  ) => {
    if (currentDate === '') {
      return [{ code: '', name: 'Vui lòng chọn ngày' }];
    } else if (movieDetail.maPhim !== JSON.parse(currentMovie)) {
      return [];
    }

    let schedule = movieDetail.lichChieu;
    let scheduleCinemaFilter = schedule.filter((item, index) => {
      return item.thongTinRap.maRap.toString() === currentCinema;
    });

    let scheduleDateFilter = scheduleCinemaFilter.filter((item, index) => {
      return item.ngayChieuGioChieu.slice(0, 10) === currentDate;
    });

    let sessionList = scheduleDateFilter.map((item) => ({
      name: dateFormat('hh:mm', new Date(item.ngayChieuGioChieu)),
      code: item.ngayChieuGioChieu.slice(11, 20),
      maLichChieu: item.maLichChieu,
    }));

    return sessionList;
  };

  return (
    <Container maxWidth='md' className={classes.filterContainer}>
      <div
        onClick={toggleIsShowFilmList}
        className={classes.filterGroup}
        style={{ width: '30%' }}
      >
        <span className={classes.filterGroupLabel}>
          {currentMovie === ''
            ? 'Phim'
            : decodeCodeToName(filterMovieNameList(movieList), currentMovie)}
        </span>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowFilmList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowFilmList}
            DataSelectionList={filterMovieNameList(movieList)}
            handleSelectItem={handleSelectFilm}
            minWidth={'300px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowCinemaList} className={classes.filterGroup}>
        <div className={classes.filterGroupLabel}>
          {currentCinema === ''
            ? 'Rạp'
            : decodeCodeToName(
                filterCinemaList(movieDetail, currentMovie),
                currentCinema
              )}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowCinemaList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowCinemaList}
            DataSelectionList={filterCinemaList(movieDetail, currentMovie)}
            handleSelectItem={handleSelectCinema}
            minWidth={'200px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowDateList} className={classes.filterGroup}>
        <div className={classes.filterGroupLabel}>
          {currentDate === ''
            ? 'Ngày xem'
            : decodeCodeToName(
                filterDateList(movieDetail, currentMovie, currentCinema),
                currentDate
              )}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowDateList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowDateList}
            DataSelectionList={filterDateList(
              movieDetail,
              currentMovie,
              currentCinema
            )}
            handleSelectItem={handleSelectDate}
            minWidth={'100px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowSessionList} className={classes.filterGroup}>
        <div className={classes.filterGroupLabel}>
          {currentSession === ''
            ? 'Suất chiếu'
            : decodeCodeToName(
                filterSessionList(
                  movieDetail,
                  currentMovie,
                  currentCinema,
                  currentDate
                ),
                currentSession
              )}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowSessionList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowSessionList}
            DataSelectionList={filterSessionList(
              movieDetail,
              currentMovie,
              currentCinema,
              currentDate
            )}
            handleSelectItem={handleSelectSession}
            minWidth={'80px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={handleBuyTicket} className={classes.filterGroup}>
        <BuyTicketButton>MUA VÉ NGAY</BuyTicketButton>
      </div>
    </Container>
  );
}
