import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './MovieLayout.css';
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
    marginTop: '10px',
  },
  scrollMarkerContainer: {
    position: 'relative',
  },
  scrollMarker: {
    position: 'absolute',
    top: '-70px',
    left: '0',
  },
}));

export default function MovieLayout(props) {
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

    var elementMarker = document.querySelector('#movie-block-scroll');
    if (elementMarker !== null) {
      elementMarker.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
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

  const LoadMoreButton = withStyles({
    root: {
      backgroundColor: 'transparent',
      borderRadius: '4px',
      border: '1px solid #aaa',
      color: '#aaa',
      height: '36px',
      width: '120px',
      cursor: 'pointer',
      '&:hover': {
        border: 'none',
        backgroundColor: '#f43f24',
        color: 'white',
      },
    },
    label: {
      textTransform: 'upcase',
      fontSize: '14px',
      fontWeight: '500',
    },
  })(Button);

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
    <div>
      <Slider className={'movie-slider'} {...sliderSetting}>
        {renderItem(movieList)}
      </Slider>
      <div className={classes.listContainer}>
        {renderItem(movieList, limitItem, '96%')}
        <div className={classes.scrollMarkerContainer}>
          <div className={classes.scrollMarker} id='movie-block-scroll'></div>
        </div>
        {limitItem < movieList.length && (
          <div
            onClick={handleLoadMoreItems(movieList.length)}
            className={classes.listLoadMoreButton}
          >
            <LoadMoreButton>Xem Th??m</LoadMoreButton>
          </div>
        )}
      </div>
    </div>
  );
}

MovieLayout.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

MovieLayout.defaultProps = {
  movieList: [
    {
      maPhim: 4125,
      tenPhim: 'R??m',
      biDanh: 'rom',
      trailer: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ',
      hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/rom_gp02.jpg',
      moTa:
        'L???y b???i c???nh t??? m???t khu chung c?? c?? ??ang ch??? gi???i t???a t???i S??i G??n, R??m k??? c??u chuy???n v??? cu???c s???ng c???a nh???ng ng?????i d??n lao ?????ng n??i ????y. H??? ?????u ch??i s??? ????? v???i hy v???ng ki???m ???????c m???t kho???n ti???n l???n ????? ?????i ?????i. R??m l?? c???u b?? l??m ???c?? ???????? ????? ki???m s???ng qua ng??y, chuy??n t?? v???n cho ng?????i d??n nh???ng con s??? may m???n ????? h??? c?? c?? may tr??ng ?????. M???t h??m c???u gi??p b?? gi?? kia tr??ng ????? l???n n??n ???????c m???i ng?????i tin t?????ng nh??ng sau nhi???u l???n thua c???u b??? ng?????i d??n m???t tin t?????ng',
      maNhom: 'GP02',
      ngayKhoiChieu: '2020-10-11T00:00:00',
      danhGia: 10,
    },
  ],
};
