import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Fonts from '../helpers/Fonts'

const breakpoints = [870, 1000]

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
				</Head>
			</Layout>
		)	
	}
}
