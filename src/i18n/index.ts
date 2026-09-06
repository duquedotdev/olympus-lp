import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Use Vite's import.meta.glob to load all locale JSON files that exist.
// This avoids hardcoding 55 imports when only some files are present yet.
const localeModules = import.meta.glob("./locales/*.json", { eager: true });

const resources: Record<string, { translation: Record<string, unknown> }> = {};

for (const [path, mod] of Object.entries(localeModules)) {
  const code = path.match(/\/([^/]+)\.json$/)?.[1];
  if (code) {
    resources[code] = { translation: (mod as { default: Record<string, unknown> }).default };
  }
}

export const LANGUAGES = [
  { code: "pt_BR", label: "Português", nativeLabel: "Português" },
  { code: "en_US", label: "Inglês", nativeLabel: "English" },
  { code: "es_ES", label: "Espanhol", nativeLabel: "Español" },
  { code: "fr_FR", label: "Francês", nativeLabel: "Français" },
  { code: "zh_CN", label: "Chinês simplificado", nativeLabel: "简体中文" },
  { code: "de_DE", label: "Alemão", nativeLabel: "Deutsch" },
  { code: "it_IT", label: "Italiano", nativeLabel: "Italiano" },
  { code: "nl_NL", label: "Neerlandês", nativeLabel: "Nederlands" },
  { code: "ru_RU", label: "Russo", nativeLabel: "Русский" },
  { code: "pl_PL", label: "Polonês", nativeLabel: "Polski" },
  { code: "sv_SE", label: "Sueco", nativeLabel: "Svenska" },
  { code: "el_GR", label: "Grego", nativeLabel: "Ελληνικά" },
  { code: "cs_CZ", label: "Tcheco", nativeLabel: "Čeština" },
  { code: "hu_HU", label: "Húngaro", nativeLabel: "Magyar" },
  { code: "ro_RO", label: "Romeno", nativeLabel: "Română" },
  { code: "uk_UA", label: "Ucraniano", nativeLabel: "Українська" },
  { code: "hi_IN", label: "Hindi", nativeLabel: "हिन्दी" },
  { code: "ja_JP", label: "Japonês", nativeLabel: "日本語" },
  { code: "ko_KR", label: "Coreano", nativeLabel: "한국어" },
  { code: "tr_TR", label: "Turco", nativeLabel: "Türkçe" },
  { code: "ar_SA", label: "Árabe", nativeLabel: "العربية" },
  { code: "zh_TW", label: "Chinês tradicional", nativeLabel: "繁體中文" },
  { code: "nl_BE", label: "Neerlandês belga", nativeLabel: "Vlaams" },
  { code: "ca_ES", label: "Catalão", nativeLabel: "Català" },
  { code: "th_TH", label: "Tailandês", nativeLabel: "ไทย" },
  { code: "sq_AL", label: "Albanês", nativeLabel: "Shqip" },
  { code: "be_BY", label: "Bielorrusso", nativeLabel: "Беларуская" },
  { code: "bg_BG", label: "Búlgaro", nativeLabel: "Български" },
  { code: "bs_BA", label: "Bósnio", nativeLabel: "Bosanski" },
  { code: "hr_HR", label: "Croata", nativeLabel: "Hrvatski" },
  { code: "da_DK", label: "Dinamarquês", nativeLabel: "Dansk" },
  { code: "et_EE", label: "Estoniano", nativeLabel: "Eesti" },
  { code: "fi_FI", label: "Finlandês", nativeLabel: "Suomi" },
  { code: "fil_PH", label: "Filipino", nativeLabel: "Filipino" },
  { code: "ga_IE", label: "Irlandês", nativeLabel: "Gaeilge" },
  { code: "is_IS", label: "Islandês", nativeLabel: "Íslenska" },
  { code: "lv_LV", label: "Letão", nativeLabel: "Latviešu" },
  { code: "lt_LT", label: "Lituano", nativeLabel: "Lietuvių" },
  { code: "mk_MK", label: "Macedônio", nativeLabel: "Македонски" },
  { code: "mt_MT", label: "Maltês", nativeLabel: "Malti" },
  { code: "no_NO", label: "Norueguês", nativeLabel: "Norsk" },
  { code: "sk_SK", label: "Eslovaco", nativeLabel: "Slovenčina" },
  { code: "sl_SI", label: "Esloveno", nativeLabel: "Slovenščina" },
  { code: "sr_RS", label: "Sérvio", nativeLabel: "Српски" },
  { code: "af_ZA", label: "Afrikaans", nativeLabel: "Afrikaans" },
  { code: "ht_HT", label: "Crioulo Haitiano", nativeLabel: "Kreyòl Ayisyen" },
  { code: "lb_LU", label: "Luxemburguês", nativeLabel: "Lëtzebuergesch" },
  { code: "mi_NZ", label: "Maori", nativeLabel: "Māori" },
  { code: "gn_PY", label: "Guarani", nativeLabel: "Avañeẽ" },
  { code: "qu_BO", label: "Quíchua", nativeLabel: "Runa Simi" },
  { code: "ay_BO", label: "Aimará", nativeLabel: "Aymar" },
  { code: "rw_RW", label: "Kinyarwanda", nativeLabel: "Kinyarwanda" },
  { code: "bi_VU", label: "Bislama", nativeLabel: "Bislama" },
  { code: "ms_MY", label: "Malaio", nativeLabel: "Bahasa Melayu" },
  { code: "ta_IN", label: "Tâmil", nativeLabel: "தமிழ்" },
];

export const DEFAULT_LANGUAGE = "pt_BR";

const savedLang = typeof localStorage !== "undefined"
  ? localStorage.getItem("olympkus-language")
  : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

export default i18n;
