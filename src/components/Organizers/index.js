import React from 'react'
import AvatarContainer from '../../styled/AvatarContainer'

export default () => 
	<section id="organizers">
		<h1>Organizers</h1>
		<div className="organizer-container">
			<AvatarContainer src="/static/ian.png" name="Ian" role="Node Magician" />
			<AvatarContainer src="/static/celeste.png" name="Celeste" role="Privacy Advocate and Expert" />
			<AvatarContainer src="/static/tor.png" name="Tor" role="Enigma Liaison" />
			<AvatarContainer src="/static/krista.png" name="Krista" role="Front End Dev" />
		</div>
		<style jsx>{`
			h1 {
				margin-left: 41px;
			}
			.role-container {
				margin-left: 20px;
			}
			.avatar-container {
				display: flex;
				width: 400px;
				padding: 20px;
			}
			.organizer-container {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				padding: 0 40px;
			}
			section {
				letter-spacing: .6px;
				height: 460px;
				width: 100%;
				background: #060b47;
				color: #fbfbfd;
			}
		`}</style>
	</section>
