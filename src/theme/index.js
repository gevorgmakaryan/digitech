import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import palette from './palette';

const getTheme = () => responsiveFontSizes(
  createMuiTheme({
    palette,
    typography: {
      fontFamily: 'Lato',
      button: {
        textTransform: 'none',
        fontWeight: 600,
      }
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  }),
);

export default getTheme;
