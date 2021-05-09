import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';

import CinemaCard from './CinemaCard';

const useStyles = makeStyles((theme) => ({
  cinemaCard: {
    maxWidth: '220px',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  cinemaInforGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
    flex: '1',
    height: '100%',
  },
  cinemaInforName: {
    color: theme.palette.textColor.white,
    fontSize: '24px',
    fontWeight: '500',
  },
  cinemaInforNameHighlight: {
    color: theme.palette.primary.main,
    fontSize: '24px',
    fontWeight: '500',
  },
  cinemaInforAddress: {
    color: theme.palette.textColor.white,
    fontSize: '16px',
  },
  cinemaInforButton: {
    marginTop: '30px',
  },
  cinemaInforButtonLink: {
    textDecoration: 'none',
    color: theme.palette.textColor.white,
  },
  cinemaRateGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
  },
  cinemaRatePointContainer: {
    position: 'relative',
    width: '60px',
    height: '60px',
    lineHeight: '60px',
    fontSize: '30px',
    fontWeight: '400',
    [theme.breakpoints.up('md')]: {
      width: '120px',
      height: '120px',
      lineHeight: '120px',
      fontSize: '50px',
    },
  },
  cinemaRatePointCircle: {
    width: '100% !important',
    height: '100% !important',
    color: 'rgb(126,211,33)',
  },
  cinemaRatePoint: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    color: theme.palette.textColor.white,
    textAlign: 'center',
  },
  cinemaRateStar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '6px',
  },
  cinemaRateTime: {
    color: theme.palette.textColor.white,
    fontSize: '14px',
    fontWeight: '500',
  },
}));

const BuyTicketButton = withStyles({
  root: {
    backgroundColor: '#f43f24',
    borderRadius: '4px',
    border: 0,
    color: 'white',
    width: '100%',
    maxWidth: '140px',
    height: '38px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#b42a14',
    },
  },
  label: {
    textTransform: 'capitalize',
    fontSize: '16px',
    fontWeight: '500',
  },
})(Button);

export default function CinemaIntro(props) {
  const classes = useStyles();
  const { cinemaItem } = props;

  const renderMovieRateTime = () => {
    const filmRateTime = (100 + Math.random() * 1000).toFixed(0);
    const content = `${filmRateTime} người đánh giá`;
    return <div className={classes.cinemaRateTime}>{content}</div>;
  };

  const ratePoint = (7 + Math.random() * 3).toFixed(0);

  return (
    <Grid container>
      {/* Cinema card */}
      <Grid item md={3} sm={4} xs={6}>
        <div className={classes.cinemaCard}>
          <CinemaCard cinemaItem={cinemaItem} />
        </div>
      </Grid>
      {/* Cinema infor */}
      <Grid item md={6} sm={4} xs={6}>
        <div className={classes.cinemaInforGroup}>
          <div className={classes.cinemaInforName}>
            <span className={classes.cinemaInforNameHighlight}>
              {cinemaItem.company}
            </span>
            <span> - {cinemaItem.location}</span>
          </div>
          <div className={classes.cinemaInforAddress}>{cinemaItem.address}</div>
          <div className={classes.cinemaInforButton}>
            <BuyTicketButton>
              <a
                className={classes.cinemaInforButtonLink}
                href='#cinema-detail'
              >
                Mua vé
              </a>
            </BuyTicketButton>
          </div>
        </div>
      </Grid>
      {/* Cinema rate */}
      <Grid item md={3} sm={4} xs={12}>
        <div className={classes.cinemaRateGroup}>
          <div className={classes.cinemaRatePointContainer}>
            <CircularProgress
              className={classes.cinemaRatePointCircle}
              variant='determinate'
              value={ratePoint * 10}
            />
            <div className={classes.cinemaRatePoint}>{ratePoint}</div>
          </div>
          <Rating
            name='half-rating-read'
            defaultValue={0}
            value={Math.round(ratePoint) / 2}
            precision={0.5}
            readOnly
            classes={{
              root: classes.cinemaRateStar,
            }}
          />
          {renderMovieRateTime()}
        </div>
      </Grid>
    </Grid>
  );
}

CinemaIntro.propTypes = {
  cinemaItem: PropTypes.shape({
    code: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    imageSrc: PropTypes.string,
  }),
};

CinemaIntro.defaultProps = {
  cinemaItem: {
    code: '0001-01',
    company: 'BHD Star',
    location: 'Bitexco',
    address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
    imageSrc: '/assets/img/cinema/bhd-star/bhd-star-bitexco.png',
  },
};
