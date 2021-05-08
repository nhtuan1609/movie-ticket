import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import CinemaIntro from '../../components/cinema-intro';
import CinemaDetail from '../../components/cinema-detail';
import { companyList } from './CompanyList.json';

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

export default function CinemaDetailPage() {
  const classes = useStyles();
  const { cinemaId: cinemaCode } = useParams();

  const companyItem = companyList.find(
    (item) => item.code === cinemaCode.slice(0, 4)
  );

  const cinemaItem = companyItem.cinemaList.find(
    (item) => item.code === cinemaCode
  );

  return (
    <div className={classes.Container}>
      {/* Background */}
      <div className={classes.BackgroundContainer}>
        <img
          className={classes.Background}
          src={cinemaItem.imageSrc}
          alt={cinemaItem.location}
        ></img>
        <div className={classes.BackgroundGradiant}></div>
      </div>
      {/* Cinema intro */}
      <Container maxWidth='md' className={classes.filmInforMain}>
        <CinemaIntro cinemaItem={cinemaItem} />
      </Container>
      {/* Cinema detail */}
      <Container maxWidth='md' className={classes.filmInforSub}>
        <CinemaDetail companyItem={companyItem} cinemaItem={cinemaItem} />
      </Container>
    </div>
  );
}
