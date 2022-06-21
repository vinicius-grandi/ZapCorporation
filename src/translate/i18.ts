import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import { messages } from './languages'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'pt',
        ns: ['translations'],
        defaultNS: 'translations',
        resources: messages
    });

export default i18n
