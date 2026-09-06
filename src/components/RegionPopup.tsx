import { useEffect, useState } from "react";

type Country = { name: string; code: string };

const COUNTRIES: Country[] = [
  { name: "Albânia", code: "sq-AL" },
  { name: "Alemanha", code: "de-DE" },
  { name: "África do Sul", code: "af-ZA" },
  { name: "Austrália", code: "en-AU" },
  { name: "Áustria", code: "de-AT" },
  { name: "Bélgica", code: "nl-BE" },
  { name: "Bielorrússia", code: "be-BY" },
  { name: "Bolívia", code: "es-BO" },
  { name: "Bósnia e Herzegovina", code: "bs-BA" },
  { name: "Brasil", code: "pt-BR" },
  { name: "Bulgária", code: "bg-BG" },
  { name: "Camarões", code: "fr-CM" },
  { name: "Canadá", code: "en-CA" },
  { name: "Chade", code: "fr-TD" },
  { name: "Chile", code: "es-CL" },
  { name: "China", code: "zh-CN" },
  { name: "Cidade do Vaticano", code: "it-VA" },
  { name: "Colômbia", code: "es-CO" },
  { name: "Costa do Marfim", code: "fr-CI" },
  { name: "Costa Rica", code: "es-CR" },
  { name: "Croácia", code: "hr-HR" },
  { name: "Cuba", code: "es-CU" },
  { name: "Egito", code: "ar-EG" },
  { name: "El Salvador", code: "es-SV" },
  { name: "Equador", code: "es-EC" },
  { name: "Eslováquia", code: "sk-SK" },
  { name: "Eslovênia", code: "sl-SI" },
  { name: "Espanha", code: "es-ES" },
  { name: "Estados Unidos", code: "en-US" },
  { name: "Estônia", code: "et-EE" },
  { name: "Filipinas", code: "fil-PH" },
  { name: "Finlândia", code: "fi-FI" },
  { name: "França", code: "fr-FR" },
  { name: "Gabão", code: "fr-GA" },
  { name: "Grécia", code: "el-GR" },
  { name: "Guatemala", code: "es-GT" },
  { name: "Guiné", code: "fr-GN" },
  { name: "Guiné-Bissau", code: "pt-GW" },
  { name: "Haiti", code: "fr-HT" },
  { name: "Honduras", code: "es-HN" },
  { name: "Hong Kong", code: "zh-HK" },
  { name: "Hungria", code: "hu-HU" },
  { name: "Índia", code: "hi-IN" },
  { name: "Irlanda", code: "en-IE" },
  { name: "Islândia", code: "is-IS" },
  { name: "Itália", code: "it-IT" },
  { name: "Jamaica", code: "en-JM" },
  { name: "Letônia", code: "lv-LV" },
  { name: "Liechtenstein", code: "de-LI" },
  { name: "Lituânia", code: "lt-LT" },
  { name: "Luxemburgo", code: "fr-LU" },
  { name: "Macau", code: "zh-MO" },
  { name: "Macedônia do Norte", code: "mk-MK" },
  { name: "Mali", code: "fr-ML" },
  { name: "Malta", code: "mt-MT" },
  { name: "Moldávia", code: "ro-MD" },
  { name: "México", code: "es-MX" },
  { name: "Mônaco", code: "fr-MC" },
  { name: "Nicarágua", code: "es-NI" },
  { name: "Noruega", code: "nb-NO" },
  { name: "Nova Zelândia", code: "en-NZ" },
  { name: "Níger", code: "fr-NE" },
  { name: "Panamá", code: "es-PA" },
  { name: "Papua-Nova Guiné", code: "en-PG" },
  { name: "Países Baixos", code: "nl-NL" },
  { name: "Paraguai", code: "es-PY" },
  { name: "Peru", code: "es-PE" },
  { name: "Polônia", code: "pl-PL" },
  { name: "Portugal", code: "pt-PT" },
  { name: "Reino Unido", code: "en-GB" },
  { name: "República Dominicana", code: "es-DO" },
  { name: "República do Congo", code: "fr-CG" },
  { name: "Romênia", code: "ro-RO" },
  { name: "Ruanda", code: "rw-RW" },
  { name: "San Marino", code: "it-SM" },
  { name: "Senegal", code: "fr-SN" },
  { name: "Sérvia", code: "sr-RS" },
  { name: "Singapura", code: "zh-SG" },
  { name: "Suécia", code: "sv-SE" },
  { name: "Suíça", code: "de-CH" },
  { name: "Taiwan", code: "zh-TW" },
  { name: "Tchéquia", code: "cs-CZ" },
  { name: "Ucrânia", code: "uk-UA" },
  { name: "Uruguai", code: "es-UY" },
  { name: "Vanuatu", code: "bi-VU" },
  { name: "Venezuela", code: "es-VE" },
];

const LOCALE_TO_COUNTRY_CODE: Record<string, string> = {
  "pt-BR": "pt-BR",
  "pt-PT": "pt-PT",
  "pt": "pt-BR",
  "en-US": "en-US",
  "en-GB": "en-GB",
  "en-AU": "en-AU",
  "en-CA": "en-CA",
  "en-NZ": "en-NZ",
  "en-IE": "en-IE",
  "en": "en-US",
  "es-ES": "es-ES",
  "es-MX": "es-MX",
  "es-AR": "es-AR",
  "es-CO": "es-CO",
  "es-CL": "es-CL",
  "es-419": "es-MX",
  "es": "es-ES",
  "fr-FR": "fr-FR",
  "fr-CA": "en-CA",
  "fr-BE": "nl-BE",
  "fr-CH": "de-CH",
  "fr": "fr-FR",
  "de-DE": "de-DE",
  "de-AT": "de-AT",
  "de-CH": "de-CH",
  "de-BE": "nl-BE",
  "de": "de-DE",
  "it-IT": "it-IT",
  "it-CH": "de-CH",
  "it": "it-IT",
  "nl-NL": "nl-NL",
  "nl-BE": "nl-BE",
  "nl": "nl-NL",
  "pl-PL": "pl-PL",
  "pl": "pl-PL",
  "sv-SE": "sv-SE",
  "sv": "sv-SE",
  "fi-FI": "fi-FI",
  "fi": "fi-FI",
  "nb-NO": "nb-NO",
  "no": "nb-NO",
  "da-DK": "nb-NO",
  "da": "nb-NO",
  "is-IS": "is-IS",
  "is": "is-IS",
  "cs-CZ": "cs-CZ",
  "cs": "cs-CZ",
  "sk-SK": "sk-SK",
  "sk": "sk-SK",
  "hu-HU": "hu-HU",
  "hu": "hu-HU",
  "ro-RO": "ro-RO",
  "ro": "ro-RO",
  "bg-BG": "bg-BG",
  "bg": "bg-BG",
  "hr-HR": "hr-HR",
  "hr": "hr-HR",
  "sr-RS": "sr-RS",
  "sr": "sr-RS",
  "sl-SI": "sl-SI",
  "sl": "sl-SI",
  "et-EE": "et-EE",
  "et": "et-EE",
  "lv-LV": "lv-LV",
  "lv": "lv-LV",
  "lt-LT": "lt-LT",
  "lt": "lt-LT",
  "uk-UA": "uk-UA",
  "uk": "uk-UA",
  "ru-RU": "uk-UA",
  "ru": "uk-UA",
  "el-GR": "el-GR",
  "el": "el-GR",
  "tr-TR": "tr-TR",
  "tr": "tr-TR",
  "mt-MT": "mt-MT",
  "mt": "mt-MT",
  "mk-MK": "mk-MK",
  "mk": "mk-MK",
  "sq-AL": "sq-AL",
  "sq": "sq-AL",
  "ja-JP": "zh-TW",
  "ja": "zh-TW",
  "ko-KR": "zh-TW",
  "ko": "zh-TW",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  "zh-HK": "zh-HK",
  "zh-MO": "zh-MO",
  "zh-SG": "zh-SG",
  "zh": "zh-CN",
  "hi-IN": "hi-IN",
  "hi": "hi-IN",
  "tl-PH": "fil-PH",
  "fil-PH": "fil-PH",
  "fil": "fil-PH",
  "vi-VN": "en-AU",
  "vi": "en-AU",
  "th-TH": "en-AU",
  "th": "en-AU",
  "id-ID": "en-AU",
  "id": "en-AU",
  "ms-MY": "en-AU",
  "ms": "en-AU",
  "ar-SA": "ar-EG",
  "ar": "ar-EG",
  "he-IL": "fr-FR",
  "he": "fr-FR",
  "fa-IR": "fr-FR",
  "fa": "fr-FR",
  "sw-KE": "fr-CG",
  "sw": "fr-CG",
  "am-ET": "fr-CM",
  "am": "fr-CM",
  "af-ZA": "af-ZA",
  "af": "af-ZA",
};

function detectCountryCode(): string {
  if (typeof navigator === "undefined") return "pt-BR";
  const lang = navigator.language;
  return LOCALE_TO_COUNTRY_CODE[lang] ?? LOCALE_TO_COUNTRY_CODE[lang.split("-")[0]] ?? "pt-BR";
}

const STORAGE_KEY = "olympkus-region-choice";

export function RegionPopup() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("pt-BR");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return;

    const code = detectCountryCode();
    if (code !== "pt-BR") {
      setSelected(code);
      setOpen(true);
    }
  }, []);

  function handleContinue() {
    localStorage.setItem(STORAGE_KEY, selected);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="region-popup" role="dialog" aria-modal="true" aria-label="Escolher país ou região">
      <div className="region-popup__backdrop" />
      <div className="region-popup__card">
        <div className="region-popup__globe" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="4" ry="10" />
            <path d="M2 12h20" />
            <path d="M12 2v20" />
          </svg>
        </div>
        <p className="region-popup__text">
          Escolha outro país ou região para ver conteúdo específico para sua localização.
        </p>
        <select
          className="region-popup__select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          aria-label="País ou região"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
        <div className="region-popup__actions">
          <button className="btn btn--solid region-popup__btn" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
