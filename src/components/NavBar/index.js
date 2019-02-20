import Link from 'next/link'
import styled from '@emotion/styled'

const NavBar = props => {
	console.log(props)
	const Nav = styled('nav')({
			'.twitter-icon': {
				height: 25,
				color: '#20B2F3',
				alignSelf: 'center',
			},
			span: {
				marginLeft: 10,
			},
			li: {
				cursor: 'pointer',
			},
			ul: {
				display: 'flex',
				listStyle: 'none',
				justifyContent: 'space-around',
				alignItems: 'center',
				width: 600,
			},
			'.logo-wrapper': {
				display: 'flex',
				alignItems: 'center',
			},
			background: '#152D72',
			height: 60,
			padding: 10,
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			color: '#FDFDFB',
			letterSpacing: '.6px',
			fontSize: '1.1rem',
			'.menu-icon': {
				display: 'none',
			},
			[props.mediaQueries[1]]: {
				ul: {
					display: 'none'
				},
				'.menu-icon': {
					display: 'block',
					height: 26,
					marginRight: 10,
					cursor: 'pointer',
					background: 'none',
					color: 'none'
				}
			},
		})

	return (
		<Nav>
		<div className="logo-wrapper">
			<img src="/static/favicon.png" alt="" />
			<span>secretnodes.org</span>
		</div>
		<img src="/static/menu-icon.svg" className="menu-icon" />
		<ul>
			<Link href="#secret-nodes"><li>Secret Nodes</li></Link>
			<Link href="#profitability-calc"><li>Profitability Calculator</li></Link>
			<Link href="#organizers"><li>Organizers</li></Link>
			<Link >
				<li>
					<a href="https://twitter.com/secretnodes" rel="noopener noreferrer">
						<img className="twitter-icon" src="/static/twitter.png" alt="" />
					</a>
				</li>
			</Link>
		</ul>
	</Nav>
	)
}

export default NavBar
