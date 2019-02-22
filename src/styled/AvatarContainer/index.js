import styled from '@emotion/styled'

// TODO: make dynamic by passing sm, md or lg property
// based on screen size or how you want it displayed
const AvatarContainer = props => {
  // if no src, return
  if (!props.src) return
  const Avatar = styled('img')({
    width: 96,
    height: 96,
    borderRadius: '50%',
    [props.mediaQueries[0]]: {
      width: 76,
      height: 76
    }
  })

  // if no name and no role, just return the avatar
  if (!props.name && !props.role) return Avatar

  const { src, name, role } = props
  const Container = styled('div')({
    display: 'flex',
    width: 400,
    padding: 20
  })

  const TextWrapper = styled('div')({
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    h2: {
      margin: 0
    },
    [props.mediaQueries[0]]: {
      h2: {
        fontSize: '1.5em'
      }
    }
  })

  return (
    <Container>
      <Avatar src={src} />
      <TextWrapper>
        <h2>{name}</h2>
        <span>{role}</span>
      </TextWrapper>
    </Container>
  )
}

export default AvatarContainer
