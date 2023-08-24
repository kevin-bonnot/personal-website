import { Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  return <section className="sectionContainer" id='experience'>
    <Typography level='h2'>{t('myExperience')}</Typography>
  </section>;
};

export default Experience;
