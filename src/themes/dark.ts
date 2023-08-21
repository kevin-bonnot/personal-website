import { ThemeOptions } from '@mui/material/styles';

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB82F5',
    },
    secondary: {
      main: '#69F597',
    },
    info:{
      main: '#ffffff'
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
      fontFamily: 'Permanent Marker',
      textTransform: 'uppercase',
      color: '#69F597',
      fontSize: 70
    },
    h2: {
      fontFamily: 'Oswald',
      textTransform: 'uppercase',
      color: '#BB82F5',
      fontSize: 40
    },
    h3: {
      color: '#69F597',
      fontFamily: 'Oswald',
    },
    body1: {
      fontSize: 24,
      lineHeight: 1.75
    }
  },
};