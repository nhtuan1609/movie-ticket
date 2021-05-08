import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { companyList } from './CompanyList.json';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    height: '1000px',
    backgroundColor: 'white',
    paddingTop: '100px',
    paddingBottom: '60px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  companyList: {
    float: 'left',
    width: '92px',
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

export default function CinemaBlock() {
  const classes = useStyles();
  const [currentCompanyCode, setCurrentCompanyCode] = React.useState('0001');
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState('0001-01');

  const handleSelectCompany = (companyCode) => () => {
    setCurrentCompanyCode(companyCode);
    setCurrentCinemaCode(companyCode.concat('-01'));
  };

  const handleSelectCinema = (cinemaCode) => (event) => {
    setCurrentCinemaCode(cinemaCode);
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
          <img
            className={classes.companyItemLogo}
            src={item.logoSrc}
            alt={item.name}
          ></img>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  const renderCinemaList = (
    companyList,
    currentCompanyCode,
    currentCinemaCode,
    handleSelectCinema
  ) => {
    let currentCompanyItem = companyList.find(
      (item) => item.code === currentCompanyCode
    );
    let currentCinemaList = currentCompanyItem.cinemaList;

    return currentCinemaList.map((item, index) => {
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
              <a
                className={classes.cinemaItemLink}
                href={`/cinema/${item.code}`}
              >
                [chi tiết]
              </a>
            </div>
          </div>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  const renderMovieList = (
    companyList,
    currentCompanyCode,
    currentCinemaCode
  ) => {
    let currentCompanyItem = companyList.find(
      (item) => item.code === currentCompanyCode
    );

    let currentCinemaItem = currentCompanyItem.cinemaList.find(
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
        <div className={classes.companyList}>
          {renderCompanyList(
            companyList,
            currentCompanyCode,
            handleSelectCompany
          )}
        </div>
        <div className={classes.cinemaList}>
          {renderCinemaList(
            companyList,
            currentCompanyCode,
            currentCinemaCode,
            handleSelectCinema
          )}
        </div>
        <div className={classes.movieList}>
          {renderMovieList(companyList, currentCompanyCode, currentCinemaCode)}
        </div>
      </div>
    </Container>
  );
}
