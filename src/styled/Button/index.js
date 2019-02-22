import React from 'react'
import styled from '@emotion/styled'

const ButtonPrimary = props => {
  const Button = styled('button')({
    fontFamily: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    border: '2px solid #E82E9D',
    minWidth: 150,
    color: '#000',
    padding: '5px 15px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 11,
    margin: '8px 8px 0 0',
    lineHeight: 1.55,
    cursor: 'pointer',
    textTransform: 'uppercase',
    [props.mediaQueries[0]]: {
      width: 200,
      height: 42,
      fontSize: 15
    }
  })

  return (
    <Button>
      {props.children}
    </Button>
  )
}

export default ButtonPrimary
