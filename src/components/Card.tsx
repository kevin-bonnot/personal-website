import Project from '../models/Project.ts';
import './Card.scss';
import {useTranslation} from "react-i18next";

const Card = ({project}: {project: Project}) => {
  const {t} = useTranslation();

  return (<div className='Card'>
    <img className='CardImage' src={project.image} alt='capture'/>
    <div className="CardBody">
      <div className='TagContainer'>{project.tags.map(tag => <span key={project.name + '-' + tag} className='Tag'>{tag}</span>)}</div>
      <h3 className='CardName'>{project.name}</h3>
      <p className='CardDescription'>{project.description}</p>
      <a className='CardLink' href={project.externalUrl}>{t('visit')}</a>
    </div>
  </div>);
};

export default Card;
