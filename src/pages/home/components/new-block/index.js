import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import FilmNewLayout from './FilmNewLayout';
import ReviewNewLayout from './ReviewNewLayout';
import PromoteNewLayout from './PromoteNewLayout';

import { filmNewList, reviewNewList, promoteNewList } from './NewList.json';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    paddingTop: '30px',
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
      fontSize: '14px',
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

export default function NewsBlock() {
  const classes = useStyles();
  const [currentTabId, setCurrentTabId] = React.useState(0);

  const handleChangeTab = (event, newId) => {
    setCurrentTabId(newId);
  };

  const renderTab = (currentTabId) => {
    const tabLabel = ['Điện Ảnh', 'Review', 'Khuyến Mãi'];
    switch (currentTabId) {
      case 0:
        return <FilmNewLayout newList={filmNewList}></FilmNewLayout>;
      case 1:
        return <ReviewNewLayout newList={reviewNewList}></ReviewNewLayout>;
      case 2:
        return <PromoteNewLayout newList={promoteNewList}></PromoteNewLayout>;
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
          <Tab className={classes.tabHeaderItem} label='Điện Ảnh' />
          <Tab className={classes.tabHeaderItem} label='Review' />
          <Tab className={classes.tabHeaderItem} label='Khuyến Mãi' />
        </Tabs>
      </div>
      {renderTab(currentTabId)}
    </div>
  );
}
