import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import LinkMui from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SmsIcon from '@material-ui/icons/Sms';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

import UserAction from '../../redux/action/user';

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/assets/img/user/background.jfif)',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
  },
  formContainer: {
    width: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 38px',
  },
  headerButton: {
    height: '40px',
    lineHeight: '40px',
    backgroundColor: 'transparent',
    color: theme.palette.textColor.main,
    fontSize: '22px',
    fontWeight: '500',
    userSelect: 'none',
    cursor: 'default',
  },
  headerButtonPrimary: {
    height: '40px',
    lineHeight: '40px',
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    fontSize: '18px',
    fontWeight: '500',
    userSelect: 'none',
    cursor: 'pointer',
    textDecoration: 'none !important',
  },
  formBodyContainer: {
    padding: '20px 30px',
  },
  formBodyGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    '&::first-child': {
      marginTop: '0',
    },
  },
  formBodyGroupInput: {
    '& label.Mui-focused': {
      color: theme.palette.textColor.main,
    },
    '& .MuiInputLabel-outlined': {
      transform: 'translate(14px, 14px) scale(1)',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)',
    },
    '& .MuiOutlinedInput-root': {
      height: '44px',
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.borderColor.dark,
      },
      '& .MuiInputBase-input': {
        height: '44px',
        padding: '0 14px',
      },
    },
  },
  formBodyErrorMessage: {
    padding: '4px 0px',
    color: theme.palette.error.main,
    textAlign: 'left',
  },
  formBodySupport: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '14px 0',
  },
  formBodySupportLink: {
    textDecoration: 'none !important',
    color: theme.palette.textColor.light,
    fontSize: '16px',
    fontWeight: '500',
  },
  formBodySupportLinkPrimary: {
    textDecoration: 'none !important',
    color: theme.palette.primary.main,
    fontSize: '16px',
    fontWeight: '500',
  },
  verticalSeparate: {
    height: '22px',
    borderLeft: `1px solid ${theme.palette.borderColor.dark}`,
    margin: '0 12px',
  },
  formBodyButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '100px',
  },
  formBodyButtonLink: {
    textDecoration: 'none !important',
  },
  formFooterList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 30px',
    backgroundColor: '#e9e8e9',
  },
  formFooterItem: {
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    minWidth: '140px',
    padding: '0 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  formFooterItemLabel: {
    flex: '1 !important',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    textAlign: 'center !important',
  },
}));

const MainButton = withStyles(({ palette, font }) => ({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    color: palette.textColor.main,
    height: '36px',
    minWidth: '140px',
    fontSize: '16px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: font.primary,
  },
}))(Button);

const MainButtonPrimary = withStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: palette.primary.main,
    },
  },
}))(MainButton);

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userNameErrorMsg, setUserNameErrorMsg] = React.useState(false);
  const [userPasswordErrorMsg, setUserPasswordErrorMsg] = React.useState(false);
  const [isLoginFailed, setIsLoginFailed] = React.useState(false);

  const onUserNameChange = (event) => {
    setUserName(event.target.value);

    if (event.target.value.length > 0) {
      setUserNameErrorMsg(false);
    }
    setIsLoginFailed(false);
  };

  const onUserPasswordChange = (event) => {
    setUserPassword(event.target.value);

    if (event.target.value.length > 0) {
      setUserPasswordErrorMsg(false);
    }
    setIsLoginFailed(false);
  };

  const handleLoginButton = async () => {
    let EnableSubmit = true;

    if (userName.trim().length === 0) {
      EnableSubmit = false;
      setUserNameErrorMsg(true);
    }

    if (userPassword.length === 0) {
      EnableSubmit = false;
      setUserPasswordErrorMsg(true);
    }

    if (EnableSubmit) {
      dispatch(
        UserAction.fetchLogin({
          taiKhoan: userName,
          matKhau: userPassword,
        })
      );
      setTimeout(() => {
        setIsLoginFailed(true);
      }, 1000);
    }
  };

  return (
    <div className={classes.loginBackground}>
      {/* Container */}
      <div className={classes.formContainer}>
        {/* Form header */}
        <div className={classes.formHeader}>
          <div className={classes.headerButton}>Đăng Nhập</div>
          <LinkMui className={classes.headerButtonPrimary} href='/register/'>
            Đăng Ký
          </LinkMui>
        </div>
        {/* Form body */}
        <div className={classes.formBodyContainer}>
          {/* User name */}
          <div className={classes.formBodyGroup}>
            <TextField
              onChange={onUserNameChange}
              className={classes.formBodyGroupInput}
              label='Email/Số điện thoại/Tên đăng nhập'
              variant='outlined'
              value={userName}
            />
            {userNameErrorMsg && (
              <div className={classes.formBodyErrorMessage}>
                Vui lòng nhập tên đăng nhập!
              </div>
            )}
          </div>
          {/* Password */}
          <div className={classes.formBodyGroup}>
            <TextField
              onChange={onUserPasswordChange}
              className={classes.formBodyGroupInput}
              label='Mật khẩu'
              variant='outlined'
              type='Password'
              value={userPassword}
            />
            {userPasswordErrorMsg && (
              <div className={classes.formBodyErrorMessage}>
                Vui lòng nhập mật khẩu!
              </div>
            )}
            {isLoginFailed && !isAuthenticated && (
              <div className={classes.formBodyErrorMessage}>
                Tài khoản hoặc mật khẩu không chính xác
              </div>
            )}
          </div>
          {/* Support */}
          <div className={classes.formBodySupport}>
            <LinkMui className={classes.formBodySupportLinkPrimary} href='#'>
              Quên mật khẩu
            </LinkMui>
            <div className={classes.verticalSeparate}></div>
            <LinkMui className={classes.formBodySupportLink} href='#'>
              Cần trợ giúp
            </LinkMui>
          </div>
          {/* Main button */}
          <div className={classes.formBodyButtonContainer}>
            <LinkMui className={classes.formBodyButtonLink} href='/'>
              <MainButton>TRỞ LẠI</MainButton>
            </LinkMui>
            <MainButtonPrimary onClick={handleLoginButton}>
              ĐĂNG NHẬP
            </MainButtonPrimary>
          </div>
        </div>
        {/* Form footer */}
        <div className={classes.formFooterList}>
          {/* SMS button */}
          <Box className={classes.formFooterItem} bgcolor='#13a10d'>
            <SmsIcon style={{ color: 'white' }} />
            <div className={classes.formFooterItemLabel}>SMS</div>
          </Box>
          {/* Facebook button */}
          <Box className={classes.formFooterItem} bgcolor='#314b86'>
            <FacebookIcon style={{ color: 'white' }} />
            <div className={classes.formFooterItemLabel}>Facebook</div>
          </Box>
          {/* Google button */}
          <Box className={classes.formFooterItem} bgcolor='#f04747'>
            <EmailIcon style={{ color: 'white' }} />
            <div className={classes.formFooterItemLabel}>Google</div>
          </Box>
        </div>
      </div>
    </div>
  );
}
