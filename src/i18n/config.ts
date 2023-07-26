import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/en.json';
import fr from './fr/fr.json';

i18next.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    }
  }
});
