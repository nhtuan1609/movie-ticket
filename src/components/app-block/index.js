import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appBackground: {
    background: 'url(/assets/img/user/backapp.jpg)',
    backgroundSize: 'contain',
    padding: '100px',
  },
  appTitle: {
    marginTop: '140px',
    fontSize: '30px',
    fontWeight: '750',
    color: theme.palette.textColor.white,
  },
  appDescription: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
  },
  appLink: {
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.white,
    textDecoration: 'none',
    '& a': {
      color: theme.palette.textColor.white,
    },
  },
  appButton: {
    textDecoration: 'none !important',
    display: 'block',
    width: '280px',
  },
  iphoneX: {
    position: 'relative',
    margin: '40px auto',
    width: '230px',
    height: '490px',
    backgroundColor: '#7371ee',
    backgroundImage: 'linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%)',
    borderRadius: '40px',
    boxShadow:
      '0px 0px 0px 10px #1f1f1f, 0px 0px 0px 10px #191919, 0px 0px 0px 10px #111',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      top: '0px',
      width: '56%',
      height: '20px',
      backgroundColor: '#1f1f1f',
      borderRadius: '0px 0px 40px 40px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '7px',
      width: '104px',
      height: '4px',
      backgroundColor: '#f2f2f2',
      borderRadius: '10px',
    },
  },
  iphoneXSpeaker: {
    position: 'absolute',
    display: 'block',
    color: 'transparent',
    top: '0px',
    left: '50%',
    transform: 'translate(-50%, 6px)',
    height: '4px',
    width: '15%',
    backgroundColor: '#101010',
    borderRadius: '8px',
    boxShadow: 'inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2)',
  },
  iphoneXCamera: {
    position: 'absolute',
    display: 'block',
    color: 'transparent',
    left: '0',
    top: '0',
    transform: 'translate(140px, 4px)',
    width: '8px',
    height: '8px',
    backgroundColor: '#101010',
    borderRadius: '12px',
    boxShadow: 'inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2)',
    '&::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#2d4d76',
      width: '4px',
      height: '4px',
      top: '2px',
      left: '2px',
      display: 'block',
      borderRadius: '4px',
      boxShadow: 'inset 0px -2px 2px rgba(0, 0, 0, 0.5)',
    },
  },
}));

const BuyTicketButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    height: '46px',
    width: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f43f24',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: '18px',
    fontWeight: '500',
  },
})(Button);

export default function AppBlock() {
  const classes = useStyles();

  return (
    <div className={classes.appBackground}>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <p className={classes.appTitle}>
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className={classes.appDescription}>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br></br>
            <a
              href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'
              className={classes.appButton}
            >
              <BuyTicketButton>App miễn phí - Tải về ngay!</BuyTicketButton>
            </a>
            <p className={classes.appLink}>
              TIX có hai phiên bản{' '}
              <a href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197'>
                iOS
              </a>{' '}
              &{' '}
              <a href='https://play.google.com/store/apps/details?id=vn.com.vng.phim123'>
                Android
              </a>
            </p>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className={classes.iphoneX}>
              <i className={classes.iphoneXSpeaker}>Speaker</i>
              <b className={classes.iphoneXCamera}>Camera</b>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
