import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json';
import esTranslation from './locales/es.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';
import zhTranslation from './locales/zh.json';
import swTranslation from './locales/sw.json';
import amTranslation from './locales/am.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            hi: { translation: hiTranslation },
            es: { translation: esTranslation },
            fr: { translation: frTranslation },
            ar: { translation: arTranslation },
            zh: { translation: zhTranslation },
            sw: { translation: swTranslation },
            am: { translation: amTranslation }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['path', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            lookupFromPathIndex: 0
        }
    });

export default i18n;
