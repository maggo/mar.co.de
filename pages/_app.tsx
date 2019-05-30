import App, { Container } from "next/app";
import "../global.css";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Hi! I'm Marco</title>
          <meta name="description" content="This is my personal website" />
          <meta property="og:title" content="Hi! I'm Marco" />
          <meta
            property="og:description"
            content="This is my personal website"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Raleway:400,300&display=swap"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#3080e8"
          />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#3080e8" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#3080e8" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
