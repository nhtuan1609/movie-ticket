import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import MovieAction from '../../redux/action/movie';
import { useParams } from 'react-router-dom';

import MovieIntro from '../../components/movie-intro';
import MovieDetail from '../../components/movie-detail';

const useStyles = makeStyles((theme) => ({
  Container: {
    position: 'relative',
    backgroundColor: 'rgb(10, 32, 41)',
  },
  BackgroundContainer: {
    position: 'relative',
    height: 'fit-content',
    width: '100%',
    paddingTop: '120vw',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '52%',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '34%',
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
  filmInforSub: {
    position: 'relative',
    paddingBottom: '100px',
  },
}));

export default function FilmInfor() {
  const classes = useStyles();
  const movieDetail = useSelector((state) => state.movie.detail);
  const { movieId: maPhim } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieAction.fetchDetail({ maPhim }));
  }, [dispatch, maPhim]);
  if (movieDetail.maPhim !== JSON.parse(maPhim)) return <p>Loading..</p>;
  console.log({ movieDetail: movieDetail });

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
      {/* Movie intro */}
      <Container maxWidth='md' className={classes.filmInforMain}>
        <MovieIntro movieItem={movieDetail} />
      </Container>
      {/* Movie detail */}
      <Container maxWidth='md' className={classes.filmInforSub}>
        <MovieDetail movieItem={movieDetail} />
      </Container>
    </div>
  );
}
