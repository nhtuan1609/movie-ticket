import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb4226',
    },
    textColor: {
      light: '#888',
      main: '#333',
      dark: '#000',
    },
    borderColor: {
      main: 'rgb(190, 190, 190)',
    },
    appBarColor: {
      main: 'rgba(255, 255, 255, 0.9)',
    },
  },
});
export default theme;
