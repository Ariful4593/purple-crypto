import Head from "next/head";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* PRELOADING FONTS */}
        <title>{process.env.NEXT_PUBLIC_SERVER_NAME} - Exchange crypto</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/Acumin-RPro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Acumin-BdPro.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* SEO */}
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Purple Prison crypto exchange. A fast and secure way to buy Purple Prison store credit with your favourite CryptoCurrencies!"
        />
        <meta
          name="og:title"
          content={`${process.env.NEXT_PUBLIC_SERVER_NAME} Official Crypto Exchange`}
        />
        <meta
          name="og:description"
          content="Purple Prison crypto exchange. A fast and secure way to buy Purple Prison store credit with your favourite CryptoCurrencies!"
        />
        <meta name="og:site_name" content={`${process.env.NEXT_PUBLIC_SERVER_NAME}`} />
        <meta name="og:type" content="website" />
        <meta name="og:locale" content="en_EN" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <meta
          name="og:image"
          content="https://i.imgur.com/GxBQ4az.png"
        />
        <meta name="og:image:alt" content={`${process.env.NEXT_PUBLIC_SERVER_NAME} - Exchange your crypto`} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* DESIGN */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00214d" />
        <meta name="msapplication-TileColor" content="#41a4ff" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="apple-mobile-web-app-title"
          content={`${process.env.NEXT_PUBLIC_SERVER_NAME} - Exchange your crypto`}
        />
        <meta name="application-name" content={`${process.env.NEXT_PUBLIC_SERVER_NAME}`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="theme-color" content="#ac42ff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
