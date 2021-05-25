import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CompanySelection from '../../../../components/company-selection';
import CinemaSelection from '../../../../components/cinema-selection';
import ScheduleSelection from '../../../../components/schedule-selection';
import DateSelection from '../../../../components/date-selection';

import CinemaAction from '../../../../redux/action/cinema';

const useStyles = makeStyles((theme) => ({
  cinemaBlockContainer: {
    backgroundColor: 'white',
    height: 'fit-content',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      height: '700px',
    },
  },
  companySelectionContainer: {
    float: 'left',
    width: '92px',
    height: '700px',
    borderRight: `1px solid ${theme.palette.borderColor.light}`,
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
    [theme.breakpoints.up('md')]: {
      width: '92px',
      height: '100%',
      borderBottom: 'none',
    },
  },
  cinemaSelectionContainer: {
    float: 'left',
    width: 'calc(100% - 92px)',
    height: '700px',
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
    [theme.breakpoints.up('md')]: {
      width: '30%',
      height: '100%',
      borderRight: `1px solid ${theme.palette.borderColor.light}`,
      borderBottom: 'none',
    },
  },
  movieScheduleContainer: {
    float: 'left',
    width: '100%',
    height: '700px',
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 30% - 92px)',
      height: '100%',
    },
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
  const { movieItem } = props;
  const [currentCompanyCode, setCurrentCompanyCode] = React.useState('BHDStar');
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState(
    'bhd-star-cineplex-3-2'
  );
  const [currentSelectedDateCode, setCurrentSelectedDateCode] = React.useState(
    () => {
      let today = new Date();
      return today.toJSON().slice(0, 10);
    }
  );

  const companyList = useSelector((state) => state.cinema.companyList);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const scheduleList = useSelector((state) => state.cinema.scheduleList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CinemaAction.fetchCompanyList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      CinemaAction.fetchCinemaList({ maHeThongRap: currentCompanyCode })
    );
  }, [dispatch, currentCompanyCode]);

  useEffect(() => {
    dispatch(
      CinemaAction.fetchScheduleList({ maHeThongRap: currentCompanyCode })
    );
  }, [dispatch, currentCompanyCode]);

  useEffect(() => {
    if (cinemaList.length > 0) {
      setCurrentCinemaCode(cinemaList[0].maCumRap);
    }
  }, [cinemaList]);

  if (
    companyList.length === 0 ||
    cinemaList.length === 0 ||
    scheduleList.length === 0
  )
    return <div />;

  const handleSelectCompany = (companyCode) => () => {
    setCurrentCompanyCode(companyCode);

    let today = new Date();
    setCurrentSelectedDateCode(today.toJSON().slice(0, 10));

    let slider = document.querySelector('#pick-day');
    if (slider !== null) {
      slider.scrollLeft = 0;
    }
  };

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
        <div className={classes.companySelectionContainer}>
          <CompanySelection
            companyList={companyList}
            currentCompanyCode={currentCompanyCode}
            handleSelectCompany={handleSelectCompany}
          />
        </div>
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
              filterMovieCode={movieItem.maPhim}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
