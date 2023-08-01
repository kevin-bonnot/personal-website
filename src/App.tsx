import './App.scss';
import Project from './models/Project.ts';
import Card from './components/Card.tsx';
import { useTranslation } from 'react-i18next';
import {Button, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {useEffect, useState} from 'react';
import ThreeCanvas from './components/three/ThreeCanvas.tsx';
import {Canvas} from '@react-three/fiber';

function App() {
  const [language, setLanguage] = useState('');
  const { t, i18n } = useTranslation();

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

  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    setRotation(rotation + (Math.PI * 2 / 3));
  };

  return (
    <Container>
      <FormControl fullWidth>
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
      <h1 className='MainTitle'>Kévin Bonnot {t('jobTitle')}</h1>
      <h2 className='SubTitle'>{t('myProjects')}</h2>
      <Button onClick={handleNext}>Next project</Button>
      <Canvas className='Canvas'>
        <ThreeCanvas></ThreeCanvas>
        <camera position-z={-20} />
        {/*<OrbitControls />*/}
      </Canvas>
      <div className="ProjectContainer">
        {projects.map(project => <Card key={project.name} project={project} />)}
      </div>
      <a href="https://www.linkedin.com/in/kevinbonnot">
        <img src="./assets/linkedin.png" alt="Log LinkendIn" width="64" className="LogoLinkedin"/>
      </a>
    </Container>
  );
}

export default App;


