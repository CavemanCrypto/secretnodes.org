import React from 'react'
import Head from 'next/head'

import {
  Calculator,
  Contributors,
  Layout,
  Intro,
  Overview,
  Rewards
} from '../components'

const breakpoints = [500, 915, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default class Index extends React.Component {
  render () {
    return (
      <Layout {...this.props} mediaQueries={mq}>
        <Head>
          <title>secretnodes.org</title>
          <link href="/statics/react-bootstrap-table.css" rel="stylesheet" />
        </Head>
        <Intro mediaQueries={mq} />
        <Overview mediaQueries={mq} />
        <Rewards mediaQueries={mq} />
        <Calculator mediaQueries={mq}/>
        <Contributors mediaQueries={mq} />
      </Layout>
    )
  }
}
