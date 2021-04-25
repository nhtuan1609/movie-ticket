import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import { RouteMain } from './template';
import { mainRouter } from './config';

function renderMainRouter(listRouter) {
  return listRouter.map((router, index) => {
    return <RouteMain {...router} key={index} />;
  });
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Switch>{renderMainRouter(mainRouter)}</Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
