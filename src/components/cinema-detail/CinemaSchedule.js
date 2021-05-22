import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CinemaSelection from '../cinema-selection';
import ScheduleSelection from '../schedule-selection';
import DateSelection from '../date-selection';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    backgroundColor: 'white',
    height: '600px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  cinemaSelectionContainer: {
    float: 'left',
    width: '30%',
    height: '100%',
  },
  movieScheduleContainer: {
    float: 'left',
    width: '70%',
    height: '100%',
    borderLeft: 'none',
  },
  dateSelectionContainer: {
    height: '90px',
  },
  scheduleSelectionContainer: {
    height: 'calc(100% - 90px)',
  },
}));

export default function CinemaSchedule(props) {
  const classes = useStyles();
  const { cinemaList, cinemaItem, scheduleList, currentCompanyCode } = props;
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState(
    cinemaItem.maCumRap
  );
  const [currentSelectedDateCode, setCurrentSelectedDateCode] = React.useState(
    () => {
      let today = new Date();
      return today.toJSON().slice(0, 10);
    }
  );

  const handleSelectCinema = (cinemaCode) => () => {
    setCurrentCinemaCode(cinemaCode);

    let today = new Date();
    setCurrentSelectedDateCode(today.toJSON().slice(0, 10));

    let slider = document.querySelector('#pick-day');
    if (slider !== null) {
      slider.scrollLeft = 0;
    }
  };

  const handleSelectDate = (dateCode) => (event) => {
    setCurrentSelectedDateCode(dateCode);
  };

  return (
    <Container maxWidth='md'>
      <div className={classes.cinemaBlockContainer}>
        <div className={classes.cinemaSelectionContainer}>
          <CinemaSelection
            cinemaList={cinemaList}
            currentCompanyCode={currentCompanyCode}
            currentCinemaCode={currentCinemaCode}
            handleSelectCinema={handleSelectCinema}
          />
        </div>
        <div className={classes.movieScheduleContainer}>
          <div className={classes.dateSelectionContainer}>
            <DateSelection
              currentSelectedDateCode={currentSelectedDateCode}
              handleSelectDate={handleSelectDate}
            />
          </div>
          <div className={classes.scheduleSelectionContainer}>
            <ScheduleSelection
              scheduleList={scheduleList}
              currentCinemaCode={currentCinemaCode}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
