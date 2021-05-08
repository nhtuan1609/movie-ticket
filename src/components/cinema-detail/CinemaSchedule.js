import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    backgroundColor: 'white',
    height: '600px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  cinemaList: {
    float: 'left',
    width: '30%',
    height: '100%',
    border: `1px solid ${theme.palette.borderColor.light}`,
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
    width: '70%',
    height: '100%',
    border: `1px solid ${theme.palette.borderColor.light}`,
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

  const handleSelectCinema = (cinemaCode) => (event) => {
    setCurrentCinemaCode(cinemaCode);
    console.log(cinemaCode);
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

  return (
    <Container maxWidth='md'>
      <div className={classes.cinemaBlockContainer}>
        <div className={classes.cinemaList}>
          {renderCinemaList(companyItem, currentCinemaCode, handleSelectCinema)}
        </div>
        <div className={classes.movieList}>
          {renderMovieList(companyItem, currentCinemaCode)}
        </div>
      </div>
    </Container>
  );
}
