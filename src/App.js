import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <HomePage />;
}
