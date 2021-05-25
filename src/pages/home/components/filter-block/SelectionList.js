import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  dropMenuContainer: {
    position: 'absolute',
    top: 'calc(100% + 12px)',
    left: '0',
    border: '1px solid rgb(210, 210, 210)',
    borderRadius: '4px',
    overflow: 'hidden',
    zIndex: '1',
  },
  dropDownMenuList: {
    width: '100%',
    maxHeight: '300px',
    overflowY: 'auto',
    backgroundColor: 'white',
    color: theme.palette.textColor.main,

    '&::-webkit-scrollbar': {
      width: '4px',
      backgroundColor: '#e8e3e3',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
    },
  },
  dropDownMenuItem: {
    padding: '4px 18px',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
  tabEmpty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '30px',
    paddingBottom: '30px',
    fontSize: '16px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
  },
}));

export default function SelectionList(props) {
  const classes = useStyles();
  const {
    toggleIsShowSelectionList,
    DataSelectionList,
    handleSelectItem,
    minWidth,
  } = props;

  const renderList = (DataSelectionList, handleSelectItem) => {
    if (DataSelectionList.length === 0) {
      return (
        <div className={classes.tabEmpty}>
          <CircularProgress />
          <div>Loading...</div>
        </div>
      );
    } else {
      return DataSelectionList.map((item, index) => (
        <ListItem
          onClick={handleSelectItem}
          key={index}
          data-id={item.code}
          className={classes.dropDownMenuItem}
        >
          {item.name}
        </ListItem>
      ));
    }
  };

  return (
    <ClickAwayListener onClickAway={toggleIsShowSelectionList}>
      <div className={classes.dropMenuContainer} style={{ minWidth: minWidth }}>
        <List className={classes.dropDownMenuList}>
          {renderList(DataSelectionList, handleSelectItem)}
        </List>
      </div>
    </ClickAwayListener>
  );
}

SelectionList.prototype = {
  toggleIsShowSelectionList: PropTypes.func,
  DataSelectionList: PropTypes.arrayOf(PropTypes.object),
  handleSelectItem: PropTypes.func,
  minWidth: PropTypes.string,
};

SelectionList.defaultProps = {
  minWidth: '200px',
};
