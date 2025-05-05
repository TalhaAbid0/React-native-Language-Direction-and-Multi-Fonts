import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, ur} from './translations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          return callback(language);
        } else {
          return callback('en');
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      console.log('Error saving language:', error);
    }
  },
};

// Resources for each language
const resources = {
  en: {translation: en},
  ur: {translation: ur},
};

i18next
  .use(initReactI18next)
  //@ts-ignore
  .use(languageDetectorPlugin)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18next;
