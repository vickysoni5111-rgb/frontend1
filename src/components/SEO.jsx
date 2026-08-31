import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Pawan Putra Enterprises` : "Pawan Putra Enterprises | Best Construction Company"}</title>
      <meta name="description" content={description || "Pawan Putra Enterprises provides top-notch construction and development solutions."} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}