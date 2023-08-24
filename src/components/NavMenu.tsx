import { Link } from '@mui/joy';
import { useTranslation } from 'react-i18next';

const NavMenu = () => {
  const { t } = useTranslation();

  return <ul>
    <li><Link level='h4' href='#projects'>{t('myProjects')}</Link></li>
    <li><Link level='h4' href='#experience'>{t('myExperience')}</Link></li>
    <li><Link level='h4' href='#contact'>{t('contactMe')}</Link></li>
  </ul>;
};

export default NavMenu;
