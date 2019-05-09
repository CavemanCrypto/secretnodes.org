import { ButtonPrimary } from '../styled'
import styled from '@emotion/styled'

const Intro = props => {
  const IntroSection = styled('section')({
    a: {
      textDecoration: 'none',
      color: 'inherit'
    },
    '.telegram-icon': {
      height: '15px',
      marginRight: '2px'
    },
    '.hero-image': {
      width: '50%'
    },
    '.button-container': {
      display: 'flex',
      flexDirection: 'row'
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '10px',
      alignItems: 'flex-start'
    },
    h1: {
      margin: '0 0 5px 0',
      fontSize: '54px',
      fontWeight: 400
    },
    p: {
      margin: 0,
      fontSize: '22px',
      fontWeight: 200
    },
    display: 'flex',
    width: '70%',
    alignItems: 'center',
    padding: 60,
    justifyContent: 'space-between',
    color: '#FFF',
    [props.mediaQueries[1]]: {
      flexDirection: 'column',
      padding: 40,
      height: 410,
      '.hero-image': {
        position: 'absolute',
        top: 375,
        left: 385,
        width: '35%'
      },
      h1: {
        width: 635
      },
      p: {
        width: 490,
        marginTop: 10
      }
    },
    [props.mediaQueries[0]]: {
      height: '55vh',
      padding: 20,
      textAlign: 'center',
      '.button-container': {
        flexDirection: 'column',
        marginTop: 30
      },
      '.hero-image': {
        display: 'none'
      },
      div: {
        alignItems: 'center',
        marginTop: 0
      },
      p: {
        width: 270
      },
      h1: {
        width: 275,
        fontSize: 35
      },
      '.telegram-icon': {
        height: 20
      }
    }
  })

  return (
    <IntroSection>
      <div>
        <h1>Securing the<br /> privacy layer of the internet.</h1>
        <p>We're a community-led group of individuals who care about privacy, data ownership, and are dedicated to supporting secret node runners.</p>
        <div className='button-container'>
          <a href='https://t.me/secretnodes'>
            <ButtonPrimary mediaQueries={props.mediaQueries}>
              <img className='telegram-icon' src='./static/telegram_icon.png' />
              Join Our Telegram
            </ButtonPrimary>
          </a>
          <a href='https://forum.enigma.co/c/enigma-nodes'>
            <ButtonPrimary mediaQueries={props.mediaQueries}>Enigma Node Forums</ButtonPrimary>
          </a>
        </div>
      </div>
      <img src='./static/node_hero.png' className='hero-image' alt='' />
    </IntroSection>
  )
}

export default Intro
