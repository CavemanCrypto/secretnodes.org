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
<a href="https://enigma.co" target="_blank"><font color="#20B1F9">Enigma</font></a> is building a privacy layer for the decentralized web. First researched at MIT, Enigma’s network of “secret nodes” can perform computations over encrypted data at scale without ever exposing the raw data itself. By finally enabling decentralized applications to use private and sensitive data, smart contracts built with Enigma become “<a href="https://blog.enigma.co/defining-secret-contracts-f40ddee67ef2" target="_blank"><font color="#E82E9D">secret contracts</font></a>”, allowing developers to create thousands of new, valuable solutions. Enigma’s protocol is the first to enable blockchains to work with private or sensitive data in such a way, significantly expanding the meaningful scope of blockchain-based applications (and beyond). Secre Nodes utilize encrypted inputs while never revealing the raw data to the nodes performing computations. Enigma’s nodes are thus capable of computing over encrypted data, keeping secrets even from themselves — hence the term “secret nodes”.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
<font color="#20B1F9"><b>Role and Utility of ENG </b></font>
The ENG token is critical to the function of the Enigma network, playing two primary roles: as payment for computation and as a requirement for staking.  The primary function of ENG in the Enigma protocol is to pay for computations, very similar to the function of Gas (ether) in the Ethereum network. When an application runs a secret contract on the Enigma network, end users who interact with the application (or the entity that deployed the application) has to spend ENG to get the computation done in a privacy-preserving way. <font color="#20B1F9"><b>The secondary role of ENG</b></font> is the Enigma networks utilization of a multi-tiered ENG staking system (secret nodes and eventually consensus nodes). In this system, the more tokens a secret node stakes, the more likely she is to be selected to work on the next secret contract. Nodes acquire and stake ENG to increase their chance of running secret contracts and thus earning a return on their stake.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
<font color="#20B1F9"><b>What is the minimum ENG stake required for Enigma?</b></font>
<a href="https://blog.enigma.co/secret-nodes-part-2-exploring-eng-economics-and-building-a-sustainable-network-3d0e9f8a9d40" target="_blank"><font color="#E82E9D"> As discussed by enigma here</font></a>, and now finalized, the minimum ENG stake required for a mainnet secret node is 25,000 ENG. This number was selected based on a study of many other networks, internal modeling based on the current distribution of ENG, and balancing a desire for decentralization with network sustainability and having meaningful stakes for node operators. This minimum threshold will however be reduced over the life of the network.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
      <font color="#20B1F9"><b>What are the System Requirements to run a node? </b></font>
       Specialized hardware requirements for Discovery are not substantial. However, running a secret node will require access to an SGX enabled hardware device or an SGX-enabled cloud operator. Any 6th Generation Intel Processor (Skylake) after Q3 of 2015 should have this capability. However, this may or may not be enabled by the BIOS — for example, SGX in Mac computers is not enabled. Currently IBM and Alibaba Cloud do enable SGX instances. For a detailed list of SGX enabled hardware and cloud options, please visit <a href="https://github.com/ayeks/SGX-hardware" target="_blank"><font color="#E82E9D">this link</font></a>. Additionally, <b>we require the use of Linux as an operating system as Windows is not expected to be supported in Discovery.</b>
      </TextContainer>
    </Overview>
  )
}

export default OverviewSection
