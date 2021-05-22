import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CompanySelection from './CompanySelection';
import CinemaSelection from './CinemaSelection';
import ScheduleSelection from './ScheduleSelection';

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
        <CompanySelection
          companyList={companyList}
          currentCompanyCode={currentCompanyCode}
          handleSelectCompany={handleSelectCompany}
        />
        <CinemaSelection
          cinemaList={cinemaList}
          currentCompanyCode={currentCompanyCode}
          currentCinemaCode={currentCinemaCode}
          handleSelectCinema={handleSelectCinema}
        />
        <ScheduleSelection
          scheduleList={scheduleList}
          currentCinemaCode={currentCinemaCode}
        />
      </div>
    </Container>
  );
}
