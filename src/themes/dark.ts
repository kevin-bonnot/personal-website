import { ThemeOptions } from '@mui/material/styles';

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB82F5',
    },
    secondary: {
      main: '#BB82F5',
    },
    text: {
      secondary: '#BB82F5',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
      textTransform: 'uppercase'
    },
    h2: {
      fontFamily: 'Oswald',
      textTransform: 'uppercase',
      color: '#BB82F5',
    },
    h3: {
      fontFamily: 'Oswald',
    },
    body1: {
      fontSize: 24,
      lineHeight: 1.75
    }
  },
};