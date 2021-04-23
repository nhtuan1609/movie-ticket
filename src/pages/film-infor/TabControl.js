import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import TabFilmInfor from './TabFilmInfor';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  tabHeader: {
    position: 'absolute',
    top: '-70px',
    left: '50%',
    height: '40px',
    width: '100%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function TabControl(props) {
  const classes = useStyles();
  const { filmItem } = props;
  const [currentTabId, setCurrentTabId] = React.useState(1);

  const handleChangeTab = (event, newId) => {
    setCurrentTabId(newId);
  };

  const renderTab = (currentTabId) => {
    const tabLabel = ['Lịch Chiếu', 'Thông Tin', 'Đánh Giá'];
    switch (currentTabId) {
      case 1:
        return <TabFilmInfor filmItem={filmItem} />;
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
    <div className={classes.container}>
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

TabControl.propTypes = {
  filmItem: PropTypes.shape({
    ngayKhoiChieu: PropTypes.string,
    daoDien: PropTypes.string,
    dienVien: PropTypes.string,
    theLoai: PropTypes.string,
    dinhDang: PropTypes.string,
    quocGia: PropTypes.string,
    moTa: PropTypes.string,
  }),
};

TabControl.defaultProps = {
  filmItem: {
    ngayKhoiChieu: '',
    daoDien: 'Simon McQuoid',
    dienVien: 'Jessica McNamee',
    theLoai: 'Hành động, giả tưởng',
    dinhDang: '2D/Digital',
    quocGia: 'Mỹ',
    moTa: '',
  },
};
