import styled from '@emotion/styled'

// TODO: make dynamic by passing sm, md or lg property
// based on screen size or how you want it displayed
const AvatarContainer = props => {
	// if no src, return
	// nothing to see here
	if(!props.src) return
	
	const Avatar = styled('img')`
		width: 96px;
		height: 96px;
		border-radius: 50%;
	`

	// if no name and no role, just return the avatar
	if(!props.name && !props.role) return Avatar
	
	const { src, name, role } = props
	const Container = styled('div')`
		display: flex;
		width: 400px;
		padding: 20px;
	`
	const TextWrapper = styled('div')`
		margin-left: 20px;
	`

	return (
		<Container>
			<TextWrapper>
				<h2>{name}</h2>
				<span>{role}</span>
			</TextWrapper>
		</Container>
	)
}

export default AvatarContainer
