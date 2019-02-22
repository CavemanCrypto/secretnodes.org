import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/lib   s/normalize/8.0.0/normalize.min.css' />
        </Head>
        <body className='custom-class'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
