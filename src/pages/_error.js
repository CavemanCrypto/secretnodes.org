import React from 'react'
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
      img: {
        width: 'calc(100% - 40px)'
      },
      [mq[1]]: {
        width: '80%'
      },
      [mq[0]]: {
        width: '80%',
        img: {
          width: '100%',
          marginTop: 60
        }
      },
      span: {
        fontSize: 70
      }
    })

    return (
      <Layout mediaQueries={mq}>
        {
          this.props.statusCode === 404
            ? <ErrorContainer>
              <img src='https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif' />
              <span>
                {this.props.statusCode}
              </span>
              <p>The page you are looking for could not be found.</p>
            </ErrorContainer>
            : <ErrorContainer>
              <img src='https://gph.is/XIci15' />
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
