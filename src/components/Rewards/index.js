import styled from '@emotion/styled'
import { TextContainer } from '../styled'

const RewardsSection = props => {
  const Rewards = styled('section')({
    height: 'auto',
    maxWidth: '90vw',
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
      padding: 2.5,
      alignItems: 'center'
    }
  })

  return (
    <Rewards id='rewards'>
      <h1>Rewards</h1>
      <TextContainer mediaQueries={props.mediaQueries}>
      <font color="#20B1F9"><b>Introduction to the Genesis Games </b></font>
       In the early “bootstrapping” stages of a network, it is important to grow in a decentralized, but still manageable way. Early days of the Enigma network will require hard forks and changes, and being able to effectively coordinate and communicate will be critical. We reiterate: this is in the service of creating a robust, sustainable network that becomes and remains more decentralized, useful, and valuable over the long term. And like any mission  <a href="https://www.youtube.com/watch?v=4pptCGR9N4g"><font color="#E82E9D">to where no one has gone before</font></a> a secure and successful launch is the most critical part. <b><em>Therefore, the number of secret nodes available when Discovery is deployed on mainnet will be limited to 50</em></b> “genesis nodes”— a number that based on in depth research and modeling meaningfully decentralizes the network while maintaining its early stability. The next steps for node runners is thus as follows:
       <ul>
         <li>In order to operate a testnet node, you will need testnet ENG tokens. To ensure operators stake above the minimum threshold, we will be distributing testnet ENG tokens based on mainnet holdings of ENG.</li>
         <li>To receive this distribution of testnet tokens, you will need to hold your ENG in an address that you control.That means if you are currently holding mainnet ENG tokens on an exchange and plan to run a testnet node, you will need to withdraw these tokens in order to receive your testnet ENG. If you hold your tokens in MEW, MyCrypto, or a hardware wallet, you do not need to take any action.</li>
         <li>In an upcoming post, enigma will announce the date on which we will take a snapshot of mainnet ENG holdings. On this date, the number of testnet tokens you will receive is determined based on how much ENG is held in your mainnet address. We will announce the snapshot date at least two weeks in advance, giving you time to move tokens if needed.</li>
         <li>After the snapshot is taken, we will distribute testnet ENG. As mentioned above, after deploying Discovery on testnet you will then be able to set up and begin operating a secret node.</li>
         <li>After a short setup period following testnet deployment, the Genesis Game will begin. As described earlier, genesis nodes will then be selected based on uptime and testnet token staking.</li>
       </ul>
       <font color="#20B1F9"><b>When can I run a node if I don't get selected through the Genesis games? </b></font>
       <em><b>After a future anticipated hard fork, any node that meets the minimum staking requirement and hardware requirements will be allowed to join the network.</b></em> By limiting the network to genesis nodes until after the hard fork occurs, Enigma provides an exclusive period for genesis node operators who supported the network during its testnet phase while helping to ensure there are no disruptions from an early fork. But by then opening up the network to all participants, we preserve the permissionless nature of Enigma and expand the network rapidly once its operations have been secured.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
      <font color="#20B1F9"><b>How are genesis nodes selected? </b></font>
       For the purposes of decentralizing Enigma, genesis nodes must be selected in as fair and permissionless a manner as possible. It is also in the best interest of the network to launch with a group of nodes that have demonstrated an honest commitment to upholding the network (uptime, security, etc). Thus the substantial majority of genesis nodes are being selected solely based on their testnet activity — a period referred to as the Genesis Games.
       <ul>
       <li>The top 30 nodes by genesis score are selected as genesis nodes.</li>
       <li>More nodes (up to 10 maximum) will be eligible for whitelisting based on contributions to the Enigma ecosystem, primarily those building supply-side tooling for workers and staking operations.</li>
       <li>Dependent on the size of this whitelist, 10–20 more nodes are chosen based on a lottery system, with weighting in the lottery determined by your genesis score. This means that even if you do not finish in the top 30 by genesis score, you are still eligible for random selection as a genesis node. This will help encourage broader participation in testing the Discovery network.</li>
       </ul>
      <font color="#20B1F9"><b> How do Block Rewards work?</b></font> Block rewards for the Enigma network will begin at 750,000 ENG for the first year the mainnet is in operation and decrease 10% year-over-year thereafter. The total block rewards pool is thus 7.5M ENG and will not be exhausted for the first century the network is in operation. This pool is 1/5th of the total token pool reserved for network, community, and ecosystem incentives (37.5M ENG).
      </TextContainer>
    </Rewards>
  )
}

export default RewardsSection
