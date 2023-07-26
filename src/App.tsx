import './App.scss';
import Project from './models/Project.ts';
import Card from './components/Card.tsx';

function App() {
  const projects: Project[] = [
    {
      name: 'What2Watch',
      description: 'Site de recherche de film permettant d\'enregistrer ses favoris',
      tags: ['React', 'Next', 'Redux'],
      image: './assets/what2watch.jpg',
      externalUrl: 'https://what2watch.kevinbonnot.fr'
    },
    {
      name: 'Démo three.js',
      description: 'Test de three.js réaliser en suivant le cours Three.js Journey par Bruno Simon',
      tags: ['JS', 'Three.js', '3D  '],
      image: './assets/3d.jpg',
      externalUrl: 'https://3d-text.kevinbonnot.fr'
    }
  ];

  return (
    <>
      <h1 className='MainTitle'>Kévin Bonnot</h1>
      <h2 className='Job'>Fullstack developer</h2>
      <h3 className='SubTitle'>Mes projets</h3>
      <div className="ProjectContainer">
        {projects.map(project => <Card key={project.name} project={project} />)}
      </div>
      <a href="https://www.linkedin.com/in/kevinbonnot">
        <img src="./assets/linkedin.png" alt="Log LinkendIn" width="64" className="LogoLinkedin"/>
      </a>
    </>
  );
}

export default App;
