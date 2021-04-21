import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LinkMui from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SmsIcon from '@material-ui/icons/Sms';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    width: '100vw',
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
  formBodyPolicyContainer: {
    display: 'inline-block',
    textAlign: 'center',
    margin: '14px 10px',
    fontSize: '14px',
    fontWeight: '500',
  },
  formBodyPolicyLink: {
    textDecoration: 'none !important',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
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
  const [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = React.useState('');

  const [userNameErrorMsg, setUserNameErrorMsg] = React.useState(false);
  const [userPasswordErrorMsg, setUserPasswordErrorMsg] = React.useState(false);
  const [
    userPasswordConfirmErrorMsg,
    setUserPasswordConfirmErrorMsg,
  ] = React.useState(false);

  const onUserNameChange = (event) => {
    setUserName(event.target.value);

    if (event.target.value.length >= 8) {
      setUserNameErrorMsg(false);
    }
  };

  const onUserPasswordChange = (event) => {
    setUserPassword(event.target.value);

    if (event.target.value.length >= 8) {
      setUserPasswordErrorMsg(false);
    }
  };

  const onUserPasswordConfirmChange = (event) => {
    setUserPasswordConfirm(event.target.value);

    if (event.target.value === userPassword) {
      setUserPasswordConfirmErrorMsg(false);
    }
  };

  const handleRegisterButton = () => {
    let EnableSubmit = true;

    if (userName.length < 8) {
      EnableSubmit = false;
      setUserNameErrorMsg(true);
    }

    if (userPassword.length < 8) {
      EnableSubmit = false;
      setUserPasswordErrorMsg(true);
    }

    if (userPasswordConfirm !== userPassword) {
      EnableSubmit = false;
      setUserPasswordConfirmErrorMsg(true);
    }

    if (EnableSubmit) {
      console.log('Register:');
      console.log('UserName: ', userName);
      console.log('UserPassword: ', userPassword);
      console.log('UserPasswordConfirm: ', userPasswordConfirm);
    }
  };

  return (
    <div className={classes.loginBackground}>
      {/* Container */}
      <div className={classes.formContainer}>
        {/* Form header */}
        <div className={classes.formHeader}>
          <div className={classes.headerButton}>Đăng Ký</div>
          <Link className={classes.headerButtonPrimary} to='/dang-nhap/'>
            Đăng Nhập
          </Link>
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
                Tên đăng nhập phải có ít nhất 8 ký tự!
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
                Mật khẩu phải có ít nhất 8 ký tự!
              </div>
            )}
          </div>
          {/* Password Confirm*/}
          <div className={classes.formBodyGroup}>
            <TextField
              onChange={onUserPasswordConfirmChange}
              className={classes.formBodyGroupInput}
              label='Mật khẩu'
              variant='outlined'
              type='Password'
              value={userPasswordConfirm}
            />
            {userPasswordConfirmErrorMsg && (
              <div className={classes.formBodyErrorMessage}>
                Mật khẩu xác nhận không đúng!
              </div>
            )}
          </div>
          {/* Policy */}
          <div className={classes.formBodyPolicyContainer}>
            Bằng việc đăng ký, bạn đã đồng ý với TIX về{' '}
            <LinkMui className={classes.formBodyPolicyLink} href='#'>
              Điều khoản dịch vụ
            </LinkMui>{' '}
            và{' '}
            <LinkMui className={classes.formBodyPolicyLink} href='#'>
              Chính sách bảo mật
            </LinkMui>
          </div>
          {/* Main button */}
          <div className={classes.formBodyButtonContainer}>
            <Link className={classes.formBodyButtonLink} to='/'>
              <MainButton>TRỞ LẠI</MainButton>
            </Link>
            <MainButtonPrimary onClick={handleRegisterButton}>
              ĐĂNG KÝ
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
