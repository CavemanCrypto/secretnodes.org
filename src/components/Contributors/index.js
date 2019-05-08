import styled from '@emotion/styled'
import { AvatarContainer } from '../styled'

const Contributors = props => {
  const ContributorsSection = styled('section')({
    h1: {
      marginLeft: 41,
      textAlign: 'center'
    },
    '.role-container': {
      marginLeft: 20
    },
    '.contributors-container': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '0 40px',
      justifyContent: 'center'
    },
    letterSpacing: '.6px',
    height: 'auto',
    width: '100%',
    background: '#060b47',
    color: '#fbfbfd',
    minHeight: 300,
    [props.mediaQueries[1]]: {
      h1: {
        margin: '15px 0 0 0'
      },
      '.contributors-container': {
        padding: '0 20px'
      }
    }
  })

  return (
    <ContributorsSection id='contributors'>
      <h1>Contributors</h1>
      <div className='contributors-container'>
        <AvatarContainer alt='' src='/static/ian.png' name='Ian' role='Founder | Node Magician' mediaQueries={props.mediaQueries} />
        <AvatarContainer alt='' src='/static/brendan.jpg' name='Brendan' role='Co-Founder | COO' mediaQueries={props.mediaQueries} />
        <AvatarContainer alt='' src='/static/krista.png' name='Krista' role='Front End Dev' mediaQueries={props.mediaQueries} />
        <AvatarContainer alt='' src='/static/irongiant.png' name='Iron Giant' role='Dev' mediaQueries={props.mediaQueries} />
      </div>
    </ContributorsSection>
  )
}

export default Contributors
