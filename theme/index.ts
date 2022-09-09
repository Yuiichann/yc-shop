import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
    mode: 'dark',
    secondary: {
      main: '#fff',
    },
  },
});

export { lightTheme, darkTheme };
