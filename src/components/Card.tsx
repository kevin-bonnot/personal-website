import Project from '../models/Project.ts';
import './Card.scss';

const Card = ({project}: {project: Project}) => {
  return (<div className='Card'>
    <img className='CardImage' src={project.image} alt='capture'/>
    <div className="CardBody">
      <div className='TagContainer'>{project.tags.map(tag => <span key={project.name + '-' + tag} className='Tag'>{tag}</span>)}</div>
      <p className='CardName'>{project.name}</p>
      <p className='CardDescription'>{project.description}</p>
      <a href={project.externalUrl}>Visiter</a>
    </div>
  </div>);
};

export default Card;
