const NextI18Next = require("next-i18next").default;

const availableLocales = ["fr", "en"];
const defaultLocale = "fr";

const NextI18NextInstance = new NextI18Next({
  fallbackLng: defaultLocale,
  defaultLanguage: defaultLocale,
  otherLanguages: availableLocales.filter(l => l !== defaultLocale),
  localePath: "public/static/locales",
  localeStructure: "{{lng}}/{{ns}}",
  localeSubpaths: {
    en: "en"
  },
  detection: {
    order: ["header", "querystring"]
  },
  defaultNS: "common"
});
NextI18NextInstance.i18n.languages = availableLocales;
module.exports = NextI18NextInstance;
module.exports.availableLocales = availableLocales;
module.exports.defaultLocale = defaultLocale;
