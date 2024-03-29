import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Varela+Round&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/logo.png" sizes="any" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
