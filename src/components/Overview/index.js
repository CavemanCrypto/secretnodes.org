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
Role and Utility of ENG
The ENG token is critical to the function of the Enigma network, playing two primary roles: as payment for computation and as a requirement for staking.  The primary function of ENG in the Enigma protocol is to pay for computations, very similar to the function of Gas (ether) in the Ethereum network. When an application runs a secret contract on the Enigma network, end users who interact with the application (or the entity that deployed the application) has to spend ENG to get the computation done in a privacy-preserving way. The secondary role of ENG is the Enigma networks utilization of a multi-tiered ENG staking system (secret nodes and eventually consensus nodes). In this system, the more tokens a secret node stakes, the more likely she is to be selected to work on the next secret contract. Nodes acquire and stake ENG to increase their chance of running secret contracts and thus earning a return on their stake.
      </TextContainer>
    </Overview>
  )
}

export default OverviewSection
