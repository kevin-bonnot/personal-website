import Project from '../models/Project.ts';
import './ProjectCard.scss';
import {useTranslation} from 'react-i18next';
import {Box, Chip, Link, Typography} from '@mui/joy';

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
        minWidth: '300px',
        flex: 1
      }} 
    />
    <div style={{flex: 1}}>
      <Typography level='h3'>{t(project.name)}</Typography>
      <div className='TagContainer'>
        {project.tags.map(tag =>
          <Chip color='primary' key={project.name + '-' + tag}>{tag}</Chip>
        )}
      </div>
      <Typography level='body-sm'>{t(project.description)}</Typography>
      <Link  level='h4' style={{marginTop: 'auto', marginRight: '16px'}} href={project.externalUrl} target='_blank'>{t('visit')}</Link>
      {project.github &&
        <Link level='h4' href={project.github} target='_blank'>Github</Link>
      }
    </div>
  </div>;
};

export default ProjectCard;
