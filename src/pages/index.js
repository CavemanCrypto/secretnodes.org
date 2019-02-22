import React from 'react'
import Head from 'next/head'

import Contributors from '../components/Contributors'
import Fonts from '../helpers/Fonts'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import Rewards from '../components/Rewards'

const breakpoints = [500, 770, 1000]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default class Index extends React.Component {
  async componentDidMount () {
    await Fonts()
  }

  render () {
    return (
      <Layout mediaQueries={mq}>
        <Head>
          <title>secretnodes.org</title>
        </Head>
        <Intro mediaQueries={mq} />
        <Overview />
        <Rewards />
        <Contributors mediaQueries={mq} />
      </Layout>
    )
  }
}
