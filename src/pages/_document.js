import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles } from '../components/styled'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css' />
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
          <meta
            name='description'
            content='Securing the privacy layer of the internet. We are a community-led group of individuals who care about privacy, data ownership, and are dedicated to supporting secret node runners.'
          />
          <GlobalStyles />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
