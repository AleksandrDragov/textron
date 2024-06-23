import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {cz} from "./cz/cz";
import {en} from "./en/en";
import { LOCALS } from "./constants";

const resources = {
  [LOCALS.CZ]: {
    translation:cz
  },
  [LOCALS.EN]: {
    translation:en
  }
};

i18n
 .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng:'cz',
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;