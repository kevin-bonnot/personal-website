import { Typography, Divider } from '@mui/joy';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Project from '../models/Project';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const {t} = useTranslation();

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

  return <section className="sectionContainer" id='projects'>
    <Typography level='h2'>{t('myProjects')}</Typography>
    {projects.map((project, index) => <Fragment key={project.name}>{index !== 0 && <Divider sx={{marginBottom: 3}}/>}<ProjectCard project={project} side={index % 2 === 0 ? 'left' : 'right'} /></Fragment>)}
  </section>;
};

export default Projects;
