import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    whiteSpace: 'nowrap',
    width: '100%',
    height: '100%',
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
}));

export default function DateSelection(props) {
  const classes = useStyles();
  const { currentSelectedDateCode, handleSelectDate } = props;

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
    <div className={classes.container} id='pick-day'>
      {dateList.map((item, index) => (
        <div
          className={
            item === currentSelectedDateCode
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
}
