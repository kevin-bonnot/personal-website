import './App.scss';
import Project from './models/Project.ts';
import ProjectCard from './components/ProjectCard.tsx';
import {useTranslation} from 'react-i18next';
import {
  AppBar,
  Container,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider, Toolbar, Typography
} from '@mui/material';
import {useEffect, useState} from 'react';
import {darkThemeOptions} from './themes/dark.ts';

function App() {
  const [language, setLanguage] = useState('');
  const {t, i18n} = useTranslation();

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
  }, [language]);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  const darkTheme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='sticky'>
        <Typography variant='h3'>Kévin Bonnot - {t('jobTitle')}</Typography>
      </AppBar>
      <Container sx={{paddingBottom: 12}}>
        <h2 className='SubTitle'>{t('myProjects')}</h2>
        <div className="ProjectContainer">
          {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
        </div>
      </Container>
      <AppBar position={'fixed'} sx={{bottom: 0, top: 'auto', paddingY: 2}}>
        <Toolbar sx={{gap: 2}}>
          <a href="https://www.linkedin.com/in/kevinbonnot" target='_blank'>
            <img src="./assets/linkedin.png" alt="Log LinkendIn" width="48" className="LogoLinkedin"/>
          </a>
          <a href="https://github.com/kevin-bonnot" target='_blank'>
            <img src="./assets/github.png" alt="Log github" width="48" className="LogoLinkedin"/>
          </a>
          <Typography sx={{marginLeft: 'auto'}}>© Kévin Bonnot, {(new Date()).getFullYear()} - ({t('underConstruction')})</Typography>
          <FormControl fullWidth={false} sx={{marginLeft: 'auto'}}>
            <InputLabel id="lang-select-label">{t('language')}</InputLabel>
            <Select
              labelId="lang-select-label"
              id="lang-select"
              value={language}
              label={t('language')}
              onChange={handleLanguageChange}
            >
              <MenuItem value={'fr'}>{t('french')}</MenuItem>
              <MenuItem value={'en'}>{t('english')}</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>

      </AppBar>
    </ThemeProvider>
  );
}

export default App;
