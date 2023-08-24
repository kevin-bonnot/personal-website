import './App.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { darkThemeOptions } from './themes/dark.ts';
import Contact from './components/Contact.tsx';
import { 
  Box,
  Container, 
  CssVarsProvider,
  Select, 
  Option, 
  Typography,
  Link
} from '@mui/joy';
import ScrollTop from './components/ScrollTop.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';


function App() {
  const [language, setLanguage] = useState('');
  const { t, i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const sectionRect = heroRef.current.getBoundingClientRect();
        console.log(sectionRect.bottom, window.innerHeight);
        if (sectionRect.top > 0) {
          setShowMenu(false);
        } else {
          setShowMenu(true);
        }
      }
    };

    if (window.navigator.language === 'fr-FR' || window.navigator.language === 'fr-FR') {
      setLanguage('fr');
    } else {
      setLanguage('en');
    }


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguageChange = (_: React.SyntheticEvent | null, newValue: string | null) => {
    !!newValue && setLanguage(newValue);
  };

  return (
    <CssVarsProvider defaultMode='dark' theme={darkThemeOptions}>
      <Container id="top-anchor">
        <div className="hero">
          <Typography level='h1' textAlign='center'>Kévin Bonnot</Typography>
          <Typography level='h2' textAlign='center' className='Job'>{t('jobTitle')}</Typography>
          <Typography level='body-md' marginY='100px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <div ref={heroRef} className="menu">
            <ul>
              <li><Link level='h4' href='#projects'>{t('myProjects')}</Link></li>
              <li><Link level='h4' href='#experience'>{t('myExperience')}</Link></li>
              <li><Link level='h4' href='#contact'>{t('contactMe')}</Link></li>
            </ul>
          </div>
        </div>
        {showMenu && <div style={{backgroundColor: 'black', position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000}} className='menu'>
          <ul>
            <li><Link level='h4' href='#projects'>{t('myProjects')}</Link></li>
            <li><Link level='h4' href='#experience'>{t('myExperience')}</Link></li>
            <li><Link level='h4' href='#contact'>{t('contactMe')}</Link></li>
          </ul>  
        </div>}
        <Projects />
        <Experience />
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
