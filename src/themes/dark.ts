import { Theme, extendTheme } from '@mui/joy';


export const darkThemeOptions: Theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          400: '#BB82F5',
        },
      },
    }
  },
  typography: {
    h1: {
      fontFamily: 'Permanent Marker',
      textTransform: 'uppercase',
      color: '#69F597',
      fontSize: '70px'
    },
    h2: {
      fontFamily: 'Oswald',
      textTransform: 'uppercase',
      color: '#BB82F5',
      fontSize: '40px'
    },
    h3: {
      color: '#69F597',
      fontFamily: 'Oswald',
      fontSize: '35px'
    },
    'body-md': {
      fontSize: '24px',
      lineHeight: 1.75,
      color: 'white'
    },
    'body-sm': {
      fontSize: '20px',
      lineHeight: 1.75,
      color: 'white'
    }
  },
});