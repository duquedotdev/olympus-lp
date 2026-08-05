import { Helmet } from "react-helmet-async";
import { SITE } from "../data/content";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>[];
};

export function Seo({
  title,
  description = SITE.description,
  path = "",
  type = "website",
  jsonLd = [],
}: Props) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — AI at work. Life at ease.`;
  const url = `${SITE.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={SITE.twitter} />

      {jsonLd.map((schema, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
