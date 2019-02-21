import React from 'react'
import Head from 'next/head'

import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Organizers from '../components/Organizers'
import Overview from '../components/Overview'
import ProfitabilityCalc from '../components/ProfitabilityCalc'
import Fonts from '../helpers/Fonts'

const breakpoints = [500, 750, 1000]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

export default class Index extends React.Component {
	async componentDidMount() {
		await Fonts()
	}

	render() {
		return (
			<Layout mediaQueries={mq}>
				<Head>
					<title>secretnodes.org</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Intro mediaQueries={mq} />
				<Overview />
				<ProfitabilityCalc />
				<Organizers />
				<Footer mediaQueries={mq} />
			</Layout>
		)	
	}
}
