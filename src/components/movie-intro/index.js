import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import dateFormat from 'date-format';

import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
  movieCard: {
    maxWidth: '220px',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  movieInforGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
    flex: '1',
    height: '100%',
  },
  movieInforDate: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
  movieInforName: {
    color: theme.palette.textColor.white,
    fontSize: '24px',
    fontWeight: '500',
  },
  movieInforLength: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
  movieInforButton: {
    marginTop: '30px',
  },
  movieAgeTypeAll: {
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
  movieAgeTypeSpecial: {
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
  movieRateGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
  },
  movieRatePointContainer: {
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
  movieRatePointCircle: {
    width: '100% !important',
    height: '100% !important',
    color: 'rgb(126,211,33)',
  },
  movieRatePoint: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    color: theme.palette.textColor.white,
    textAlign: 'center',
  },
  movieRateStar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '6px',
  },
  movieRateTime: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
}));

const BuyTicketButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    width: '100%',
    maxWidth: '140px',
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

export default function MovieIntro(props) {
  const classes = useStyles();
  const { movieItem } = props;

  const renderMovieType = () => {
    const ageAllow = Math.floor(Math.random() * 4);
    switch (ageAllow) {
      case 1:
        return <span className={classes.movieAgeTypeSpecial}>C13</span>;
      case 2:
        return <span className={classes.movieAgeTypeSpecial}>C16</span>;
      case 3:
        return <span className={classes.movieAgeTypeSpecial}>C18</span>;
      default:
        return <span className={classes.movieAgeTypeAll}>P</span>;
    }
  };

  const renderMovieLength = () => {
    const filmTime = (90 + Math.random() * 30).toFixed(0);
    const filmIMDb = (6 + Math.random() * 4.0).toFixed(1);
    const content = `${filmTime} Phút - ${filmIMDb} IMDb`;
    return <div className={classes.movieInforLength}>{content}</div>;
  };

  const renderMovieRateTime = () => {
    const filmRateTime = (100 + Math.random() * 1000).toFixed(0);
    const content = `${filmRateTime} người đánh giá`;
    return <div className={classes.movieRateTime}>{content}</div>;
  };

  return (
    <Grid container>
      {/* Movie card */}
      <Grid item md={3} sm={4} xs={6}>
        <div className={classes.movieCard}>
          <MovieCard movieItem={movieItem} />
        </div>
      </Grid>
      {/* Movie infor */}
      <Grid item md={6} sm={4} xs={6}>
        <div className={classes.movieInforGroup}>
          <div className={classes.movieInforDate}>
            {dateFormat('dd.MM.yyyy', new Date(movieItem.ngayKhoiChieu))}
          </div>
          <div className={classes.movieInforName}>
            {renderMovieType()}
            {movieItem.tenPhim}
          </div>
          {renderMovieLength()}
          <div className={classes.movieInforButton}>
            <BuyTicketButton>Mua Vé</BuyTicketButton>
          </div>
        </div>
      </Grid>
      {/* Movie rate */}
      <Grid item md={3} sm={4} xs={12}>
        <div className={classes.movieRateGroup}>
          <div className={classes.movieRatePointContainer}>
            <CircularProgress
              className={classes.movieRatePointCircle}
              variant='determinate'
              value={movieItem.danhGia * 10}
            />
            <div className={classes.movieRatePoint}>{movieItem.danhGia}</div>
          </div>
          <Rating
            name='half-rating-read'
            defaultValue={0}
            value={Math.round(movieItem.danhGia) / 2}
            precision={0.5}
            readOnly
            classes={{
              root: classes.movieRateStar,
            }}
          />
          {renderMovieRateTime()}
        </div>
      </Grid>
    </Grid>
  );
}

MovieIntro.propTypes = {
  movieItem: PropTypes.shape({
    tenPhim: PropTypes.string,
    trailer: PropTypes.string,
    hinhAnh: PropTypes.string,
    danhGia: PropTypes.number,
  }),
};

MovieIntro.defaultProps = {
  movieItem: {
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
