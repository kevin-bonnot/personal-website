import { Typography, Link } from '@mui/joy';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return <div className="hero">
    <Typography level='h1' textAlign='center'>Kévin Bonnot</Typography>
    <Typography level='h2' textAlign='center' className='Job'>{t('jobTitle')}</Typography>
    <Typography level='body-md' marginY='100px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    <div className="menu">
      <ul>
        <li><Link level='h4' href='#projects'>{t('myProjects')}</Link></li>
        <li><Link level='h4' href='#experience'>{t('myExperience')}</Link></li>
        <li><Link level='h4' href='#contact'>{t('contactMe')}</Link></li>
      </ul>
    </div>
  </div>;
};

export default Hero;
