import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "./locales/en/translation.json";
import Hn from "./locales/hn/translation.json";

const resources = {
  en: {
    translation: En,
  },
  hn: {
    translation: Hn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
