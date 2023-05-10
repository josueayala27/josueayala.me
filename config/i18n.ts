import es from "../locales/es.json";
import en from "../locales/en.json";

export default {
  locales: ["en", "es"],
  defaultLocale: "en",
  vueI18n: { fallbackLocale: "en", messages: { es, en } },
};
