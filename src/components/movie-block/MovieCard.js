import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Modal, Backdrop } from '@material-ui/core';
import LinkMui from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

import './MovieCard.css';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: 'white',
    margin: '0 10px 40px 10px',
  },
  cardHeader: {
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  cardImageContainer: {
    position: 'relative',
    paddingTop: '153%',
  },
  cardImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  cardHoverModal: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,05));',
    zIndex: '1',
  },
  cardPlayButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50px',
    height: '50px',
    overflow: 'hidden',
    borderRadius: '50%',
    border: '2px solid white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.7',
    },
    zIndex: '1',
  },
  cardPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '26px !important',
    color: 'white',
  },
  cardRatePointContainer: {
    width: '54px',
    height: '40px',
    backgroundColor: 'rgba(54, 67, 87, 0.8)',
    position: 'absolute',
    top: '12px',
    right: '12px',
    borderRadius: '4px',
    textAlign: 'center',
  },
  cardRatePoint: {
    fontSize: '20px',
    fontWeight: '500',
    color: 'white',
    height: '20px',
    lineHeight: '20px',
    margin: '2px 0 4px 0',
  },
  cardRateStar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
  },
  cardBody: {
    position: 'relative',
  },
  cardInforContainer: {
    paddingTop: '10px',
  },
  cardNameFilm: {
    width: '100%',
    height: '50px',
    color: theme.palette.textColor.main,
    fontSize: '18px',
    fontWeight: '600',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardAgeTypeAll: {
    minWidth: '34px',
    lineHeight: '24px',
    textAlign: 'center',
    backgroundColor: 'rgb(0,172,77)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    padding: '0 4px',
    borderRadius: '4px',
    marginRight: '6px',
    marginTop: '0px',
    float: 'left',
  },
  cardAgeTypeSpecial: {
    minWidth: '34px',
    lineHeight: '24px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    padding: '0 4px',
    borderRadius: '4px',
    marginRight: '6px',
    marginTop: '0px',
    float: 'left',
  },
  cardInforFilm: {
    color: theme.palette.textColor.light,
    fontSize: '12px',
    fontWeight: '500',
  },
  cardBuyButton: {
    position: 'absolute',
    top: '10px',
    left: '0',
  },
  modalContent: {
    position: 'absolute',
    top: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    outline: 'none !important',
    [theme.breakpoints.up('md')]: {
      top: '50%',
      left: 'calc(50% - 8px)',
      transform: 'translate(-50%, -50%)',
    },
  },
  modalCloseButtonContainer: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translate(-50%, -80%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: '1',
    '&:hover': {
      opacity: '0.8',
    },
    [theme.breakpoints.up('md')]: {
      top: '0',
      left: 'unset',
      right: '0',
      transform: 'translate(50%, -50%)',
    },
  },
  modalCloseButton: {
    fontSize: '30px',
    color: 'white',
  },
  modalTrailerContainer: {
    position: 'relative',
    paddingTop: '56.25%',
    height: '100px',
    width: '100vw',
    maxWidth: '900px',
  },
  modalTrailer: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
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
    textTransform: 'capitalize',
    fontSize: '18px',
    fontWeight: '500',
  },
})(Button);

export default function MovieCard(props) {
  const classes = useStyles();
  const { movieItem } = props;
  const [isShowTrailerVideo, setIsShowTrailerVideo] = useState(false);

  const openIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(true);
  };

  const closeIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(false);
  };

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

  const renderFilmInfor = () => {
    const filmTime = (90 + Math.random() * 30).toFixed(0);
    const filmIMDb = (6 + Math.random() * 4.0).toFixed(1);
    const content = `${filmTime} Phút - ${filmIMDb} IMDb`;
    return <div className={classes.cardInforFilm}>{content}</div>;
  };

  return (
    <div className={`movie-card ${classes.cardContainer}`}>
      {/* Card header */}
      <div className={classes.cardHeader}>
        <div className={classes.cardImageContainer}>
          <img
            className={classes.cardImage}
            src={movieItem.hinhAnh}
            alt={movieItem.tenPhim}
          ></img>
        </div>
        <LinkMui
          className={`movie-card__hover-modal hover-display ${classes.cardHoverModal}`}
          href={`/movie/${movieItem.maPhim}`}
        ></LinkMui>
        <div
          onClick={openIsShowTrailerVideo}
          className={`movie-card__play-button hover-display ${classes.cardPlayButtonContainer}`}
        >
          <PlayArrowIcon className={classes.cardPlayButton} />
        </div>
        <div className={classes.cardRatePointContainer}>
          <div className={classes.cardRatePoint}>{movieItem.danhGia}</div>
          <Rating
            name='half-rating-read'
            defaultValue={0}
            value={Math.round(movieItem.danhGia) / 2}
            precision={0.5}
            readOnly
            classes={{
              root: classes.cardRateStar,
            }}
          />
        </div>
      </div>
      {/* Card body */}
      <div className={classes.cardBody}>
        {/* Card infor */}
        <div
          className={`movie-card__infor hover-hidden ${classes.cardInforContainer}`}
        >
          <div className={classes.cardNameFilm}>
            {renderTypeFilm()}
            {movieItem.tenPhim}
          </div>
          {renderFilmInfor()}
        </div>
        {/* Buy button */}
        <LinkMui href={`/movie/${movieItem.maPhim}`}>
          <BuyTicketButton
            className={`movie-card__buy-button hover-display ${classes.cardBuyButton}`}
          >
            MUA VÉ
          </BuyTicketButton>
        </LinkMui>
      </div>
      {/* Trailer */}
      <Modal
        open={isShowTrailerVideo}
        onClose={closeIsShowTrailerVideo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        {/* Trailer container */}
        <div className={classes.modalContent}>
          {/* Close trailer button */}
          <div
            onClick={closeIsShowTrailerVideo}
            className={classes.modalCloseButtonContainer}
          >
            <CloseIcon className={classes.modalCloseButton} />
          </div>
          {/* Trailer video */}
          <div className={classes.modalTrailerContainer}>
            <iframe
              className={classes.modalTrailer}
              src={movieItem.trailer.concat('?autoplay=1')}
              title='YouTube video player'
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
}

MovieCard.propTypes = {
  movieItem: PropTypes.shape({
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

MovieCard.defaultProps = {
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
