import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  inforContainer: {
    display: 'flex',
    fontSize: '16px',
    color: theme.palette.textColor.white,
  },
  inforLabel: {
    width: '160px',
    fontWeight: '500',
    margin: '10px 0',
  },
  inforContent: {
    margin: '10px 0',
    textAlign: 'justify',
  },
  plotContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    color: theme.palette.textColor.white,
  },
}));

export default function TabFilmInfor(props) {
  const classes = useStyles();
  const { filmItem } = props;

  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Ngày công chiếu</p>
          <p className={classes.inforContent}>
            {filmItem.ngayKhoiChieu.slice(0, 10)}
          </p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Đạo diễn</p>
          <p className={classes.inforContent}>{filmItem.daoDien}</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Diễn viên</p>
          <p className={classes.inforContent}>{filmItem.dienVien}</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Thể Loại</p>
          <p className={classes.inforContent}>{filmItem.theLoai}</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Định dạng</p>
          <p className={classes.inforContent}>{filmItem.dinhDang}</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Quốc Gia SX</p>
          <p className={classes.inforContent}>{filmItem.quocGia}</p>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <div className={classes.plotContainer}>
          <p className={classes.inforLabel}>Nội dung</p>
          <p className={classes.inforContent}>{filmItem.moTa}</p>
        </div>
      </Grid>
    </Grid>
  );
}

TabFilmInfor.propTypes = {
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

TabFilmInfor.defaultProps = {
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
