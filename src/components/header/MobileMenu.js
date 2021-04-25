import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { Modal, Backdrop, Slide } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LinkMui from '@material-ui/core/Link';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  mobileMenuContainer: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '70vw',
    height: '100vh',
    backgroundColor: 'white',
    outline: 'none',
  },
  mobileMenuHeader: {
    display: 'flex',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 14px',
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
    color: theme.palette.textColor.main,
    fontSize: '18px',
    fontWeight: '500',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  userLoginAvatar: {
    width: '40px',
    height: '40px',
  },
  userLoginMenuList: {
    position: 'absolute',
    top: '48px',
    left: '0',
    width: '100%',
    borderRadius: '4px',
    backgroundColor: 'rgb(236 236 236) !important',
    padding: '10px 0',
    zIndex: '1',
  },
  userLoginMenuItem: {
    height: '38px',
    lineHeight: '38px',
    textAlign: 'center',
    borderRadius: '4px',
    fontSize: '18px',
    color: theme.palette.textColor.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    cursor: 'pointer',
    textDecoration: 'none !important',
    display: 'block',
  },
  returnIcon: {
    color: theme.palette.textColor.light,
    cursor: 'pointer',
  },
  mobileMenuList: {
    display: 'flex',
    flexDirection: 'column',
  },
  mobileMenuItem: {
    width: 'unset',
    alignItems: 'center',
  },
  mobileMenuItemLink: {
    textDecoration: 'none !important',
    color: theme.palette.textColor.main,
    fontSize: '20px',
    padding: '12px 0',
    fontWeight: '500',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
  locationList: {
    overflowY: 'scroll',
    backgroundColor: 'white',
    color: theme.palette.textColor.main,
    width: '90vw',
    maxWidth: '560px',
    maxHeight: '90vh',
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
    padding: '10px 18px',
    fontSize: '20px',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  },
}));

export default function MobileMenu(props) {
  const classes = useStyles();
  const {
    isLogin,
    currentLocation,
    LocationData,
    isShowMobileMenu,
    toggleIsShowMobileMenu,
    isShowLocationListMobile,
    toggleIsShowLocationListMobile,
    handleSelectLocation,
  } = props;

  const [isLoginMenu, setIsShowLoginMenu] = React.useState(false);
  const userInfor = {
    name: 'Nguyễn Văn A',
    avatar: '/assets/img/user/default_avatar.png',
  };

  const toggleIsShowLoginMenu = () => {
    setIsShowLoginMenu(!isLoginMenu);
  };

  const handleOnClickLogout = () => {
    setIsShowLoginMenu(false);
  };

  return (
    <Fragment>
      {/* Mobile menu */}
      <Modal
        open={isShowMobileMenu}
        onClose={toggleIsShowMobileMenu}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Slide
          direction='left'
          in={isShowMobileMenu}
          mountOnEnter
          unmountOnExit
          timeout={300}
        >
          <div className={classes.mobileMenuContainer}>
            {/* Mobile menu header */}
            <div className={classes.mobileMenuHeader}>
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
              {/* Go back button */}
              <ArrowForwardIosIcon
                onClick={toggleIsShowMobileMenu}
                className={classes.returnIcon}
              />
            </div>
            {/* Main menu */}
            <List className={classes.mobileMenuList}>
              <ListItem className={classes.mobileMenuItem}>
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href='#lich-chieu'
                >
                  Lịch Chiếu
                </LinkMui>
              </ListItem>
              <ListItem className={classes.mobileMenuItem}>
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href='#cum-rap'
                >
                  Cụm Rạp
                </LinkMui>
              </ListItem>
              <ListItem className={classes.mobileMenuItem}>
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href='#tin-tuc'
                >
                  Tin Tức
                </LinkMui>
              </ListItem>
              <ListItem className={classes.mobileMenuItem}>
                <LinkMui
                  onClick={toggleIsShowMobileMenu}
                  className={classes.mobileMenuItemLink}
                  href='#ung-dung'
                >
                  Ứng Dụng
                </LinkMui>
              </ListItem>
              <ListItem className={classes.mobileMenuItem}>
                <div
                  onClick={toggleIsShowLocationListMobile}
                  className={classes.mobileMenuItemLink}
                >
                  {currentLocation}
                </div>
              </ListItem>
            </List>
          </div>
        </Slide>
      </Modal>
      {/* Location list */}
      <Modal
        open={isShowLocationListMobile}
        onClose={toggleIsShowLocationListMobile}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
        }}
      >
        <div className={classes.modalContent}>
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
      </Modal>
    </Fragment>
  );
}

MobileMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  LocationData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      code: PropTypes.string,
    })
  ).isRequired,
  isShowMobileMenu: PropTypes.bool.isRequired,
  toggleIsShowMobileMenu: PropTypes.func.isRequired,
  isShowLocationListMobile: PropTypes.bool.isRequired,
  toggleIsShowLocationListMobile: PropTypes.func.isRequired,
  handleSelectLocation: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  isLogin: false,
  currentLocation: 'Hồ Chí Minh',
  LocationData: [
    {
      id: 1,
      name: 'Hồ Chí Minh',
      code: 'HoChiMinh',
    },
  ],
  isShowMobileMenu: false,
  toggleIsShowMobileMenu: undefined,
  isShowLocationListMobile: false,
  toggleIsShowLocationListMobile: undefined,
  handleSelectLocation: undefined,
};
