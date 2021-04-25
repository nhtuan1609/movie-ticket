import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop } from '@material-ui/core';
import LinkMui from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import './FilmCard.css';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: '4px',
    overflow: 'hidden',
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

export default function FilmCard(props) {
  const classes = useStyles();
  const { filmItem } = props;
  const [isShowTrailerVideo, setIsShowTrailerVideo] = useState(false);

  const openIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(true);
  };

  const closeIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(false);
  };

  return (
    <div className={`movie-card ${classes.cardContainer}`}>
      {/* Card header */}
      <div className={classes.cardHeader}>
        <div className={classes.cardImageContainer}>
          <img
            className={classes.cardImage}
            src={filmItem.hinhAnh}
            alt={filmItem.tenPhim}
          ></img>
        </div>
        <LinkMui
          className={`movie-card__hover-modal hover-display ${classes.cardHoverModal}`}
          href={`/movie/${filmItem.maPhim}`}
        ></LinkMui>
        <div
          onClick={openIsShowTrailerVideo}
          className={`movie-card__play-button hover-display ${classes.cardPlayButtonContainer}`}
        >
          <PlayArrowIcon className={classes.cardPlayButton} />
        </div>
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
              src={filmItem.trailer.concat('?autoplay=1')}
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

FilmCard.propTypes = {
  filmItem: PropTypes.shape({
    tenPhim: PropTypes.string,
    trailer: PropTypes.string,
    hinhAnh: PropTypes.string,
    danhGia: PropTypes.number,
  }),
};

FilmCard.defaultProps = {
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
