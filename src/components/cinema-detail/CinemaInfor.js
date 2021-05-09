import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  inforContainer: {
    display: 'flex',
    fontSize: '16px',
    color: theme.palette.textColor.white,
    paddingRight: '40px',
  },
  inforLabel: {
    width: '40%',
    fontWeight: '500',
    margin: '10px 0',
  },
  inforContent: {
    width: '60%',
    margin: '10px 0',
    textAlign: 'justify',
  },
  plotContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    color: theme.palette.textColor.white,
  },
  plotLabel: {
    width: '40%',
    fontWeight: '500',
    margin: '10px 0',
  },
  plotContent: {
    width: '100%',
    margin: '10px 0',
    textAlign: 'justify',
  },
}));

export default function CinemaInfor(props) {
  const classes = useStyles();
  const { cinemaItem } = props;

  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Địa điểm</p>
          <p className={classes.inforContent}>{cinemaItem.address}</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Điện thoại</p>
          <p className={classes.inforContent}></p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Email</p>
          <p className={classes.inforContent}></p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Phòng chiếu</p>
          <p className={classes.inforContent}>7 2D. 4 3D</p>
        </div>
        <div className={classes.inforContainer}>
          <p className={classes.inforLabel}>Giờ mở cửa</p>
          <p className={classes.inforContent}>8:00 - 24:00</p>
        </div>
      </Grid>
      <Grid item md={6} xs={12}>
        <div className={classes.plotContainer}>
          <p className={classes.plotLabel}>Giới thiệu</p>
          <p className={classes.plotContent}>
            {cinemaItem.company} - {cinemaItem.location} là một trong những cụm
            rạp được đầu tư quy mô nhất hiện nay tại Việt Nam, với tổng diện
            tích hơn 2.000 m2, bao gồm 7 phòng chiếu được trang bị theo tiêu
            chuẩn quốc tế. Âm thanh đạt chuẩn Dolby 7.1 với hệ thống cách âm
            hiện đại, trong đó có 4 phòng 3D, cùng hơn 1.000 ghế ngồi được thiết
            kế theo kiểu dáng đẹp mắt và tiện dụng để mang lại sự thoải mái nhất
            cho khán giả.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

CinemaInfor.propTypes = {
  cinemaItem: PropTypes.shape({
    code: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    imageSrc: PropTypes.string,
  }),
};

CinemaInfor.defaultProps = {
  cinemaItem: {
    code: '0001-01',
    company: 'BHD Star',
    location: 'Bitexco',
    address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
    imageSrc: '/assets/img/cinema/bhd-star/bhd-star-bitexco.png',
  },
};
