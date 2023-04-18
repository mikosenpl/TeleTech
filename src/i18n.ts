import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: { translation: require('./common/assets/i18n/pl.json') },
  en: { translation: require('./common/assets/i18n/en.json') },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
