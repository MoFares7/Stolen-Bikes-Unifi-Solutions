import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationAr from "./files/ar.json";
import translationEn from "./files/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      debug: true,
      lng: localStorage.getItem("i18nextLng") || "en",
      resources: {
        en: {
          translation: translationEn,
        },
        ar: {
          translation: translationAr,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    },
    (err) => {
      if (err) return console.error(err);
      console.log("i18next initialized with languages:", i18n.languages);
    }
  );

export default i18n;
