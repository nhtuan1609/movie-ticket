import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import './index.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.appBarColor.main,
    marginTop: '60px',
    position: 'relative',
  },
  logoContainer: {
    height: '200px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  logo: {
    height: '100%',
  },
}));

export default function FadeLoading() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img
          className={`${classes.logo} rotate-animation`}
          src={'/assets/img/logo/fade-loading-logo.png'}
          alt='web-logo'
        ></img>
      </div>
    </div>
  );
}
