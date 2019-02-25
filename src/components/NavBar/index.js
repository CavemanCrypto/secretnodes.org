import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

export default class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      showMenu: false
    }
  }

  componentDidUpdate () {
    const { showMenu } = this.state
    setTimeout(() => {
      if (showMenu) {
        window.addEventListener('click', this.close)
      } else {
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.close)
  }

	close = (timeOut) => {
	  this.setState({
	    showMenu: false
	  })
	}

	dropdownHandler = (e) => {
	  e.preventDefault()

	  const { showMenu } = this.state
	  this.setState({ showMenu: !showMenu })
	}

	render () {
	  const Nav = styled('nav')({
	    '#dropdown-menu > div:hover': {
	      border: '1px solid'
	    },
	    '.styled-menu': {
	      width: '99%',
	      height: '80%',
	      height: '22%',
	      padding: 7
	    },
	    '.styled-menu': {
	      border: '1px solid transparent',
	      height: '13%',
	      padding: 6
	    },
	    '.twitter-icon': {
	      height: 25,
	      color: '#20B2F3',
	      alignSelf: 'center'
	    },
	    '.twitter-icon-container': {
	      height: 20
	    },
	    span: {
	      marginLeft: 10
	    },
	    li: {
	      cursor: 'pointer'
	    },
	    '#regular-menu': {
	      display: 'flex',
	      listStyle: 'none',
	      justifyContent: 'space-around',
	      alignItems: 'center',
	      width: 600
	    },
	    '.logo-wrapper': {
	      display: 'flex',
	      alignItems: 'center',
	      cursor: 'pointer'
	    },
	    background: '#152D72',
	    height: 60,
	    padding: 10,
	    display: 'flex',
	    justifyContent: 'space-between',
	    alignItems: 'center',
	    color: '#FDFDFB',
	    letterSpacing: '.6px',
	    fontSize: '1.1rem',
	    '#menu-icon, #dropdown-menu': {
	      display: 'none'
	    },
	    [this.props.mediaQueries[1]]: {
	      '.twitter-icon-container': {
	        margin: 7
	      },
	      '.styled-menu': {
	        paddingTop: 15
	      },
	      '#regular-menu': {
	        display: 'none'
	      },
	      '#dropdown-menu': {
	        listStyle: 'none',
	        display: 'block',
	        padding: 0,
	        margin: 0,
	        borderBottomLeftRadius: '10%',
	        position: 'relative',
	        width: 205,
	        height: 210,
	        right: 30
	      },
	      '.dropdown-menu-container': {
	        display: 'flex',
	        height: 280,
	        width: 165,
	        flexDirection: 'column',
	        paddingTop: 22,
	        alignItems: 'flex-start',
	        justifyContent: 'space-around'
	      },
	      '#menu-icon': {
	        alignSelf: 'flex-end',
	        display: 'block',
	        height: 26,
	        marginRight: 15,
	        cursor: 'pointer',
	        background: 'none',
	        color: 'none'
	      },
	      '#dropdown-menu > li': {
	        margin: 6
	      },
	      '.logo-wrapper': {
	        alignSelf: 'center',
	        fontSize: '1.1rem'
	      }
	    },
	    [this.props.mediaQueries[2]]: {
	      '#dropdown-menu': {
	        top: 9
	      },
	      height: 80,
	      '.menu-icon': {
	        height: 25
	      },
	      img: {
	        height: 70
	      }
	    },
	    [this.props.mediaQueries[0]]: {
	      height: 40,
	      fontSize: '1rem',
	      img: {
	        height: 50
	      },
	      '#dropdown-menu': {
	        top: '-9px'
	      }
	    }
	  })
	  const toggleFlexAlignment = this.state.showMenu ? 'flex-start' : 'center'
	  return (
  <Nav style={{ alignItems: toggleFlexAlignment }}>
  <Link href='/'>
  <div className='logo-wrapper'>
      <img src='/static/favicon.png' alt='' />
	          <span>secretnodes.org</span>
	        </div>
</Link>
	      <div style={{ display: ['/privacy-policy', '/_error'].includes(this.props.url.pathname) ? 'none' : '' }} className='dropdown-menu-container'>
      <img onClick={this.dropdownHandler} src='/static/menu-icon.svg' id='menu-icon' aria-haspopup='true' aria-expanded={this.state.showMenu ? 'true' : 'false'} aria-controls='dropdown-menu' />
      {
	          this.state.showMenu
	            ?								<ul id='dropdown-menu' role='menu' aria-labelledby='menu-icon' style={{ background: this.state.showMenu ? 'rgb(79, 133, 182)' : '' }}>
	              <Link href='#secret-nodes'><div className='styled-menu'><li role='menuitem'>Secret Nodes</li></div></Link>
  <Link href='#rewards'><div className='styled-menu'><li role='menuitem'>Rewards</li></div></Link>
	              <Link href='#contributors'><div className='styled-menu'><li role='menuitem'> Contributors</li></div></Link>
  <Link href='/privacy-policy'><div className='styled-menu'><li role='menuitem'>Privacy Policy</li></div></Link>
	              <Link >
	                <li className='twitter-icon-container'>
	                  <a href='https://twitter.com/secretnodes' rel='noopener noreferrer'>
    <img className='twitter-icon' src='/static/twitter.png' alt='' />
  </a>
  </li>
  </Link>
	            </ul>
	            :								null
	        }
	      </div>
	      <ul id='regular-menu' style={{ display: ['/privacy-policy', '/_error'].includes(this.props.url.pathname) ? 'none' : '' }} >
      <Link href='#secret-nodes'><li>Secret Nodes</li></Link>
      <Link href='#rewards'><li>Rewards</li></Link>
      <Link href='#contributors'><li>Contributors</li></Link>
      <Link href='/privacy-policy'><li>Privacy Policy</li></Link>
      <Link >
  <li className='twitter-icon-container'>
  <a href='https://twitter.com/secretnodes' rel='noopener noreferrer'>
  <img className='twitter-icon' src='/static/twitter.png' alt='' />
	            </a>
	          </li>
	        </Link>
    </ul>
	    </Nav>
	  )
	}
}
