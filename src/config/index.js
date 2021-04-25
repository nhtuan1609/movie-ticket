import { Detail, Home, Login, Register } from '../pages';

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
    Component: Detail,
  },
];
