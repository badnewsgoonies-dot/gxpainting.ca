import { useMemo } from "react";

type Props = {
  name: string;
  url: string;
  email?: string;
  telephone?: string;
  locality?: string;
  region?: string;
  country?: string;
  areaServed?: string;
};

export default function LocalBusinessSchema(props: Props) {
  const json = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: props.name,
    url: props.url,
    email: props.email,
    telephone: props.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: props.locality,
      addressRegion: props.region,
      addressCountry: props.country,
    },
    areaServed: props.areaServed,
  }), [props]);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
