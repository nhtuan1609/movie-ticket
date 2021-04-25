import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './index.css';
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
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  listLoadMoreButton: {
    width: '400px',
    marginTop: '40px',
  },
}));

export default function MovieCardSlider(props) {
  const classes = useStyles();
  const { movieList } = props;
  const [limitItem, setLimitItem] = React.useState(3);

  const handleLoadMoreItems = (maxItem = 0) => () => {
    let setValue = limitItem;
    if (limitItem < maxItem) {
      setValue = limitItem + 3;
    } else if (limitItem > maxItem) {
      setValue = maxItem;
    }

    if (setValue !== limitItem) {
      setLimitItem(setValue);
    }
  };

  const renderItem = (listData, limitItem = 0, width = 'unset') => {
    let renderData = listData;
    if (limitItem > 0 && limitItem <= listData.length) {
      renderData = listData.slice(0, limitItem);
    }
    return renderData.map((item, index) => (
      <div style={{ width: width }} key={index}>
        <MovieCard key={index} movieItem={item} />
      </div>
    ));
  };

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

  const LoadMoreButton = withStyles({
    root: {
      backgroundColor: '#888',
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

  return (
    <Fragment>
      <Slider className={'movie-slider'} {...sliderSetting}>
        {renderItem(movieList)}
      </Slider>
      <div className={classes.listContainer}>
        {renderItem(movieList, limitItem, '96%')}
        <div
          onClick={handleLoadMoreItems(movieList.length)}
          className={classes.listLoadMoreButton}
        >
          <LoadMoreButton>Xem Thêm</LoadMoreButton>
        </div>
      </div>
    </Fragment>
  );
}

MovieCardSlider.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

MovieCardSlider.defaultProps = {
  movieList: [
    {
      maPhim: 4125,
      tenPhim: 'Ròm',
      biDanh: 'rom',
      trailer: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ',
      hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/rom_gp02.jpg',
      moTa:
        'Lấy bối cảnh từ một khu chung cư cũ đang chờ giải tỏa tại Sài Gòn, Ròm kể câu chuyện về cuộc sống của những người dân lao động nơi đây. Họ đều chơi số đề với hy vọng kiếm được một khoản tiền lớn để đổi đời. Ròm là cậu bé làm “cò đề” để kiếm sống qua ngày, chuyên tư vấn cho người dân những con số may mắn để họ có cơ may trúng đề. Một hôm cậu giúp bà già kia trúng đề lớn nên được mọi người tin tưởng nhưng sau nhiều lần thua cậu bị người dân mất tin tưởng',
      maNhom: 'GP02',
      ngayKhoiChieu: '2020-10-11T00:00:00',
      danhGia: 10,
    },
  ],
};
