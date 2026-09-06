import { useEffect } from "react";
import { CtaBand } from "./CtaBand.tsx";
import { InteriorHero } from "./interior-hero.tsx";

type Country = { name: string };

type Region = { label: string; countries: Country[] };

const REGIONS: Region[] = [
  {
    label: "América Latina e Caribe",
    countries: [
      { name: "Bolívia" },
      { name: "Brasil" },
      { name: "Chile" },
      { name: "Colômbia" },
      { name: "Costa Rica" },
      { name: "Cuba" },
      { name: "El Salvador" },
      { name: "Equador" },
      { name: "Guatemala" },
      { name: "Haiti" },
      { name: "Honduras" },
      { name: "Jamaica" },
      { name: "México" },
      { name: "Nicarágua" },
      { name: "Panamá" },
      { name: "Paraguai" },
      { name: "Peru" },
      { name: "República Dominicana" },
      { name: "Uruguai" },
      { name: "Venezuela" },
    ],
  },
  {
    label: "América do Norte",
    countries: [
      { name: "Canadá" },
      { name: "Estados Unidos" },
    ],
  },
  {
    label: "Europa",
    countries: [
      { name: "Albânia" },
      { name: "Alemanha" },
      { name: "Áustria" },
      { name: "Bélgica" },
      { name: "Bielorrússia" },
      { name: "Bósnia e Herzegovina" },
      { name: "Bulgária" },
      { name: "Cidade do Vaticano" },
      { name: "Croácia" },
      { name: "Eslováquia" },
      { name: "Eslovênia" },
      { name: "Espanha" },
      { name: "Estônia" },
      { name: "Finlândia" },
      { name: "França" },
      { name: "Grécia" },
      { name: "Hungria" },
      { name: "Irlanda" },
      { name: "Islândia" },
      { name: "Itália" },
      { name: "Letônia" },
      { name: "Liechtenstein" },
      { name: "Lituânia" },
      { name: "Luxemburgo" },
      { name: "Macedônia do Norte" },
      { name: "Malta" },
      { name: "Moldávia" },
      { name: "Mônaco" },
      { name: "Noruega" },
      { name: "Países Baixos" },
      { name: "Polônia" },
      { name: "Portugal" },
      { name: "Reino Unido" },
      { name: "Romênia" },
      { name: "San Marino" },
      { name: "Sérvia" },
      { name: "Suécia" },
      { name: "Suíça" },
      { name: "Tchéquia" },
      { name: "Ucrânia" },
    ],
  },
  {
    label: "Ásia-Pacífico",
    countries: [
      { name: "Austrália" },
      { name: "China" },
      { name: "Filipinas" },
      { name: "Hong Kong" },
      { name: "Índia" },
      { name: "Macau" },
      { name: "Nova Zelândia" },
      { name: "Papua-Nova Guiné" },
      { name: "Singapura" },
      { name: "Taiwan" },
      { name: "Vanuatu" },
    ],
  },
  {
    label: "África",
    countries: [
      { name: "África do Sul" },
      { name: "Camarões" },
      { name: "Chade" },
      { name: "Costa do Marfim" },
      { name: "Egito" },
      { name: "Gabão" },
      { name: "Guiné" },
      { name: "Guiné-Bissau" },
      { name: "Mali" },
      { name: "Níger" },
      { name: "República do Congo" },
      { name: "Ruanda" },
      { name: "Senegal" },
    ],
  },
];

export function Languages() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <InteriorHero id="languages">
        <div className="page-hero__inner">
          <a href="/" className="blog-back">← Voltar</a>
          <h1 className="page-hero__title">Escolha seu país ou região.</h1>
          <p className="page-hero__lede">
            O Pluto está disponível em 86 países e regiões. O site ainda é
            só em português — mas não por muito tempo.
          </p>
        </div>
      </InteriorHero>

      <section className="country-picker">
        <div className="country-picker__inner">
          <div className="country-picker__grid">
            {REGIONS.map((region) => (
              <div key={region.label} className="country-picker__region" data-reveal>
                <h2 className="country-picker__region-label">{region.label}</h2>
                <ul className="country-picker__list">
                  {region.countries.map((country) => (
                    <li key={country.name}>
                      <a href="/">{country.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
