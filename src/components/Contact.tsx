import { Typography, Input, Button } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateId = 'template_jm8ciyf';
    const serviceId = 'service_xswu3w8';
    const myKey = 'fwtpxdySmPJzwRqVa';

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, myKey).then(res => {
        console.log(res);
        alert('Email send successfully');
      }).catch(err => {
        console.log(err);
        alert('Error while sending the email');
      });
    }
  };

  return <section className="sectionContainer" id='contact'>
    <Typography level='h2'>{t('contactMe')}</Typography>
    <Typography level='h3'>{t('byMail')}</Typography>
    <form ref={form} onSubmit={sendEmail}>
      <Input
        variant='outlined'
        name='name'
        required
        placeholder={t('name')}
      ></Input>
      <Input
        variant='outlined'
        type='email'
        name='reply_to'
        required
        placeholder={t('yourMail')}
      ></Input>
      <Input
        variant='outlined'
        name='object' 
        required
        placeholder={t('object')}
      ></Input>
      <Input
        variant='outlined'
        name='message'
        required
        placeholder={t('message')}
      ></Input>
      <Button type='submit'>{t('send')}</Button>
    </form>
    <Typography level='h3'>{t('mySocials')}</Typography>
  </section>;
};

export default Contact;