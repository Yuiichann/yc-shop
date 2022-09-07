import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#000',
    },
    secondary: {
      main: '#000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

export { lightTheme, darkTheme };
