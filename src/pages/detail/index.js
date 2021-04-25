import React, { useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { useSelector, useDispatch } from 'react-redux';
import MovieAction from '../../redux/action/movie';
import { useParams } from 'react-router-dom';

import FilmCard from './FilmCard';
import TabControl from './TabControl';

const useStyles = makeStyles((theme) => ({
  Container: {
    position: 'relative',
    backgroundColor: 'rgb(10, 32, 41)',
  },
  BackgroundContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '130%',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '66%',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '42.625%',
    },
  },
  Background: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(15px)',
  },
  BackgroundGradiant: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to top, rgb(10, 32, 41), transparent 100%)',
  },
  filmInforMain: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      top: 'calc(16vw - 60px)',
    },
    [theme.breakpoints.up('md')]: {
      top: 'calc(18vw - 160px)',
    },
  },
  filmCard: {
    maxWidth: '220px',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  filmDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
    flex: '1',
    height: '100%',
  },
  filmDetailDate: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
  filmDetailName: {
    color: theme.palette.textColor.white,
    fontSize: '24px',
    fontWeight: '500',
  },
  filmDetailInfor: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
  filmDetailButton: {
    marginTop: '30px',
  },
  cardAgeTypeAll: {
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
    marginTop: '6px',
    float: 'left',
  },
  cardAgeTypeSpecial: {
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
    marginTop: '6px',
    float: 'left',
  },
  filmRate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
  },
  filmRatePointContainer: {
    position: 'relative',
    width: '60px',
    height: '60px',
    lineHeight: '60px',
    fontSize: '30px',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {
      width: '120px',
      height: '120px',
      lineHeight: '120px',
      fontSize: '50px',
    },
  },
  filmRatePointCircle: {
    width: '100% !important',
    height: '100% !important',
    color: 'rgb(126,211,33)',
  },
  filmRatePoint: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    color: theme.palette.textColor.white,
    textAlign: 'center',
  },
  cardRateStar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '6px',
  },
  filmRateHistory: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
  filmInforSub: {
    position: 'relative',
    paddingBottom: '100px',
  },
}));

const BuyTicketButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    width: '140px',
    height: '38px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#b42a14',
    },
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: '500',
  },
})(Button);

export default function FilmInfor() {
  const classes = useStyles();
  const movieDetail = useSelector((state) => state.movie.detail);
  const { movieId: maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.fetchDetail({ maPhim }));
  }, [dispatch, maPhim]);
  console.log({ movieDetail: movieDetail });

  const renderTypeFilm = () => {
    const ageAllow = Math.floor(Math.random() * 4);
    switch (ageAllow) {
      case 1:
        return <span className={classes.cardAgeTypeSpecial}>C13</span>;
      case 2:
        return <span className={classes.cardAgeTypeSpecial}>C16</span>;
      case 3:
        return <span className={classes.cardAgeTypeSpecial}>C18</span>;
      default:
        return <span className={classes.cardAgeTypeAll}>P</span>;
    }
  };

  const renderFilmDetailInfor = () => {
    const filmTime = (90 + Math.random() * 30).toFixed(0);
    const filmIMDb = (6 + Math.random() * 4.0).toFixed(1);
    const content = `${filmTime} Phút - ${filmIMDb} IMDb`;
    return <div className={classes.filmDetailInfor}>{content}</div>;
  };

  const renderFilmRateHistory = () => {
    const filmRateTime = (100 + Math.random() * 1000).toFixed(0);
    const content = `${filmRateTime} người đánh giá`;
    return <div className={classes.filmRateHistory}>{content}</div>;
  };

  return (
    <div className={classes.Container}>
      {/* Background */}
      <div className={classes.BackgroundContainer}>
        <img
          className={classes.Background}
          src={movieDetail.hinhAnh}
          alt={movieDetail.tenPhim}
        ></img>
        <div className={classes.BackgroundGradiant}></div>
      </div>
      {/* Main infor */}
      <Container maxWidth='md' className={classes.filmInforMain}>
        <Grid container>
          {/* Film card */}
          <Grid item md={3} sm={4} xs={6}>
            <div className={classes.filmCard}>
              <FilmCard filmItem={movieDetail} />
            </div>
          </Grid>
          {/* Film name */}
          <Grid item md={6} sm={4} xs={6}>
            <div className={classes.filmDetail}>
              <div className={classes.filmDetailDate}>
                {movieDetail.ngayKhoiChieu.slice(0, 10)}
              </div>
              <div className={classes.filmDetailName}>
                {renderTypeFilm()}
                {movieDetail.tenPhim}
              </div>
              {renderFilmDetailInfor()}
              <div className={classes.filmDetailButton}>
                <BuyTicketButton>Mua Vé</BuyTicketButton>
              </div>
            </div>
          </Grid>
          {/* Film rate */}
          <Grid item md={3} sm={4} xs={12}>
            <div className={classes.filmRate}>
              <div className={classes.filmRatePointContainer}>
                <CircularProgress
                  className={classes.filmRatePointCircle}
                  variant='determinate'
                  value={movieDetail.danhGia * 10}
                />
                <div className={classes.filmRatePoint}>
                  {movieDetail.danhGia}
                </div>
              </div>
              <Rating
                name='half-rating-read'
                defaultValue={0}
                value={Math.round(movieDetail.danhGia) / 2}
                precision={0.5}
                readOnly
                classes={{
                  root: classes.cardRateStar,
                }}
              />
              <div className={classes.filmRateHistory}>
                {renderFilmRateHistory()}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* Sub infor */}
      <Container maxWidth='md' className={classes.filmInforSub}>
        <TabControl filmItem={movieDetail} />
      </Container>
    </div>
  );
}
