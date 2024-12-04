import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

export function initI18next() {
  i18next
    .use(HttpBackend) // Enables HTTP backend for loading translations
    .init({
      fallbackLng: 'en', // Default language
      debug: true, // Enable for debugging purposes
      lng: 'en', // Set the default language
      backend: {
        loadPath: '/assets/i18n/{{lng}}.json', // Path to translation files
      },
      interpolation: {
        escapeValue: false, // Prevent escaping HTML in translations
      },
    });

  return i18next;
}
