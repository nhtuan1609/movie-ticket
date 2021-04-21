import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {
  FilmListData,
  CinemaListData,
  DateListData,
  SessionListData,
} from './SelectionData.json';

import SelectionList from './SelectionList';

const useStyles = makeStyles((theme) => ({
  homeToolContainer: {
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
  homeToolGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: 'calc(70% / 4)',
    height: '60px',
    padding: '0 10px',
  },
  homeToolGroupLabel: {
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

export default function HomeTool() {
  const classes = useStyles();
  const [isShowFilmList, setIsShowFilmList] = React.useState(false);
  const [isShowCinemaList, setIsShowCinemaList] = React.useState(false);
  const [isShowDateList, setIsShowDateList] = React.useState(false);
  const [isShowSessionList, setIsShowSessionList] = React.useState(false);

  const [currentFilm, setCurrentFilm] = React.useState('');
  const [currentCinema, setCurrentCinema] = React.useState('');
  const [currentDate, setCurrentDate] = React.useState('');
  const [currentSession, setCurrentSession] = React.useState('');

  const filmList = FilmListData;
  const [cinemaList, setCinemaList] = React.useState([
    {
      code: '',
      name: 'Vui lòng chọn phim',
    },
  ]);
  const [dateList, setDateList] = React.useState([
    {
      code: '',
      name: 'Vui lòng chọn rạp',
    },
  ]);
  const [sessionList, setSessionList] = React.useState([
    {
      code: '',
      name: 'Vui lòng chọn ngày',
    },
  ]);

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
    let filmCode = event.target.dataset.id;
    setCurrentFilm(filmCode);

    setCurrentCinema('');
    setCinemaList(CinemaListData);

    setCurrentDate('');
    setDateList([{ code: '', name: 'Vui lòng chọn rạp' }]);

    setCurrentSession('');
    setSessionList([{ code: '', name: 'Vui lòng chọn ngày' }]);
  };

  const handleSelectCinema = (event) => {
    if (currentFilm !== '') {
      let cinemaCode = event.target.dataset.id;
      setCurrentCinema(cinemaCode);

      setCurrentDate('');
      setDateList(DateListData);

      setCurrentSession('');
      setSessionList([{ code: '', name: 'Vui lòng chọn ngày' }]);
    }
  };

  const handleSelectDate = (event) => {
    if (currentCinema !== '') {
      let dateCode = event.target.dataset.id;
      setCurrentDate(dateCode);

      setCurrentSession('');
      setSessionList(SessionListData);
    }
  };

  const handleSelectSession = (event) => {
    if (currentDate !== '') {
      let sessionCode = event.target.dataset.id;
      setCurrentSession(sessionCode);
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
      currentFilm !== '' &&
      currentCinema !== '' &&
      currentDate !== '' &&
      currentSession !== ''
    ) {
      console.log('Buy Ticket:');
      console.log('Film Code: ', currentFilm);
      console.log('Cinema Code:', currentCinema);
      console.log('Date Code: ', currentDate);
      console.log('Session Code: ', currentSession);
    }
  };

  return (
    <Container maxWidth='md' className={classes.homeToolContainer}>
      <div
        onClick={toggleIsShowFilmList}
        className={classes.homeToolGroup}
        style={{ width: '30%' }}
      >
        <span className={classes.homeToolGroupLabel}>
          {currentFilm === ''
            ? 'Phim'
            : decodeCodeToName(filmList, currentFilm)}
        </span>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowFilmList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowFilmList}
            DataSelectionList={filmList}
            handleSelectItem={handleSelectFilm}
            minWidth={'600px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowCinemaList} className={classes.homeToolGroup}>
        <div className={classes.homeToolGroupLabel}>
          {currentCinema === ''
            ? 'Rạp'
            : decodeCodeToName(cinemaList, currentCinema)}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowCinemaList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowCinemaList}
            DataSelectionList={cinemaList}
            handleSelectItem={handleSelectCinema}
            minWidth={'200px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowDateList} className={classes.homeToolGroup}>
        <div className={classes.homeToolGroupLabel}>
          {currentDate === ''
            ? 'Ngày xem'
            : decodeCodeToName(dateList, currentDate)}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowDateList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowDateList}
            DataSelectionList={dateList}
            handleSelectItem={handleSelectDate}
            minWidth={'200px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={toggleIsShowSessionList} className={classes.homeToolGroup}>
        <div className={classes.homeToolGroupLabel}>
          {currentSession === ''
            ? 'Suất chiếu'
            : decodeCodeToName(sessionList, currentSession)}
        </div>
        <KeyboardArrowDownOutlinedIcon className={classes.dropDownIcon} />
        {isShowSessionList && (
          <SelectionList
            toggleIsShowSelectionList={toggleIsShowSessionList}
            DataSelectionList={sessionList}
            handleSelectItem={handleSelectSession}
            minWidth={'200px'}
          />
        )}
      </div>
      <div className={classes.verticalSeparate}></div>
      <div onClick={handleBuyTicket} className={classes.homeToolGroup}>
        <BuyTicketButton>MUA VÉ NGAY</BuyTicketButton>
      </div>
    </Container>
  );
}
