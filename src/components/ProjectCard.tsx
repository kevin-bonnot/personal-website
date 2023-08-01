import Project from '../models/Project.ts';
import './ProjectCard.scss';
import {useTranslation} from 'react-i18next';
import {Button, Card, CardActions, CardContent, CardMedia} from '@mui/material';

const ProjectCard = ({project}: {project: Project}) => {
  const {t} = useTranslation();

  return (<Card>
    <CardMedia
      sx={{height: 184}}
      image={project.image}
      title={project.name}
    />
    <CardContent>
      <div className='TagContainer'>
        {project.tags.map(tag =>
          <span key={project.name + '-' + tag} className='Tag'>{tag}</span>
        )}
      </div>
      <h3 className='CardName'>{project.name}</h3>
      <p className='CardDescription'>{project.description}</p>
    </CardContent>
    <CardActions>
      <Button href={project.externalUrl} target='_blank'>{t('visit')}</Button>
      {project.github &&
        <Button href={project.github} target='_blank'>Github</Button>
      }
    </CardActions>
  </Card>);
};

export default ProjectCard;
