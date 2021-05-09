import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  cardHeader: {
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  cardImageContainer: {
    position: 'relative',
    paddingTop: '153%',
  },
  cardImage: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
}));

export default function CinemaCard(props) {
  const classes = useStyles();
  const { cinemaItem } = props;

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.cardImageContainer}>
          <img
            className={classes.cardImage}
            src={cinemaItem.imageSrc}
            alt={cinemaItem.company}
          ></img>
        </div>
      </div>
    </div>
  );
}

CinemaCard.propTypes = {
  cinemaItem: PropTypes.shape({
    code: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    address: PropTypes.string,
    imageSrc: PropTypes.string,
  }),
};

CinemaCard.defaultProps = {
  cinemaItem: {
    code: '0001-01',
    company: 'BHD Star',
    location: 'Bitexco',
    address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
    imageSrc: '/assets/img/cinema/bhd-star/bhd-star-bitexco.png',
  },
};
