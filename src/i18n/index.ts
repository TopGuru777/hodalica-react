import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "data/en.json";
import bn from "data/bn.json";

const options: any = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,

  // lng: 'en',

  resources: {
    bn: {
      common: bn,
    },
    en: {
      common: en,
    },
  },

  fallbackLng: "en",

  ns: ["common"],

  defaultNS: "common",

  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
  },
};

i18n.use(LanguageDetector).init(options);
//   .changeLanguage("en", (err: any, t: any) => {
//     if (err) return console.log("something went wrong loading", err);
//   });

export default i18n;
