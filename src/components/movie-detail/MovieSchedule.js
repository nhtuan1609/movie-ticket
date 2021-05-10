import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { companyList } from './CompanyList.json';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    backgroundColor: 'white',
    height: '700px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  companyList: {
    float: 'left',
    width: '30%',
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
      '& p': {
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
    '& p': {
      opacity: '1',
    },
  },
  companyItemWrap: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  companyItemLogo: {
    width: '50px',
    height: '50px',
    opacity: '0.6',
  },
  companyItemName: {
    marginLeft: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
    opacity: '0.6',
  },
  movieList: {
    float: 'left',
    width: '70%',
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
    height: '86px',
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
    width: '82px',
    height: '82px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.light,
    cursor: 'pointer',
    userSelect: 'none',
  },
  pickDayItemHightlight: {
    display: 'inline-block',
    width: '82px',
    height: '82px',
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

export default function CinemaSchedule() {
  const classes = useStyles();
  const [currentCompanyCode, setCurrentCompanyCode] = React.useState('0001');
  const [currentDateCode, setCurrentDateCode] = React.useState(() => {
    let today = new Date();
    return today.toJSON().slice(0, 10);
  });

  const handleSelectCompany = (companyCode) => () => {
    setCurrentCompanyCode(companyCode);

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

  const renderCompanyList = (
    companyList,
    currentCompanyCode,
    handleSelectCompany
  ) => {
    return companyList.map((item, index) => {
      return (
        <div
          className={
            item.code === currentCompanyCode
              ? classes.companyItemHightligh
              : classes.companyItem
          }
          key={index}
          onClick={handleSelectCompany(item.code)}
        >
          <div className={classes.companyItemWrap}>
            <img
              className={classes.companyItemLogo}
              src={item.logoSrc}
              alt={item.name}
            ></img>
            <p className={classes.companyItemName}>{item.name}</p>
          </div>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  const renderMovieList = () => {
    return (
      <p className={classes.movieListNotify}>Hiện tại không có suất chiếu</p>
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
        <div className={classes.companyList}>
          {renderCompanyList(
            companyList,
            currentCompanyCode,
            handleSelectCompany
          )}
        </div>
        <div className={classes.movieList}>
          {renderPickDay(currentDateCode, handleSelectDate)}
          {renderMovieList()}
        </div>
      </div>
    </Container>
  );
}
