import {
  Home,
  Login,
  Register,
  MovieDetailPage,
  CinemaDetailPage,
} from '../pages';

export const mainRouter = [
  {
    path: '/',
    exact: true,
    Component: Home,
  },
  {
    path: '/login',
    exact: true,
    Component: Login,
  },
  {
    path: '/register',
    exact: true,
    Component: Register,
  },
  {
    path: '/movie/:movieId',
    exact: false,
    Component: MovieDetailPage,
  },
  {
    path: '/cinema/:cinemaId',
    exact: false,
    Component: CinemaDetailPage,
  },
];
