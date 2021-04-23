import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import FilmInforPage from './pages/film-infor';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/dang-nhap' exact component={Login} />
            <Route path='/dang-ky' exact component={Register} />
            <Route path='/thong-tin' exact component={FilmInfor} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <HomePage />;
}

function Login() {
  return <LoginPage />;
}

function Register() {
  return <RegisterPage />;
}

function FilmInfor() {
  return <FilmInforPage />;
}
