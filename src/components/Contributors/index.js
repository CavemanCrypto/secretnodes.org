import React from 'react'
import styled from '@emotion/styled'
import AvatarContainer from '../../styled/AvatarContainer'

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
			},
      '.contributors-container': {
        padding: 0
      }
    }
  })

  return (
    <ContributorsSection id='contributors'>
      <h1>Contributors</h1>
      <div className='contributors-container'>
        <AvatarContainer src='/static/ian.png' name='Ian' role='Node Magician' mediaQueries={props.mediaQueries} />
        <AvatarContainer src='/static/celeste.png' name='Celeste' role='Privacy Advocate and Expert' mediaQueries={props.mediaQueries} />
        <AvatarContainer src='/static/tor.png' name='Tor' role='Enigma Liaison' mediaQueries={props.mediaQueries} />
        <AvatarContainer src='/static/krista.png' name='Krista' role='Front End Dev' mediaQueries={props.mediaQueries} />
      </div>
    </ContributorsSection>
  )
}

export default Contributors
