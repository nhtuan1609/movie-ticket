import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

import NavHeader from '../../components/header';
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

export default function FilmInfor(props) {
  const classes = useStyles();
  const { filmItem } = props;
  const [currentLocation, setCurrentLocation] = React.useState('Hồ Chí Minh');
  const isLogin = false;

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
    <div>
      <NavHeader
        isLogin={isLogin}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <Box marginTop='60px'></Box>
      {/* Film infor page */}
      <div className={classes.Container} id='thong-tin'>
        {/* Background */}
        <div className={classes.BackgroundContainer}>
          <img
            className={classes.Background}
            src={filmItem.hinhAnh}
            alt={filmItem.tenPhim}
          ></img>
          <div className={classes.BackgroundGradiant}></div>
        </div>
        {/* Main infor */}
        <Container maxWidth='md' className={classes.filmInforMain}>
          <Grid container>
            {/* Film card */}
            <Grid item md={3} sm={4} xs={6}>
              <div className={classes.filmCard}>
                <FilmCard filmItem={filmItem} />
              </div>
            </Grid>
            {/* Film name */}
            <Grid item md={6} sm={4} xs={6}>
              <div className={classes.filmDetail}>
                <div className={classes.filmDetailDate}>
                  {filmItem.ngayKhoiChieu.slice(0, 10)}
                </div>
                <div className={classes.filmDetailName}>
                  {renderTypeFilm()}
                  {filmItem.tenPhim}
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
                    value={filmItem.danhGia * 10}
                  />
                  <div className={classes.filmRatePoint}>
                    {filmItem.danhGia}
                  </div>
                </div>
                <Rating
                  name='half-rating-read'
                  defaultValue={filmItem.danhGia / 2.0}
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
          <TabControl filmItem={filmItem} />
        </Container>
      </div>
    </div>
  );
}

FilmInfor.propTypes = {
  filmItem: PropTypes.shape({
    maPhim: PropTypes.number,
    tenPhim: PropTypes.string,
    biDanh: PropTypes.string,
    trailer: PropTypes.string,
    hinhAnh: PropTypes.string,
    moTa: PropTypes.string,
    maNhom: PropTypes.string,
    ngayKhoiChieu: PropTypes.string,
    danhGia: PropTypes.number,
  }),
};

FilmInfor.defaultProps = {
  filmItem: {
    maPhim: 1315,
    tenPhim: 'Lừa Đểu Gặp Lừa Đảo',
    biDanh: 'lua-deu-gap-lua-dao',
    trailer: 'https://www.youtube.com/embed/T36HGZagV5w',
    hinhAnh:
      'http://movie0706.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp02.jpg',
    moTa:
      'Lừa Đểu Gặp Lừa Đảo xoay quanh lần gặp gỡ "oan gia" giữa siêu lừa đảo Tower cùng cô nàng bị lừa tình Ina, cả 2 sẽ cùng hợp tác trong phi vụ "lừa lại tên lừa đểu" Petch - tên bạn trai bội bạc của Ina bằng những chiêu trò lừa đảo không hồi kết.',
    maNhom: 'GP02',
    ngayKhoiChieu: '2021-02-24T00:00:00',
    danhGia: 10,
  },
};
