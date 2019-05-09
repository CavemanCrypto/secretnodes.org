import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

export default class Header extends React.Component {
  render () {
    const Header = styled('header')({
      '.twitter-icon': {
        height: 25,
        color: '#20B2F3',
        alignSelf: 'center'
      },
      a: {
        color: '#FDFDFB',
        textDecoration: 'none'
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
        '#regular-menu': {
          display: 'none'
        },
        '.logo-wrapper': {
          alignSelf: 'center',
          fontSize: '1.1rem'
        }
      },
      [this.props.mediaQueries[2]]: {
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
        }
      }
    })

    return (
      <Header>
        <Link href='/'>
          <div className='logo-wrapper'>
            <img src='/static/favicon.png' alt='' />
            <span>secretnodes.org</span>
          </div>
        </Link>
        <nav>
          <ul id='regular-menu'>
            <a href='#secret-nodes'><li role='link'>Secret Nodes</li></a>
            <a href='#rewards'><li role='link'>Rewards</li></a>
            <a href='#calculator'><li role='link'>Calculator</li></a>
            //<a href='#contributors'><li role='link'>Contributors</li></a>
            <Link href='/privacy-policy'><li role='link'>Privacy Policy</li></Link>
            <li className='twitter-icon-container'>
              <a href='https://twitter.com/secretnodes'>
                <img
                  className='twitter-icon'
                  role='link'
                  src='/static/twitter.png'
                  alt='Follow us on Twitter'
                />
              </a>
            </li>
          </ul>
        </nav>
      </Header>
    )
  }
}
