import './App.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { darkThemeOptions } from './themes/dark.ts';
import Contact from './components/Contact.tsx';
import { 
  Box,
  Container, 
  CssVarsProvider,
  Select, 
  Option 
} from '@mui/joy';
import ScrollTop from './components/ScrollTop.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';


function App() {
  const [language, setLanguage] = useState('');
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log(window.navigator.language);
    if (window.navigator.language === 'fr-FR' || window.navigator.language === 'fr-FR') {
      setLanguage('fr');
    } else {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguageChange = (_: React.SyntheticEvent | null, newValue: string | null) => {
    !!newValue && setLanguage(newValue);
  };

  // const darkTheme = createTheme(darkThemeOptions);

  return (
    <CssVarsProvider defaultMode='dark' theme={darkThemeOptions}>
      <Container id="top-anchor">
        <Hero />
        <Projects />
        <Contact />
      </Container>
      <ScrollTop />
      <Box
        sx={{
          position: 'fixed',
          left: '16px',
          bottom: '16px'
        }}
      >
        <Select value={language} onChange={handleLanguageChange}>
          <Option value='fr'>FR</Option>
          <Option value='en'>EN</Option>
        </Select>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
