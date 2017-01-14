import i18next from 'i18next';
import es from './es';

/**
 * @module {Object} i18n
 * @description Módulo de internacionalización.
 */
i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: { es }
});

export default i18next;
