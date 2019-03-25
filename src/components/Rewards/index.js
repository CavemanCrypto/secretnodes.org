import styled from '@emotion/styled'
import { TextContainer } from '../styled'

const RewardsSection = props => {
  const Rewards = styled('section')({
    height: 'auto',
    maxWidth: '100vw',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '21px 41px',
    h1: {
      textAlign: 'center',
      margin: 0,
      flexBasis: '100%',
      fontWeight: 400,
      letterSpacng: '.6px'
    },
    [props.mediaQueries[1]]: {
      flexDirection: 'column',
      padding: 5,
      alignItems: 'center'
    }
  })

  return (
    <Rewards id='rewards'>
      <h1>Rewards</h1>
      <TextContainer mediaQueries={props.mediaQueries}>
				Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Fusce id velit ut tortor pretium viverra suspendisse potenti. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Ac feugiat sed lectus vestibulum mattis. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Nibh praesent tristique magna sit amet purus gravida quis. Ullamcorper sit amet risus nullam eget felis eget nunc. Faucibus a pellentesque sit amet porttitor eget dolor morbi. Ut tristique et egestas quis. In tellus integer feugiat scelerisque varius. Ac placerat vestibulum lectus mauris ultrices. Enim lobortis scelerisque fermentum dui faucibus. Fermentum leo vel orci porta non pulvinar neque laoreet. Sed velit dignissim sodales ut. Diam quam nulla porttitor massa id neque aliquam vestibulum. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. In nibh mauris cursus mattis molestie a iaculis at. Donec et odio pellentesque diam volutpat.
      </TextContainer>
    </Rewards>
  )
}

export default RewardsSection
