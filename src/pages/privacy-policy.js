import styled from '@emotion/styled'
import Head from 'next/head'
import Layout from '../components/Layout'

const breakpoints = [500, 770, 1000]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const PrivacyPolicy = props => {
  const PolicyWrapper = styled('div')({
    color: '#e7ecff',
    fontFamily: 'inherit',
    width: '72.2vw',
    marginBottom: 70,
    span: {
      fontSize: '1.2em'
    },
    h3: {
      fontSize: '1.2em',
      margin: 0
    },
    ol: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: '.5px'
    },
    p: {
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: '.5px',
      margin: 0
    },
    h1: {
      fontSize: 64,
      fontWeight: 400,
      letterSpacing: '1.13px',
      color: '#FFF'
    },
    [mq[0]]: {
      h1: {
        fontSize: 30
      },
      margin: '1em 0',
      width: '80vw',
      p: {
        fontSize: 14
      },
      ol: {
        fontSize: 14
      }
    }
  })

  return (
    <Layout mediaQueries={mq}>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <PolicyWrapper>
        <h1>Privacy Policy</h1>
        <p>This privacy notice discloses the privacy practices of secretnodes.org and applies solely to information collected by secretnodes.org. Below you will find:</p>
        <ol type='1'>
          <li>What personally identifiable information is collected from you through the website, how it is used, and with whom it may be shared.</li>
          <li>What choices are available to you regarding the use of your data.</li>
          <li>The security procedures in place to protect the misuse of your information.</li>
          <li>How you can correct any inaccuracies in the information.</li>
        </ol>
        <h3>Information Collection, Use, and Sharing</h3><br />
        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill any request.</p>
        <p>If you provide your email via secretnodes.org, we may contact you via email in the future unless you specifically indicate you do not wish us to.</p><br />
        <h3>Your Access to and Control Over Information</h3><br />
        <p>You may opt out of any future contact from us at any time. You can do the following at any time by contacting us via the email address given on our website:</p>
        <ol type='1'>
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ol>
        <h3>Security</h3><br />
        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
        <p>Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the Web page.</p>
        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p><br />
        <p><span>If you feel that we are not abiding by this privacy policy, contact us at hello@secretnodes.org.</span></p>
      </PolicyWrapper>
    </Layout>
  )
}

export default PrivacyPolicy
