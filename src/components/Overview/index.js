import styled from '@emotion/styled'
import { TextContainer } from '../styled'

const OverviewSection = props => {
  const Overview = styled('section')({
    height: 'auto',
    maxWidth: '100vw',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '21px 41px',
    background: '#060B47',
    h1: {
      textAlign: 'center',
      margin: 0,
      flexBasis: '100%',
      fontWeight: 400,
      letterSpacing: '.6px'
    },
    [props.mediaQueries[1]]: {
      flexDirection: 'column',
      padding: 5,
      alignItems: 'center'
    }
  })

  return (
    <Overview id='secret-nodes'>
      <h1>Overview</h1>
      <TextContainer mediaQueries={props.mediaQueries}>
Enigma is building a privacy layer for the decentralized web. First researched at MIT, Enigma’s network of “secret nodes” can perform computations over encrypted data at scale without ever exposing the raw data itself. By finally enabling decentralized applications to use private and sensitive data, smart contracts built with Enigma become “secret contracts”, allowing developers to create thousands of new, valuable solutions.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
        Leo a diam sollicitudin tempor id eu. Pellentesque dignissim enim sit amet ve     nenatis urna cursus eget. Nisi est sit amet facilisis magna etiam. Congue eu consequa     t ac felis donec. Nibh nisl condimentum id venenatis a condimentum vitae sapien pelle     ntesque. Quisque non tellus orci ac auctor augue mauris. Faucibus pulvinar elementum      integer enim neque volutpat ac tincidunt. Vel facilisis volutpat est velit egestas du     i id ornare. Ac auctor augue mauris augue neque gravida. Sit amet nulla facilisi morb     i tempus.
      </TextContainer>
    </Overview>
  )
}

export default OverviewSection
