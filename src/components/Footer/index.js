import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const PageFooter = props => {
	const Footer = styled('footer')({
		'.span-privacy-policy': {
			color: '#FBFBFD'
		},
		'.footer-content-wrapper': {
			width: '90%',
			height: 60,
			display: 'flex', 
			padding: 10,
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		'.span-copyright': {
			marginRight: 3,
		},
		'.secret-nodes-logo': {
			height: 50,
			marginRight: 10,
		},
		'.special-span': {
			fontSize: '.8em',
		},
		color: '#8d9399',
		width: '100%',
		background: '#152d72',
		height: 80,
		display: 'flex',
		justifyContent: 'center',
		fontSize: '.9em',
		'.telegram-icon, .twitter-icon': {
			height: 35,
		},
		ul: {
			display: 'flex',
			listStyle: 'none',
			justifyContent: 'space-around',
			alignItems: 'center',
			width: 50,
		},
		'.logo-wrapper': {
			display: 'flex',
			alignItems: 'center',
		},
		[props.mediaQueries[1]]: {
			'.secret-nodes-motto': {
				display: 'none'
			},
			fontSize: '.8em',
		},
		[props.mediaQueries[0]]: {
			height: 100,
			fontSize: '1em',
			'.footer-content-wrapper': {
				flexDirection: 'column',
				height: 'auto',
			},
		},
	})
	return (
		<Footer>
			<div className="footer-content-wrapper">
				<div className="logo-wrapper">
					<img className="secret-nodes-logo" src="/static/favicon.png" alt="" />
					<span className="span-copyright">secretnodes.org©</span>
					<span className="secret-nodes-motto">empowering people to secure the privacy layer of the web since 2018</span>
				</div>
				<span className="special-span">
					built with love by the moonstash think tank
				</span>
			</div>
		</Footer>
	)
}

export default PageFooter	
