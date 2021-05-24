import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: '20px',
    fontWeight: '500',
    color: theme.palette.textColor.main,
    padding: '40px 20px',
    minWidth: '460px',
  },
  dialogButton: {
    width: '120px',
    height: '40px',
    margin: '10px',
  },
}));

const PrimaryButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: '#eee',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f43f24',
    },
    '&:disabled': {
      backgroundColor: '#bbb',
      color: '555',
      cursor: 'default',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: '20px',
    fontWeight: '500',
  },
})(Button);

const NormalButton = withStyles({
  root: {
    backgroundColor: 'transparent',
    borderRadius: '4px',
    border: 0,
    color: '#333',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:disabled': {
      backgroundColor: '#bbb',
      color: '555',
      cursor: 'default',
    },
  },
  label: {
    textTransform: 'none',
    fontSize: '20px',
    fontWeight: '500',
  },
})(Button);

export default function RequestLogin(props) {
  const classes = useStyles();
  const { isShowRequestDialog, setIsShowRequestDialog } = props;

  const handleRequestDialogConfirm = () => {
    window.location.href = '/login';
  };

  return (
    <Dialog open={isShowRequestDialog} className={classes.dialogContainer}>
      <DialogTitle className={classes.dialogTitle}>
        Bạn cần phải đăng nhập để thực hiện chức năng này!
      </DialogTitle>
      <DialogActions>
        <div className={classes.dialogButton}>
          <NormalButton onClick={() => setIsShowRequestDialog(false)}>
            Quay lại
          </NormalButton>
        </div>
        <div className={classes.dialogButton}>
          <PrimaryButton onClick={handleRequestDialogConfirm}>
            Xác nhận
          </PrimaryButton>
        </div>
      </DialogActions>
    </Dialog>
  );
}
