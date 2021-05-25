import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import MovieInfor from './MovieInfor';
import MovieSchedule from './MovieSchedule';
import MovieReview from './MovieReview';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40px',
    paddingBottom: '20px',
  },
  tabHeaderItem: {
    color: theme.palette.textColor.white,
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '40px',
    textTransform: 'capitalize',
    transition: 'font-size 0.3s',
    '&:hover': {
      fontSize: '20px',
    },
    '&.Mui-selected': {
      fontSize: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      '&:hover': {
        fontSize: '14px',
      },
      '&.Mui-selected': {
        fontSize: '14px',
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

export default function MovieDetail(props) {
  const classes = useStyles();
  const { movieItem } = props;
  const [currentTabId, setCurrentTabId] = React.useState(0);

  const handleChangeTab = (event, newId) => {
    setCurrentTabId(newId);
  };

  const renderTab = (currentTabId) => {
    const tabLabel = ['Lịch Chiếu', 'Thông Tin', 'Đánh Giá'];
    switch (currentTabId) {
      case 0:
        return <MovieSchedule movieItem={movieItem} />;
      case 1:
        return <MovieInfor movieItem={movieItem} />;
      case 2:
        return <MovieReview />;
      default:
        return (
          <div className={classes.tabEmpty}>
            <CircularProgress />
            <div>{tabLabel[currentTabId]}...</div>
          </div>
        );
    }
  };

  return (
    <div className={classes.container} id='movie-detail'>
      <div className={classes.tabHeader}>
        <Tabs
          value={currentTabId}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChangeTab}
        >
          <Tab className={classes.tabHeaderItem} label='Lịch Chiếu' />
          <Tab className={classes.tabHeaderItem} label='Thông Tin' />
          <Tab className={classes.tabHeaderItem} label='Đánh Giá' />
        </Tabs>
      </div>
      {renderTab(currentTabId)}
    </div>
  );
}

MovieDetail.propTypes = {
  movieItem: PropTypes.shape({
    ngayKhoiChieu: PropTypes.string,
    daoDien: PropTypes.string,
    dienVien: PropTypes.string,
    theLoai: PropTypes.string,
    dinhDang: PropTypes.string,
    quocGia: PropTypes.string,
    moTa: PropTypes.string,
  }),
};

MovieDetail.defaultProps = {
  movieItem: {
    ngayKhoiChieu: '',
    daoDien: 'Simon McQuoid',
    dienVien: 'Jessica McNamee',
    theLoai: 'Hành động, giả tưởng',
    dinhDang: '2D/Digital',
    quocGia: 'Mỹ',
    moTa: '',
  },
};
