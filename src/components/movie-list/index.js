import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './index.css';
import { movieList } from './MovieListData.json';
import MovieCard from './MovieCard';

const useStyles = makeStyles((theme) => ({
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
}));

export default function MovieCardSlider() {
  const classes = useStyles();

  const renderItem = (listData) =>
    listData.map((item, index) => {
      return (
        <div>
          <MovieCard key={index} movieItem={item} />
        </div>
      );
    });

  function MyPrevArrow(props) {
    const { onClick } = props;
    return (
      <NavigateBeforeIcon
        className={classes.sliderArrowButton}
        style={{
          left: '-100px',
          top: '380px',
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
          right: '-100px',
          top: '380px',
        }}
        onClick={onClick}
      />
    );
  }

  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <MyNextArrow />,
    prevArrow: <MyPrevArrow />,
    dotsClass: `slick-dots ${classes.sliderDotClass}`,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  };

  return (
    <Slider className={'movie-slider'} {...sliderSetting}>
      {renderItem(movieList)}
    </Slider>
  );
}
