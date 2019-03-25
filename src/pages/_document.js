import Document, { Head, Main, NextScript } from 'next/document'
import { GlobalStyles } from '../components/styled'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
