import Project from '../models/Project.ts';
import './ProjectCard.scss';
import {useTranslation} from 'react-i18next';
import {Box, Button, Chip, Typography} from '@mui/material';

const ProjectCard = ({project, side}: {project: Project, side: 'left' | 'right'}) => {
  const {t} = useTranslation();

  return <div className='cardContainer' style={{
    flexDirection: side === 'left' ? 'row' : 'row-reverse'
  }}>
    <Box
      component='img'
      alt={t(project.name)}
      src={project.image}
      sx={{
        width: '50%',
        minWidth: '300px'
      }} 
    />
    <div style={{flexGrow: 1}}>
      <Typography variant='h3'>{t(project.name)}</Typography>
      <div className='TagContainer'>
        {project.tags.map(tag =>
          <Chip key={project.name + '-' + tag} label={tag}></Chip>
        )}
      </div>
      <Typography variant='body2'>{t(project.description)}</Typography>
      <Button style={{marginTop: 'auto'}} href={project.externalUrl} target='_blank'>{t('visit')}</Button>
      {project.github &&
        <Button href={project.github} target='_blank'>Github</Button>
      }
    </div>
  </div>;
};

export default ProjectCard;
