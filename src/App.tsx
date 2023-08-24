import './App.scss';
import Project from './models/Project.ts';
import ProjectCard from './components/ProjectCard.tsx';
import { useTranslation } from 'react-i18next';
import { Fragment, ReactElement, useEffect, useState } from 'react';
import { darkThemeOptions } from './themes/dark.ts';
import Contact from './components/Contact.tsx';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { 
  Box,
  Container, 
  CssVarsProvider, 
  Divider, 
  IconButton, 
  Link, 
  Typography, 
  Select, 
  Option 
} from '@mui/joy';


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

  const handleLanguageChange = (_: React.SyntheticEvent | null, newValue: string | null) => {
    !!newValue && setLanguage(newValue);
  };

  // const darkTheme = createTheme(darkThemeOptions);

  return (
    <>
    <CssVarsProvider theme={darkThemeOptions}>
      <Container id="top-anchor">
        <div className="hero">
          <Typography level='h1' textAlign='center'>Kévin Bonnot</Typography>
          <Typography level='h2' textAlign='center' className='Job'>{t('jobTitle')}</Typography>
          <Typography level='body-md' marginY='100px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <div className="menu">
            <ul>
              <li><Link href='#projects'>{t('myProjects')}</Link></li>
              <li><Link href='#experience'>{t('myExperience')}</Link></li>
              <li><Link href='#contact'>{t('contactMe')}</Link></li>
            </ul>
          </div>
        </div>
        <section className="sectionContainer" id='projects'>
          <Typography level='h2'>{t('myProjects')}</Typography>
          {projects.map((project, index) => <Fragment key={project.name}>{index !== 0 && <Divider sx={{marginBottom: 3}}/>}<ProjectCard project={project} side={index % 2 === 0 ? 'left' : 'right'} /></Fragment>)}
        </section>
        <section className="sectionContainer" id='experience'>
          <Typography level='h2'>{t('myExperience')}</Typography>
        </section>
        <Contact />
      </Container>
      <ScrollTop>
        <IconButton aria-label="scroll back to top" color='primary' variant='solid'>
          <KeyboardArrowUpIcon color='info' />
        </IconButton>
      </ScrollTop>
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
    </>
  );
}

const ScrollTop = ({children}: {children: ReactElement}) => {

  const handleClick = () => {
      const anchor = document.getElementById('top-anchor');

      if (anchor) {
        anchor.scrollIntoView();
      }
  };
  
  return <Box
    sx={{ position: 'fixed', bottom: 16, right: 16 }}
    onClick={handleClick}
  >
    {children}
  </Box>;
};

export default App;
