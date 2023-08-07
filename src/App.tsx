import './App.scss';
import Project from './models/Project.ts';
import {useTranslation} from 'react-i18next';
import {
  AppBar,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import {Suspense, useEffect, useState} from 'react';
import ThreeCanvas from './components/three/ThreeCanvas.tsx';
import {Canvas} from '@react-three/fiber';
import {darkThemeOptions} from './themes/dark.ts';
import {OrbitControls} from '@react-three/drei';

function App() {
  const [language, setLanguage] = useState('');
  const {t, i18n} = useTranslation();

  const projects: Project[] = [
    {
      name: t('w2w.name'),
      description: t('w2w.description'),
      tags: ['React', 'Next', 'Redux'],
      image: './assets/what2watch.jpg',
      externalUrl: 'https://what2watch.kevinbonnot.fr'
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

  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    setRotation(rotation + Math.PI);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='sticky'>
        <Typography variant='h3'>Kévin Bonnot - {t('jobTitle')}</Typography>
      </AppBar>
      {/*<Container sx={{paddingBottom: 12}}>*/}
        <h2 className='SubTitle'>{t('myProjects')}</h2>
        <Button onClick={handleNext}>Next project</Button>
        <Canvas
          style={{
            height: '100%',
            width: '100%',
          }}
          shadows
          className='Canvas'
          camera={{
            fov: 55,
            position: [-5, 0, -15]
          }}
        >
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <ThreeCanvas groupRotation={rotation} projects={projects}></ThreeCanvas>
          </Suspense>
          <OrbitControls/>
        </Canvas>
      {/*  <div className="ProjectContainer">*/}
      {/*    {projects.map(project => <ProjectCard key={project.name} project={project}/>)}*/}
      {/*  </div>*/}
      {/*</Container>*/}
      <AppBar position={'fixed'} sx={{bottom: 0, top: 'auto', paddingY: 2}}>
        <Toolbar sx={{gap: 2}}>
          <a href="https://www.linkedin.com/in/kevinbonnot" target='_blank'>
            <img src="./assets/linkedin.png" alt="Log LinkendIn" width="48" className="LogoLinkedin"/>
          </a>
          <a href="https://github.com/kevin-bonnot" target='_blank'>
            <img src="./assets/github.png" alt="Log github" width="48" className="LogoLinkedin"/>
          </a>
          <Typography sx={{marginLeft: 'auto'}}>© Kévin Bonnot, {(new Date()).getFullYear()} -
            ({t('underConstruction')})</Typography>
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
