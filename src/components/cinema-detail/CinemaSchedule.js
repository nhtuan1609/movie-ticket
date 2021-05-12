import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    backgroundColor: 'white',
    height: '600px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  cinemaList: {
    float: 'left',
    width: '32%',
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
    width: '68%',
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
  pickDayContainer: {
    whiteSpace: 'nowrap',
    height: '90px',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
    overflowX: 'scroll',
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
      backgroundColor: '#e8e3e3',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
    },
  },
  pickDayItem: {
    display: 'inline-block',
    width: '84px',
    height: '84px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    cursor: 'pointer',
    userSelect: 'none',
  },
  pickDayItemHightlight: {
    display: 'inline-block',
    width: '84px',
    height: '84px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    userSelect: 'none',
  },
  pickDayItemDay: {
    fontSize: '16px',
    marginTop: '16px',
    marginBottom: '0',
  },
  pickDayItemDate: {
    fontSize: '22px',
    marginTop: '0',
    marginBottom: '16px',
  },
  movieListNotify: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
    textAlign: 'center',
  },
  horizontalSeparate: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

export default function CinemaSchedule(props) {
  const classes = useStyles();
  const { companyItem, cinemaItem } = props;
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState(
    cinemaItem.code
  );
  const [currentDateCode, setCurrentDateCode] = React.useState(() => {
    let today = new Date();
    return today.toJSON().slice(0, 10);
  });

  const handleSelectCinema = (cinemaCode) => () => {
    setCurrentCinemaCode(cinemaCode);

    let today = new Date();
    setCurrentDateCode(today.toJSON().slice(0, 10));

    let slider = document.querySelector('#pick-day');
    if (slider !== null) {
      slider.scrollLeft = 0;
    }
  };

  const handleSelectDate = (dateCode) => (event) => {
    setCurrentDateCode(dateCode);
  };

  const renderCinemaList = (
    companyItem,
    currentCinemaCode,
    handleSelectCinema
  ) => {
    let firstCinemaItem = companyItem.cinemaList.find((item) => {
      return item.code === currentCinemaCode;
    });
    let othersCinemaItem = companyItem.cinemaList.filter(
      (item) => item.code !== currentCinemaCode
    );

    let cinemaList = [firstCinemaItem, ...othersCinemaItem];

    return cinemaList.map((item, index) => {
      return (
        <div
          className={
            item.code === currentCinemaCode
              ? classes.cinemaItemContainerHighlight
              : classes.cinemaItemContainer
          }
          key={index}
          onClick={handleSelectCinema(item.code)}
        >
          <div className={classes.cinemaItem}>
            <img
              className={classes.cinemaItemImage}
              src={item.imageSrc}
              alt={item.name}
            ></img>
            <div className={classes.cinemaItemInfor}>
              <span className={classes.cinemaItemInforName}>
                <span className={classes.cinemaItemInforNameHighlight}>
                  {item.company}
                </span>
                - {item.location}
              </span>
              <span className={classes.cinemaItemInforAddress}>
                {item.address}
              </span>
            </div>
          </div>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  const renderMovieList = (companyItem, currentCinemaCode) => {
    let currentCinemaItem = companyItem.cinemaList.find(
      (item) => item.code === currentCinemaCode
    );

    return (
      <p className={classes.movieListNotify}>
        {currentCinemaItem.company} - {currentCinemaItem.location} hiện tại
        không có suất chiếu
      </p>
    );
  };

  const renderPickDay = (currentDateCode, handleSelectDate) => {
    const dayOfWeek = [
      'Chủ nhật',
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
    ];
    let today = new Date();
    let dateList = [];
    for (var i = 0; i < 14; i++) {
      let jsonDate = today.toJSON().slice(0, 10);
      dateList.push(jsonDate);
      today.setDate(today.getDate() + 1);
    }

    const getVNDay = (dateString) => {
      let date = new Date(dateString);
      return dayOfWeek[date.getDay()];
    };

    const getDate = (dateString) => {
      let date = new Date(dateString);
      let dateNumber = date.getDate();
      if (dateNumber < 10) {
        return '0'.concat(dateNumber.toString());
      } else {
        return dateNumber.toString();
      }
    };

    return (
      <div className={classes.pickDayContainer} id='pick-day'>
        {dateList.map((item, index) => (
          <div
            className={
              item === currentDateCode
                ? classes.pickDayItemHightlight
                : classes.pickDayItem
            }
            onClick={handleSelectDate(item)}
            key={index}
          >
            <p className={classes.pickDayItemDay}>{getVNDay(item)}</p>
            <p className={classes.pickDayItemDate}>{getDate(item)}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container maxWidth='md'>
      <div className={classes.cinemaBlockContainer}>
        <div className={classes.cinemaList}>
          {renderCinemaList(companyItem, currentCinemaCode, handleSelectCinema)}
        </div>
        <div className={classes.movieList}>
          {renderPickDay(currentDateCode, handleSelectDate)}
          {renderMovieList(companyItem, currentCinemaCode)}
        </div>
      </div>
    </Container>
  );
}
