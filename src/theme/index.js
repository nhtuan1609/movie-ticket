import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb4226',
    },
    textColor: {
      white: '#eee',
      light: '#888',
      main: '#333',
      dark: '#000',
    },
    borderColor: {
      light: 'rgb(210, 210, 210)',
      main: 'rgb(190, 190, 190)',
      dark: 'rgb(150, 150, 150)',
    },
    appBarColor: {
      main: 'rgba(255, 255, 255, 0.9)',
    },
  },
  font: {
    primary: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  },
});
export default theme;
