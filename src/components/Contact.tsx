import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return <section className="sectionContainer" id='contact'>
    <Typography variant='h2'>{t('contactMe')}</Typography>
  </section>;
};

export default Contact;