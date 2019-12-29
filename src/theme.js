import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#45a329',
    },
    secondary: {
      main: '#8729A3',
    },
    error: {
      main: '#ff0000',
    },
    warning: {
      main: '#ff1744',
    },
    info: {
      main: '#8729A3',
    },
    success: {
      main: '#45a329',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;