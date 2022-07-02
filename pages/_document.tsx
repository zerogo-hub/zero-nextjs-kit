import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html" charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="format-detection" content="email=no" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/icon/favicon.ico" />
          <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/images/icon/icon-57.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/images/icon/icon-72.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/images/icon/icon-114.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/images/icon/icon-144.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
