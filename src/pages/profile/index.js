import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

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
  profileContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  profileAvatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileAvatar: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
  },
  profileName: {
    fontSize: '26px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
  },
  profileDetailContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  detailGroup: {
    display: 'flex',
    fontSize: '16px',
    color: theme.palette.textColor.white,
  },
  detailLabel: {
    width: '160px',
    fontWeight: '500',
    margin: '10px 0',
  },
  detailContent: {
    margin: '10px 0',
    textAlign: 'justify',
  },
}));

export default function ProfilePage() {
  const classes = useStyles();
  const userInfor = useSelector((state) => state.user.userInfor);

  return (
    <div className={classes.Container}>
      {/* Background */}
      <div className={classes.BackgroundContainer}>
        <img
          className={classes.Background}
          src={'/assets/img/user/background.jfif'}
          alt={'profile-background'}
        ></img>
        <div className={classes.BackgroundGradiant}></div>
      </div>
      {/* Profile */}
      <Container maxWidth='md' className={classes.profileContainer}>
        <Grid container>
          {/* Avatar */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.profileAvatarContainer}
          >
            <img
              className={classes.profileAvatar}
              src={'/assets/img/user/default_avatar.png'}
              alt='avatar'
            ></img>
            <p className={classes.profileName}>{userInfor.hoTen}</p>
          </Grid>
          {/* Detail */}
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            className={classes.profileDetailContainer}
          >
            <div className={classes.detailGroup}>
              <p className={classes.detailLabel}>Số điện thoại</p>
              <p className={classes.detailContent}>{userInfor.soDT}</p>
            </div>
            <div className={classes.detailGroup}>
              <p className={classes.detailLabel}>Email</p>
              <p className={classes.detailContent}>{userInfor.email}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
