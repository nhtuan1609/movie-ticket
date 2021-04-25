import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Header, Footer } from '../../components';
import { Fragment } from 'react';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <Box marginTop='60px'>{props.children}</Box>
      <Footer />
    </Fragment>
  );
};

const RouteMain = (props) => {
  const { Component, ...routes } = props;

  return (
    <Route {...routes}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default RouteMain;
