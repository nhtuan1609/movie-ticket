import {
  Home,
  Profile,
  Login,
  Register,
  MovieDetailPage,
  CinemaDetailPage,
  Booking,
} from '../pages';

export const mainRouter = [
  {
    path: '/',
    exact: true,
    Component: Home,
  },
  {
    path: '/profile',
    exact: true,
    Component: Profile,
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
    path: '/cinema/:maHeThongRap/:maCumRap',
    exact: false,
    Component: CinemaDetailPage,
  },
  {
    path: '/book/:maLichChieu',
    exact: false,
    Component: Booking,
  },
];
