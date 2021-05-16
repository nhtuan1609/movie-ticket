import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinkMui from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import MenuIcon from '@material-ui/icons/Menu';

import LocationData from './LocationData.json';

import MobileMenu from './MobileMenu';

const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    display: 'block',
    backgroundColor: theme.palette.appBarColor.main,
  },
  toolBarContainer: {
    minHeight: '60px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainMenuList: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
    },
  },
  mainMenuItem: {
    width: 'unset',
    alignItems: 'center',
  },
  mainMenuItemLink: {
    textDecoration: 'none !important',
    color: theme.palette.textColor.main,
    fontSize: '14px',
    fontWeight: '500',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  subMenuList: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  userLoginLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    cursor: 'pointer',
  },
  userLoginName: {
    paddingLeft: '10px',
    paddingRight: '10px',
    color: theme.palette.textColor.light,
    fontSize: '14px',
  },
  userLoginAvatar: {
    width: '32px',
    height: '32px',
  },
  userLoginMenuList: {
    position: 'absolute',
    top: '48px',
    left: '0',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: 'white',
    padding: '10px 0',
  },
  userLoginMenuItem: {
    height: '34px',
    lineHeight: '34px',
    textAlign: 'center',
    borderRadius: '4px',
    fontSize: '14px',
    color: theme.palette.textColor.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    cursor: 'pointer',
    textDecoration: 'none !important',
    display: 'block',
  },
  locationInforContainer: {
    position: 'relative',
    display: 'flex',
    minWidth: '160px',
    alignItems: 'center',
    paddingLeft: '10px',
    cursor: 'pointer',
  },
  locationIcon: {
    color: theme.palette.textColor.light,
  },
  locationLabel: {
    color: theme.palette.textColor.light,
    fontSize: '14px',
  },
  locationDropDownIcon: {
    color: theme.palette.textColor.light,
    marginRight: 0,
    marginLeft: 'auto',
  },
  locationListContainer: {
    position: 'absolute',
    top: '44px',
    left: '0',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '2px 2px 6px 2px rgba(0,0,0, 0.2)',
  },
  locationList: {
    width: '160px',
    maxHeight: '300px',
    overflowY: 'scroll',
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
  locationListItem: {
    padding: '4px 18px',
    fontSize: '16px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
  mobileMenu: {
    display: 'block',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileMenuIcon: {
    color: theme.palette.textColor.light,
    cursor: 'pointer',
  },
  verticalSeparate: {
    height: '28px',
    borderRight: `1px solid ${theme.palette.borderColor.main}`,
  },
}));

export default function Header() {
  const classes = useStyles();
  const isLogin = false;
  const [currentLocation, setCurrentLocation] = React.useState('Hồ Chí Minh');
  const [isShowLocationList, setIsShowLocationList] = React.useState(false);
  const [
    isShowLocationListMobile,
    setIsShowLocationListMobile,
  ] = React.useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = React.useState(false);
  const [isLoginMenu, setIsShowLoginMenu] = React.useState(false);
  const userInfor = {
    name: 'Nguyễn Văn A',
    avatar: '/assets/img/user/default_avatar.png',
  };

  const toggleIsShowLocationList = () => {
    setIsShowLocationList(!isShowLocationList);
  };

  const toggleIsShowLocationListMobile = () => {
    setIsShowLocationListMobile(!isShowLocationListMobile);
  };

  const handleSelectLocation = (event) => {
    let selectedCode = event.target.dataset.id;
    let selectedIndex = LocationData.findIndex(
      (item) => item.code === selectedCode
    );

    if (selectedIndex !== -1 && setCurrentLocation !== undefined) {
      setCurrentLocation(LocationData[selectedIndex].name);
    }

    setIsShowLocationList(false);
    setIsShowLocationListMobile(false);
  };

  const toggleIsShowMobileMenu = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  const toggleIsShowLoginMenu = () => {
    setIsShowLoginMenu(!isLoginMenu);
  };

  const handleOnClickLogout = () => {
    setIsShowLoginMenu(false);
  };

  return (
    <AppBar className={classes.appBarContainer}>
      <Toolbar className={classes.toolBarContainer}>
        {/* Logo */}
        <Box component='a' href='/' display='flex' alignItems='center'>
          <Box
            component='img'
            src={'/assets/img/logo/web-logo.png'}
            alt='Logo'
            height='50px'
          ></Box>
        </Box>
        {/* Main menu */}
        <List className={classes.mainMenuList}>
          <ListItem className={classes.mainMenuItem}>
            <LinkMui className={classes.mainMenuItemLink} href='#lich-chieu'>
              Lịch Chiếu
            </LinkMui>
          </ListItem>
          <ListItem className={classes.mainMenuItem}>
            <LinkMui className={classes.mainMenuItemLink} href='#cum-rap'>
              Cụm Rạp
            </LinkMui>
          </ListItem>
          <ListItem className={classes.mainMenuItem}>
            <LinkMui className={classes.mainMenuItemLink} href='#tin-tuc'>
              Tin Tức
            </LinkMui>
          </ListItem>
          <ListItem className={classes.mainMenuItem}>
            <LinkMui className={classes.mainMenuItemLink} href='#ung-dung'>
              Ứng Dụng
            </LinkMui>
          </ListItem>
        </List>
        {/* Sub menu */}
        <div className={classes.subMenuList}>
          {/* User infor */}
          <div>
            {isLogin && (
              <Box position='relative'>
                <div
                  onClick={toggleIsShowLoginMenu}
                  className={classes.userLoginLink}
                >
                  <Avatar
                    className={classes.userLoginAvatar}
                    alt='User avatar'
                    src={userInfor.avatar}
                  />
                  <span className={classes.userLoginName}>
                    {userInfor.name}
                  </span>
                </div>
                {isLoginMenu && (
                  <ClickAwayListener onClickAway={toggleIsShowLoginMenu}>
                    <div className={classes.userLoginMenuList}>
                      <LinkMui
                        href='/personal/'
                        className={classes.userLoginMenuItem}
                      >
                        Thông tin cá nhân
                      </LinkMui>
                      <div
                        onClick={handleOnClickLogout}
                        className={classes.userLoginMenuItem}
                      >
                        Đăng xuất
                      </div>
                    </div>
                  </ClickAwayListener>
                )}
              </Box>
            )}
            {!isLogin && (
              <LinkMui className={classes.userLoginLink} href='/login/'>
                <Avatar
                  className={classes.userLoginAvatar}
                  alt='User avatar'
                  src={'/assets/img/user/default_avatar.png'}
                />
                <span className={classes.userLoginName}>Đăng Nhập</span>
              </LinkMui>
            )}
          </div>
          {/* Separate */}
          <div className={classes.verticalSeparate}></div>
          {/* Location infor */}
          <div
            className={classes.locationInforContainer}
            onClick={toggleIsShowLocationList}
          >
            <LocationOnOutlinedIcon className={classes.locationIcon} />
            <span className={classes.locationLabel}>{currentLocation}</span>
            <KeyboardArrowDownOutlinedIcon
              className={classes.locationDropDownIcon}
            />
            {isShowLocationList && (
              <ClickAwayListener onClickAway={toggleIsShowLocationList}>
                <div className={classes.locationListContainer}>
                  <List className={classes.locationList}>
                    {LocationData.map((location, index) => (
                      <ListItem
                        data-id={location.code}
                        key={index}
                        onClick={handleSelectLocation}
                        className={classes.locationListItem}
                      >
                        {location.name}
                      </ListItem>
                    ))}
                  </List>
                </div>
              </ClickAwayListener>
            )}
          </div>
        </div>
        {/* Mobile menu */}
        <div className={classes.mobileMenu}>
          <MenuIcon
            onClick={toggleIsShowMobileMenu}
            className={classes.mobileMenuIcon}
          />
          <MobileMenu
            isLogin={isLogin}
            currentLocation={currentLocation}
            LocationData={LocationData}
            isShowMobileMenu={isShowMobileMenu}
            toggleIsShowMobileMenu={toggleIsShowMobileMenu}
            isShowLocationListMobile={isShowLocationListMobile}
            toggleIsShowLocationListMobile={toggleIsShowLocationListMobile}
            handleSelectLocation={handleSelectLocation}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
