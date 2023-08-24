import { Theme, extendTheme } from '@mui/joy';


export const darkThemeOptions: Theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          50: '#BB82F5',
          100: '#BB82F5',
          200: '#BB82F5',
          300: '#BB82F5',
          400: '#BB82F5',
          500: '#BB82F5',
          600: '#BB82F5',
          700: '#BB82F5',
          800: '#BB82F5',
          900: '#BB82F5',
        },
      },
    }
  },
  components: {
    JoyChip: {
      styleOverrides: {
        root: {
          color: 'white',
          backgroundColor: '#BB82F5'
        }
      }
    },
    JoyLink: {
      styleOverrides: {
        root: {
          color: '#BB82F5',
          textDecorationColor: '#BB82F5',
        }
      }
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
    },
    'h4': {
      color: '#BB82F5',
    }
  },
});