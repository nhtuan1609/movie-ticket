import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import MovieLayout from './MovieLayout';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  tabHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '40px',
  },
  tabHeaderItem: {
    color: theme.palette.textColor.main,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '40px',
    textTransform: 'capitalize',
    transition: 'font-size 0.3s',
    '&:hover': {
      fontSize: '22px',
    },
    '&.Mui-selected': {
      fontSize: '22px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      '&:hover': {
        fontSize: '16px',
      },
      '&.Mui-selected': {
        fontSize: '16px',
      },
    },
  },
  tabBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabEmpty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '30px',
    fontSize: '18px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
  },
}));

export default function MovieBlock(props) {
  const classes = useStyles();
  const { movieRelease, movieUpcoming } = props;
  const [currentTabId, setCurrentTabId] = React.useState(0);

  const handleChangeTab = (event, newId) => {
    setCurrentTabId(newId);
  };

  const renderTab = (currentTabId) => {
    const tabLabel = ['Đang Chiếu', 'Sắp Chiếu'];
    const loadingTab = () => (
      <div className={classes.tabEmpty}>
        <CircularProgress />
        <div>{tabLabel[currentTabId]}...</div>
      </div>
    );

    switch (currentTabId) {
      case 0:
        if (movieRelease.length > 0) {
          return <MovieLayout movieList={movieRelease} />;
        } else {
          return loadingTab();
        }
      case 1:
        if (movieUpcoming.length > 0) {
          return <MovieLayout movieList={movieUpcoming} />;
        } else {
          return loadingTab();
        }
      default:
        return loadingTab();
    }
  };

  return (
    <div>
      <div className={classes.tabHeader}>
        <Tabs
          value={currentTabId}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChangeTab}
        >
          <Tab className={classes.tabHeaderItem} label='Đang Chiếu' />
          <Tab className={classes.tabHeaderItem} label='Sắp Chiếu' />
        </Tabs>
      </div>
      {renderTab(currentTabId)}
    </div>
  );
}

MovieBlock.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object),
};

MovieBlock.defaultProps = {
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
