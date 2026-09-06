import { useEffect, useState } from "react";
import { Logo } from "./Logo.tsx";

const LOCALE_TO_COUNTRY: Record<string, string> = {
  "pt-BR": "Brasil",
  "pt-PT": "Portugal",
  "pt": "Brasil",
  "en-US": "Estados Unidos",
  "en-GB": "Reino Unido",
  "en-AU": "Austrália",
  "en-CA": "Canadá",
  "en-NZ": "Nova Zelândia",
  "en-IE": "Irlanda",
  "en": "Estados Unidos",
  "es-ES": "Espanha",
  "es-MX": "México",
  "es-AR": "Argentina",
  "es-CO": "Colômbia",
  "es-CL": "Chile",
  "es-419": "América Latina",
  "es": "Espanha",
  "fr-FR": "França",
  "fr-CA": "Canadá",
  "fr-BE": "Bélgica",
  "fr-CH": "Suíça",
  "fr": "França",
  "de-DE": "Alemanha",
  "de-AT": "Áustria",
  "de-CH": "Suíça",
  "de-BE": "Bélgica",
  "de": "Alemanha",
  "it-IT": "Itália",
  "it-CH": "Suíça",
  "it": "Itália",
  "nl-NL": "Países Baixos",
  "nl-BE": "Bélgica",
  "nl": "Países Baixos",
  "pl-PL": "Polônia",
  "pl": "Polônia",
  "sv-SE": "Suécia",
  "sv": "Suécia",
  "fi-FI": "Finlândia",
  "fi": "Finlândia",
  "nb-NO": "Noruega",
  "no": "Noruega",
  "da-DK": "Dinamarca",
  "da": "Dinamarca",
  "is-IS": "Islândia",
  "is": "Islândia",
  "cs-CZ": "Tchéquia",
  "cs": "Tchéquia",
  "sk-SK": "Eslováquia",
  "sk": "Eslováquia",
  "hu-HU": "Hungria",
  "hu": "Hungria",
  "ro-RO": "Romênia",
  "ro": "Romênia",
  "bg-BG": "Bulgária",
  "bg": "Bulgária",
  "hr-HR": "Croácia",
  "hr": "Croácia",
  "sr-RS": "Sérvia",
  "sr": "Sérvia",
  "sl-SI": "Eslovênia",
  "sl": "Eslovênia",
  "et-EE": "Estônia",
  "et": "Estônia",
  "lv-LV": "Letônia",
  "lv": "Letônia",
  "lt-LT": "Lituânia",
  "lt": "Lituânia",
  "uk-UA": "Ucrânia",
  "uk": "Ucrânia",
  "ru-RU": "Rússia",
  "ru": "Rússia",
  "el-GR": "Grécia",
  "el": "Grécia",
  "tr-TR": "Turquia",
  "tr": "Turquia",
  "mt-MT": "Malta",
  "mt": "Malta",
  "mk-MK": "Macedônia do Norte",
  "mk": "Macedônia do Norte",
  "sq-AL": "Albânia",
  "sq": "Albânia",
  "ca-ES": "Espanha",
  "ca": "Espanha",
  "eu-ES": "Espanha",
  "eu": "Espanha",
  "gl-ES": "Espanha",
  "gl": "Espanha",
  "cy-GB": "Reino Unido",
  "cy": "Reino Unido",
  "ga-IE": "Irlanda",
  "ga": "Irlanda",
  "ja-JP": "Japão",
  "ja": "Japão",
  "ko-KR": "Coreia do Sul",
  "ko": "Coreia do Sul",
  "zh-CN": "China",
  "zh-TW": "Taiwan",
  "zh-HK": "Hong Kong",
  "zh-MO": "Macau",
  "zh-SG": "Singapura",
  "zh": "China",
  "hi-IN": "Índia",
  "hi": "Índia",
  "tl-PH": "Filipinas",
  "fil-PH": "Filipinas",
  "fil": "Filipinas",
  "vi-VN": "Vietnã",
  "vi": "Vietnã",
  "th-TH": "Tailândia",
  "th": "Tailândia",
  "id-ID": "Indonésia",
  "id": "Indonésia",
  "ms-MY": "Malásia",
  "ms": "Malásia",
  "ar-SA": "Arábia Saudita",
  "ar": "Arábia Saudita",
  "he-IL": "Israel",
  "he": "Israel",
  "fa-IR": "Irã",
  "fa": "Irã",
  "sw-KE": "Quênia",
  "sw": "Quênia",
  "am-ET": "Etiópia",
  "am": "Etiópia",
  "af-ZA": "África do Sul",
  "af": "África do Sul",
};

const COUNTRY_CODE_TO_NAME: Record<string, string> = {
  "sq-AL": "Albânia",
  "de-DE": "Alemanha",
  "af-ZA": "África do Sul",
  "en-AU": "Austrália",
  "de-AT": "Áustria",
  "nl-BE": "Bélgica",
  "be-BY": "Bielorrússia",
  "es-BO": "Bolívia",
  "bs-BA": "Bósnia e Herzegovina",
  "pt-BR": "Brasil",
  "bg-BG": "Bulgária",
  "fr-CM": "Camarões",
  "en-CA": "Canadá",
  "fr-TD": "Chade",
  "es-CL": "Chile",
  "zh-CN": "China",
  "it-VA": "Cidade do Vaticano",
  "es-CO": "Colômbia",
  "fr-CI": "Costa do Marfim",
  "es-CR": "Costa Rica",
  "hr-HR": "Croácia",
  "es-CU": "Cuba",
  "ar-EG": "Egito",
  "es-SV": "El Salvador",
  "es-EC": "Equador",
  "sk-SK": "Eslováquia",
  "sl-SI": "Eslovênia",
  "es-ES": "Espanha",
  "en-US": "Estados Unidos",
  "et-EE": "Estônia",
  "fil-PH": "Filipinas",
  "fi-FI": "Finlândia",
  "fr-FR": "França",
  "fr-GA": "Gabão",
  "el-GR": "Grécia",
  "es-GT": "Guatemala",
  "fr-GN": "Guiné",
  "pt-GW": "Guiné-Bissau",
  "fr-HT": "Haiti",
  "es-HN": "Honduras",
  "zh-HK": "Hong Kong",
  "hu-HU": "Hungria",
  "hi-IN": "Índia",
  "en-IE": "Irlanda",
  "is-IS": "Islândia",
  "it-IT": "Itália",
  "en-JM": "Jamaica",
  "lv-LV": "Letônia",
  "de-LI": "Liechtenstein",
  "lt-LT": "Lituânia",
  "fr-LU": "Luxemburgo",
  "zh-MO": "Macau",
  "mk-MK": "Macedônia do Norte",
  "fr-ML": "Mali",
  "mt-MT": "Malta",
  "ro-MD": "Moldávia",
  "es-MX": "México",
  "fr-MC": "Mônaco",
  "es-NI": "Nicarágua",
  "nb-NO": "Noruega",
  "en-NZ": "Nova Zelândia",
  "fr-NE": "Níger",
  "es-PA": "Panamá",
  "en-PG": "Papua-Nova Guiné",
  "nl-NL": "Países Baixos",
  "es-PY": "Paraguai",
  "es-PE": "Peru",
  "pl-PL": "Polônia",
  "pt-PT": "Portugal",
  "en-GB": "Reino Unido",
  "es-DO": "República Dominicana",
  "fr-CG": "República do Congo",
  "ro-RO": "Romênia",
  "rw-RW": "Ruanda",
  "it-SM": "San Marino",
  "fr-SN": "Senegal",
  "sr-RS": "Sérvia",
  "zh-SG": "Singapura",
  "sv-SE": "Suécia",
  "de-CH": "Suíça",
  "zh-TW": "Taiwan",
  "cs-CZ": "Tchéquia",
  "uk-UA": "Ucrânia",
  "es-UY": "Uruguai",
  "bi-VU": "Vanuatu",
  "es-VE": "Venezuela",
};

function detectCountry(): string {
  if (typeof navigator === "undefined") return "Brasil";
  const stored = localStorage.getItem("olympkus-region-choice");
  if (stored) {
    const match = COUNTRY_CODE_TO_NAME[stored];
    if (match) return match;
  }
  const lang = navigator.language;
  return LOCALE_TO_COUNTRY[lang] ?? LOCALE_TO_COUNTRY[lang.split("-")[0]] ?? "Brasil";
}

export function Footer() {
  const [country, setCountry] = useState("Brasil");

  useEffect(() => {
    setCountry(detectCountry());
  }, []);
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Logo />
          <p className="site-footer__tag">Um panteão agêntico para a vida pessoal.</p>
        </div>

        <nav className="site-footer__col" aria-label="Pluto">
          <p className="site-footer__h mono">PLUTO</p>
          <a href="/pluto">Sobre o Pluto</a>
          <a href="/features">Funcionalidades</a>
          <a href="/pricing">Planos</a>
          <a href="/comparison">Comparativo</a>
          <a href="/security">Segurança</a>
        </nav>

        <nav className="site-footer__col" aria-label="Empresa">
          <p className="site-footer__h mono">OLYMPKUS</p>
          <a href="/pantheon">Panteão</a>
          <a href="/about">Manifesto</a>
          <a href="/blog">Blog</a>
          <a href="/press">Imprensa</a>
        </nav>

        <nav className="site-footer__col" aria-label="Comunidade">
          <p className="site-footer__h mono">COMUNIDADE</p>
          <a href="/help">Ajuda</a>
          <a href="/contact">Contato</a>
          <p className="site-footer__h mono" style={{ marginTop: "1.4rem" }}>LEGAL</p>
          <a href="/privacy">Privacidade</a>
          <a href="/terms">Termos</a>
          <a href="/cookies">Cookies</a>
        </nav>

        <nav className="site-footer__col" aria-label="Social">
          <p className="site-footer__h mono">SOCIAL</p>
          <a href="https://discord.gg/Y5GxgEY8Zt" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://linkedin.com/company/olympkusai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/olympkus" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@olympkus" target="_blank" rel="noopener noreferrer">TikTok</a>
        </nav>
      </div>

      <div className="site-footer__base mono">
        <span>© {new Date().getFullYear()} OLYMPKUS AI · CNPJ 52.911.352/0001-00</span>
        <span><a href="/languages" aria-label="Escolher país ou região">{country}</a> <a href="/languages" aria-label="Escolher país ou região" className="site-footer__globe-link"><svg className="site-footer__globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden="true"><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path d="M2 12h20" /><path d="M12 2v20" /></svg></a></span>
      </div>
    </footer>
  );
}
