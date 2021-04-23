import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop } from '@material-ui/core';
import LinkMui from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './index.css';

const useStyles = makeStyles((theme) => ({
  carouselItem: {
    position: 'relative',
    width: '100%',
    paddingTop: '42.625%',
    marginBottom: '-4px',
  },
  carouselItemBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  carouselPlayButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    overflow: 'hidden',
    borderRadius: '50%',
    border: '2px solid white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.7',
    },
  },
  carouselPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '40px !important',
    color: 'white',
  },
  sliderArrowButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    backgroundColor: 'transparent',
    color: '#bbb',
    opacity: '0.6',
    width: '100px',
    height: '100%',
    transition: 'color linear 0.2s, background-color linear 0.2s',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
  sliderDotClass: {
    bottom: '13%',
    '& li.slick-active button::before': {
      color: theme.palette.primary.main,
    },
    '& li': {
      margin: '0 2px',
      '& button::before': {
        fontSize: '14px',
        color: 'white',
        opacity: 0.8,
      },
    },
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

export default function MyCarousel(props) {
  const classes = useStyles();
  const { filmList } = props;
  const [isShowTrailerVideo, setIsShowTrailerVideo] = useState(false);
  const [trailerSrc, setTrailerSrc] = useState('');

  const handleOnLickPlayButton = (index) => (event) => {
    let currentFilm = filmList[index];
    setTrailerSrc(currentFilm.trailerSrc.concat('?autoplay=1'));
    setIsShowTrailerVideo(true);
  };

  const closeIsShowTrailerVideo = () => {
    setIsShowTrailerVideo(false);
  };

  const renderItem = (dataList) =>
    dataList.map((item, index) => (
      <div className={classes.carouselItem} key={index}>
        <LinkMui href='/'>
          <img
            className={classes.carouselItemBackground}
            src={item.backgroundSrc}
            alt={item.name}
          />
        </LinkMui>
        <div
          onClick={handleOnLickPlayButton(index)}
          className={`carousel__play-button hover-display ${classes.carouselPlayButtonContainer}`}
        >
          <PlayArrowIcon className={classes.carouselPlayButton} />
        </div>
      </div>
    ));

  function MyPrevArrow(props) {
    const { onClick } = props;
    return (
      <NavigateBeforeIcon
        className={classes.sliderArrowButton}
        style={{
          left: '0',
        }}
        onClick={onClick}
      />
    );
  }

  function MyNextArrow(props) {
    const { onClick } = props;
    return (
      <NavigateNextIcon
        className={classes.sliderArrowButton}
        style={{
          right: '0',
        }}
        onClick={onClick}
      />
    );
  }

  const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MyNextArrow />,
    prevArrow: <MyPrevArrow />,
    dotsClass: `slick-dots ${classes.sliderDotClass}`,
  };

  return (
    <div className={'carousel-container'}>
      {/* Slider Film list */}
      <Slider {...sliderSetting}>{renderItem(filmList)}</Slider>
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
              src={trailerSrc}
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

MyCarousel.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      trailerSrc: PropTypes.string,
      BackgroundSrc: PropTypes.string,
    })
  ),
};

MyCarousel.defaultProps = {
  filmList: [
    {
      name: 'Ban tay cua quy',
      trailerSrc: 'https://www.youtube.com/embed/lzMmYV_5-0A',
      backgroundSrc:
        '/assets/img/film_background/ban-tay-diet-quy-evil-expeller-16177781815781.png',
    },
    {
      name: 'Quai vat dai chien',
      trailerSrc: 'https://www.youtube.com/embed/NYH2sLid0Zc',
      backgroundSrc:
        '/assets/img/film_background/mortal-kombat-16177818818286.png',
    },
    {
      name: 'Nguoi nhan ban Seobok',
      trailerSrc: 'https://www.youtube.com/embed/eFf0nos163o',
      backgroundSrc:
        '/assets/img/film_background/nguoi-nhan-ban-seobok-16177781610725.png',
    },
  ],
};
