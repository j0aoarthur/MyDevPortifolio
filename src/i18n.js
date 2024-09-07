import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Get the base URL from Vite
const baseUrl = import.meta.env.BASE_URL || '/';

i18n
    .use(Backend) // Allows reading files from public/locales or external app
    .use(LanguageDetector) // Detects browser language
    .use(initReactI18next) // Initializes i18next
    .init({
        fallbackLng: 'pt-BR', // Fallback language
        supportedLngs: ['pt-BR', 'en-US'], // Supported languages
        backend: {
            loadPath: `${baseUrl}locales/{{lng}}/{{ns}}.json` // Use the base URL for translation files
        },
    });