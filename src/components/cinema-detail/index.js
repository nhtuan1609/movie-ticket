import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import CinemaInfor from './CinemaInfor';
import CinemaSchedule from './CinemaSchedule';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: '20px',
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

export default function CinemaDetail(props) {
  const classes = useStyles();
  const { companyItem, cinemaItem } = props;
  const [currentTabId, setCurrentTabId] = React.useState(0);

  const handleChangeTab = (event, newId) => {
    setCurrentTabId(newId);
  };

  const renderTab = (currentTabId) => {
    const tabLabel = ['Lịch Chiếu', 'Thông Tin', 'Đánh Giá'];
    switch (currentTabId) {
      case 0:
        return (
          <CinemaSchedule companyItem={companyItem} cinemaItem={cinemaItem} />
        );
      case 1:
        return <CinemaInfor cinemaItem={cinemaItem} />;
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
    <div className={classes.container} id='cinema-detail'>
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

CinemaDetail.propTypes = {
  cinemaItem: PropTypes.shape({
    code: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    imageSrc: PropTypes.number,
  }),
};

CinemaDetail.defaultProps = {
  cinemaItem: {
    code: '0001-01',
    company: 'BHD Star',
    location: 'Bitexco',
    address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
    imageSrc: '/assets/img/cinema/bhd-star/bhd-star-bitexco.png',
  },
};
