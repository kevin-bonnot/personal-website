import {useFrame, useThree} from '@react-three/fiber';
import {useRef} from 'react';
import {Group} from 'three';
import {Html} from '@react-three/drei';
import Project from '../../models/Project.ts';
import {useTranslation} from 'react-i18next';
import Card from '../Card.tsx';
import {useControls} from 'leva';

const ThreeCanvas = () => {
  const {t} = useTranslation();
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

  const {position} = useControls('HTML frames', {
    'position': {
      value: 3.6,
      min: 0,
      max: 10
    }
  });

  const group = useRef<Group>(null!);

  // useFrame((_, delta) => {
  //   group.current.rotation.y += (groupRotation - group.current.rotation.y) * 0.05;
  // });

  useFrame((_, delta) => {
    group.current.rotation.y += delta;

  });
  const {size} = useThree();

  // Calculer la taille de la div par rapport à la taille de l'écran
  const divWidth = size.width / 4;
  const divHeight = size.height / 4;

  return <>
    <ambientLight/>
    <pointLight position={[10, 10, 10]}/>
    <axesHelper />
    <group ref={group} position-z={-10}>
      <Html transform position={[(Math.sin(0) * 5) - position, 0, Math.cos(0) * 5]} scale={[1, 1, 1]}>
        <div
          style={{
            position: 'absolute',
            width: divWidth,
            height: divHeight,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none', // Cela permettra de cliquer à travers la div si nécessaire
          }}
        >
          <Card project={projects[0]}/>
        </div>
      </Html>
      <Html transform position={[Math.sin(Math.PI * 2 / 3) * 5, 0, Math.cos(Math.PI * 2 / 3) * 5]} rotation-y={Math.PI * 2 / 3}>
        <div
          style={{
            position: 'absolute',
            width: divWidth,
            height: divHeight,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none', // Cela permettra de cliquer à travers la div si nécessaire
          }}
        >
          <Card project={projects[1]}/>
        </div>
      </Html>
      <Html transform position={[Math.sin(Math.PI * 4 / 3) * 5, 0, Math.cos(Math.PI * 4 / 3) * 5]} rotation-y={Math.PI * 4 / 3}>
        <div
          style={{
            position: 'absolute',
            width: divWidth,
            height: divHeight,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none', // Cela permettra de cliquer à travers la div si nécessaire
          }}
        >
          <Card project={projects[1]}/>
        </div>
      </Html>
    </group>
    {/* Plan 3D */}
  </>;
};

export default ThreeCanvas;
