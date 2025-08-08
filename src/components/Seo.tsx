import Head from "next/head";

export default function Seo({ title, description, keywords }) {
  return (
    <Head>
      <title>{title ? `${title} | Scotchstone` : "Scotchstone"}</title>
      <meta name="description" content={description || "Scotchstone Real Estate Blog"} />
      <meta name="keywords" content={keywords || "Lagos, Real Estate, Investment, Nigeria, Short-let, property, Victoria Island"} />
      <meta name="author" content="osbrogroup@gmail.com, +2349042444662" />
      <meta property="og:title" content={title || "Scotchstone"} />
      <meta property="og:description" content={description || "Scotchstone Real Estate Blog"} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Scotchstone" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Scotchstone"} />
      <meta name="twitter:description" content={description || "Scotchstone Real Estate Blog"} />
      {/* Add favicon if you have one */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}