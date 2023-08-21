import './App.scss';
import Project from './models/Project.ts';
import ProjectCard from './components/ProjectCard.tsx';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  createTheme,
  Divider,
  Fab,
  Fade,
  Link,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import { darkThemeOptions } from './themes/dark.ts';
import Contact from './components/Contact.tsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function App() {
  const [language, setLanguage] = useState('');
  const { t, i18n } = useTranslation();

  const projects: Project[] = [
    {
      name: t('w2w.name'),
      description: t('w2w.description'),
      tags: ['React', 'Next', 'Redux'],
      image: './assets/what2watch.jpg',
      externalUrl: 'https://what2watch.kevinbonnot.fr',
      github: 'https://github.com/kevin-bonnot/what-2-watch-next',
    },
    {
      name: t('three.name'),
      description: t('three.description'),
      tags: ['JS', 'Three.js', '3D'],
      image: './assets/3d.jpg',
      externalUrl: 'https://3d-text.kevinbonnot.fr'
    }
  ];

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

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const darkTheme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container sx={{ paddingBottom: 12 }} id="top-anchor">
        <div className="hero">
          <Typography variant='h1' textAlign='center'>Kévin Bonnot</Typography>
          <Typography variant='h2' textAlign='center' className='Job'>{t('jobTitle')}</Typography>
          <Typography variant='body1' marginY='100px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <div className="menu">
            <ul>
              <li><Link color='secondary' href='#projects'>{t('myProjects')}</Link></li>
              <li><Link color='secondary' href='#experience'>{t('myExperience')}</Link></li>
              <li><Link color='secondary' href='#contact'>{t('contactMe')}</Link></li>
            </ul>
          </div>
        </div>
        <section className="sectionContainer" id='projects'>
          <Typography variant='h2'>{t('myProjects')}</Typography>
          {projects.map((project, index) => <>{index !== 0 && <Divider variant='middle' sx={{marginBottom: 3}}/>}<ProjectCard key={project.name} project={project} side={index % 2 === 0 ? 'left' : 'right'} /></>)}
        </section>
        <section className="sectionContainer" id='experience'>
          <Typography variant='h2'>{t('myExperience')}</Typography>
        </section>
        <Contact />
      </Container>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

const ScrollTop = ({children}: {children: ReactElement}) => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
      const anchor = document.getElementById('top-anchor');

      if (anchor) {
        anchor.scrollIntoView();
      }
  };
  
  return <Fade in={trigger}>
    <Box
      sx={{ position: 'fixed', bottom: 16, right: 16 }}
      onClick={handleClick}
    >
      {children}
    </Box>
  </Fade>;
};

export default App;
