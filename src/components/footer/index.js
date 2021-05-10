import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Hidden } from '@material-ui/core';
import LinkMui from '@material-ui/core/Link';

import { cooporateLogo } from './CooporateLogo.json';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: '#333',
    marginTop: theme.spacing(2),
  },
  footerGroup: {
    backgroundColor: '#333',
    height: 'fit-content',
  },
  footerGroupLabel: {
    fontSize: '14px',
    color: theme.palette.textColor.white,
    fontWeight: '500',
  },
  footerContentLink: {
    fontSize: '14px',
    color: theme.palette.textColor.light,
    fontWeight: '500',
    textDecoration: 'none !important',
    paddingTop: '8px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  footerCooporateLogo: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginRight: '16px',
    marginTop: '10px',
  },
  footerSocialLogo: {
    width: '30px',
    height: '30px',
    marginRight: '16px',
    marginTop: '10px',
  },
  horizontalSeparate: {
    color: theme.palette.textColor.light,
    width: '100%',
    borderTop: '1px solid #555',
    margin: '12px 0',
  },
  footerBottom: {
    paddingBottom: '20px',
  },
  footerCompanyLogo: {
    width: '80px',
    borderRadius: '10px',
    margin: '10px 0',
  },
  footerGroupContentLight: {
    fontSize: '14px',
    color: theme.palette.textColor.light,
    textDecoration: 'none !important',
    paddingTop: '8px',
  },
  footerEmail: {
    color: theme.palette.primary.main,
    textDecoration: 'none !important',
    '&:hover': {
      opacity: '0.8',
    },
  },
  footerConfirmLogo: {
    width: '120px',
    borderRadius: '10px',
    margin: '10px 0',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'unset',
    },
  },
  mdDownCenter: {
    height: 'fit-content',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  const renderCooporateLogo = (cooporateLogo, indexStart, indexEnd) => (
    <Grid item md={12} container>
      {cooporateLogo.slice(indexStart, indexEnd).map((item, index) => (
        <Grid item key={index}>
          <img
            className={classes.footerCooporateLogo}
            src={item.src}
            alt={item.name}
          ></img>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div className={classes.footerContainer}>
      <Container maxWidth='md'>
        {/* Footer top content */}
        <Grid container spacing={4}>
          <Grid item md={4} xs={6} container className={classes.footerGroup}>
            <Grid item md={12} className={classes.footerGroupLabel}>
              <span>TIX</span>
            </Grid>
            <Hidden smDown>
              <Grid item md={6} container direction='column'>
                <LinkMui className={classes.footerContentLink} href='#'>
                  FAQ
                </LinkMui>
                <LinkMui className={classes.footerContentLink} href='#'>
                  Brand Guidelines
                </LinkMui>
              </Grid>
            </Hidden>
            <Grid item md={6} container direction='column'>
              <LinkMui className={classes.footerContentLink} href='#'>
                Thỏa thuận sử dụng
              </LinkMui>
              <LinkMui className={classes.footerContentLink} href='#'>
                Chính sách bảo mật
              </LinkMui>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={4} container className={classes.footerGroup}>
              <Grid item md={12}>
                <span className={classes.footerGroupLabel}>ĐỐI TÁC</span>
              </Grid>
              <Grid item md={12}>
                {renderCooporateLogo(cooporateLogo, 0, 5)}
                {renderCooporateLogo(cooporateLogo, 5, 10)}
                {renderCooporateLogo(cooporateLogo, 10, 15)}
                {renderCooporateLogo(cooporateLogo, 15, 20)}
              </Grid>
            </Grid>
          </Hidden>
          <Grid item md={4} xs={6} container className={classes.footerGroup}>
            <Grid item xs={12} sm={6} container>
              <span className={classes.footerGroupLabel}>MOBILE APP</span>
              <Grid item md={12} container>
                <Grid item>
                  <LinkMui href='#'>
                    <img
                      className={classes.footerSocialLogo}
                      src='/assets/img/social/apple-logo.png'
                      alt='apple-logo'
                    ></img>
                  </LinkMui>
                </Grid>
                <Grid item>
                  <LinkMui href='#'>
                    <img
                      className={classes.footerSocialLogo}
                      src='/assets/img/social/android-logo.png'
                      alt='apple-logo'
                    ></img>
                  </LinkMui>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <span className={classes.footerGroupLabel}>SOCIAL</span>
              <Grid item md={12} container>
                <Grid item>
                  <LinkMui href='#'>
                    <img
                      className={classes.footerSocialLogo}
                      src='/assets/img/social/facebook-logo.png'
                      alt='apple-logo'
                    ></img>
                  </LinkMui>
                </Grid>
                <Grid item>
                  <LinkMui href='#'>
                    <img
                      className={classes.footerSocialLogo}
                      src='/assets/img/social/zalo-logo.png'
                      alt='apple-logo'
                    ></img>
                  </LinkMui>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Footer separate */}
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.horizontalSeparate} />
          </Grid>
        </Grid>
        {/* Footer bottom content */}
        <Grid container className={classes.footerBottom}>
          <Grid item md={2} container className={classes.mdDownCenter}>
            <img
              className={classes.footerCompanyLogo}
              src='/assets/img/social/zion-logo.jpg'
              alt='zion-logo'
            ></img>
          </Grid>
          <Grid item md={8} container className={classes.mdDownCenter}>
            <Grid item xs={12}>
              <span className={classes.footerGroupLabel}>
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.footerGroupContentLight}>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.footerGroupContentLight}>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                <br />
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.footerGroupContentLight}>
                Số Điện Thoại (Hotline): 1900 545 436
              </span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.footerGroupContentLight}>
                Email:{' '}
                <LinkMui
                  className={classes.footerEmail}
                  href='mailto:support@tix.vn'
                >
                  support@tix.vn
                </LinkMui>
              </span>
            </Grid>
          </Grid>
          <Grid item md={2} container className={classes.mdDownCenter}>
            {' '}
            <img
              className={classes.footerConfirmLogo}
              src='/assets/img/social/bocongthuong-logo.png'
              alt='bocongthuong-logo'
            ></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
