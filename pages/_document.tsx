import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App: any) => (props:any) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {
       ...page, 
       styles: [styleTags as any]
      };
  }

  render() {
    return (
      <html lang="en-CA">
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
