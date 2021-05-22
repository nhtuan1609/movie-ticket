import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    float: 'left',
    width: '92px',
    height: '100%',
    borderRight: `1px solid ${theme.palette.borderColor.light}`,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '4px',
      backgroundColor: '#e8e3e3',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      boxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)',
    },
  },
  companyItem: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '&:hover': {
      '& img': {
        opacity: '1',
      },
    },
  },
  companyItemHightligh: {
    width: '100%',
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 18px',
    cursor: 'pointer',
    '& img': {
      opacity: '1',
    },
  },
  companyItemLogo: {
    width: '50px',
    height: '50px',
    margin: 'auto',
    opacity: '0.6',
  },
  horizontalSeparate: {
    width: '100%',
    borderBottom: `1px solid ${theme.palette.borderColor.light}`,
  },
}));

export default function CompanySelection(props) {
  const classes = useStyles();
  const { companyList, currentCompanyCode, handleSelectCompany } = props;

  const renderCompanyList = (
    companyList,
    currentCompanyCode,
    handleSelectCompany
  ) => {
    return companyList.map((item, index) => {
      return (
        <div
          className={
            item.maHeThongRap === currentCompanyCode
              ? classes.companyItemHightligh
              : classes.companyItem
          }
          key={index}
          onClick={handleSelectCompany(item.maHeThongRap)}
        >
          <img
            className={classes.companyItemLogo}
            src={item.logo}
            alt={item.maHeThongRap}
          ></img>
          <div className={classes.horizontalSeparate}></div>
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      {renderCompanyList(companyList, currentCompanyCode, handleSelectCompany)}
    </div>
  );
}
