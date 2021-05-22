import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CompanySelection from '../company-selection';
import CinemaSelection from '../cinema-selection';
import ScheduleSelection from '../schedule-selection';

import CinemaAction from '../../redux/action/cinema';

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },
  cinemaBlockContainer: {
    height: '800px',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.borderColor.light}`,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  companySelectionContainer: {
    float: 'left',
    width: '92px',
    height: '100%',
  },
  cinemaSelectionContainer: {
    float: 'left',
    width: '30%',
    height: '100%',
  },
  scheduleSelectionContainer: {
    float: 'left',
    width: 'calc(100% - 30% - 92px)',
    height: '100%',
  },
}));

export default function CinemaBlock() {
  const classes = useStyles();
  const [currentCompanyCode, setCurrentCompanyCode] = React.useState('BHDStar');
  const [currentCinemaCode, setCurrentCinemaCode] = React.useState(
    'bhd-star-cineplex-3-2'
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
  };

  const handleSelectCinema = (cinemaCode) => (event) => {
    setCurrentCinemaCode(cinemaCode);
  };

  return (
    <Container maxWidth='md' className={classes.containerPadding}>
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
        <div className={classes.scheduleSelectionContainer}>
          <ScheduleSelection
            scheduleList={scheduleList}
            currentCinemaCode={currentCinemaCode}
          />
        </div>
      </div>
    </Container>
  );
}
