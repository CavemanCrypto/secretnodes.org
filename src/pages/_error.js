import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import Layout from '../components/Layout'

class ErrorPage extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const breakpoints = [500, 770, 1000]

    const mq = breakpoints.map(
      bp => `@media (max-width: ${bp}px)`
    )

    const ErrorContainer = styled('div')({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontWeight: 400,
      letterSpacing: '.39px',
      fontSize: 20,
      padding: 10,
      height: '80vh',
      span: {
        fontSize: 70
      },
      img: {
        width: 'calc(100% - 40px)'
      },
      [mq[1]]: {
        width: '80%',
        span: {
          fontSize: 50,
          marginTop: 30
        }
      },
      [mq[0]]: {
        width: '80%',
        img: {
          width: '100%',
          marginTop: 60
        }
      }
    })

    return (
      <Layout mediaQueries={mq}>
        <Head>
          <title>Page not found</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
        {
          this.props.statusCode === 404
            ? <ErrorContainer>
              <img src='/static/404.gif' />
              <span>
                {this.props.statusCode}
              </span>
              <p>The page you are looking for could not be found.</p>
            </ErrorContainer>
            : <ErrorContainer>
              <img src='/static/404.gif' />
              <span>
                {this.props.statusCode}
              </span>
              <p>An error has occurred.</p>
            </ErrorContainer>
        }
      </Layout>
    )
  }
}

export default ErrorPage
