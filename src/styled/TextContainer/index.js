import React from 'react'
import styled from '@emotion/styled'

const TextContainer = props => {
  const Text = styled('p')({
    color: '#FFF',
    width: '45%',
    margin: 20,
    fontWeight: '200',
    fontSize: '1.1em',
    letterSpacing: '.6px',
    [props.mediaQueries[1]]: {
      width: '85%',
      fontSize: '.9em',
      margin: 10
    },
    [props.mediaQueries[0]]: {
      width: '90%',
      fontSize: '1em'
    }
  })

  return (
    <Text>
      {props.children}
    </Text>
  )
}

export default TextContainer
