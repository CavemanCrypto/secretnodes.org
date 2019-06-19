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
<font color="#20B1F9"><b>Introduction to the Genesis Games </b></font>
 In the early “bootstrapping” stages of a network, it is important to grow in a decentralized, but still manageable way. Early days of the Enigma network will require hard forks and changes, and being able to effectively coordinate and communicate will be critical. We reiterate: this is in the service of creating a robust, sustainable network that becomes and remains more decentralized, useful, and valuable over the long term. And like any mission to where no one has gone before a secure and successful launch is the most critical part. Therefore, the number of secret nodes available when Discovery is deployed on mainnet will be limited to 50 “genesis nodes”— a number that based on in depth research and modeling meaningfully decentralizes the network while maintaining its early stability. The next steps for node runners is thus as follows:
 <ul>
 <li>The top 30 nodes by genesis score are selected as genesis nodes.</li>
 <li>More nodes (up to 10 maximum) will be eligible for whitelisting based on contributions to the Enigma ecosystem, primarily those building supply-side tooling for workers and staking operations.</li>
 <li>Dependent on the size of this whitelist, 10–20 more nodes are chosen based on a lottery system, with weighting in the lottery determined by your genesis score. This means that even if you do not finish in the top 30 by genesis score, you are still eligible for random selection as a genesis node. This will help encourage broader participation in testing the Discovery network.</li>
 </ul>
As mentioned, there will be 50 genesis secret nodes in total when mainnet launches. These nodes will be the only nodes eligible to operate when Discovery launches, and they alone will receive block rewards and network fees until more nodes are added to the network.
    </TextContainer>
    </Rewards>
  )
}

export default RewardsSection
