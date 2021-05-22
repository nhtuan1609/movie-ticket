import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
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
  horizontalSeparate: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

export default function CinemaSelection(props) {
  const classes = useStyles();
  const {
    cinemaList,
    currentCompanyCode,
    currentCinemaCode,
    handleSelectCinema,
  } = props;

  const renderCinemaList = (
    cinemaList,
    currentCompanyCode,
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
            src='/assets/img/cinema/lotte/lotte-cinema-cantavil.jpg'
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
            <a
              className={classes.cinemaItemLink}
              href={`/cinema/${currentCompanyCode}/${item.maCumRap}`}
            >
              [chi tiết]
            </a>
          </div>
        </div>
        <div className={classes.horizontalSeparate}></div>
      </div>
    ));
  };

  return (
    <div className={classes.container}>
      {renderCinemaList(
        cinemaList,
        currentCompanyCode,
        currentCinemaCode,
        handleSelectCinema
      )}
    </div>
  );
}
