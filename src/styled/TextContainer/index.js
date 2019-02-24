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
    [props.mediaQueries[0]]: {
      width: '90%',
      fontSize: '.9em'
    },
    [props.mediaQueries[1]]: {
      width: '85%',
      fontSize: '1.1em',
      padding: 10,
      margin: 10
    },
    [props.mediaQueries[2]]: {
      width: 'calc(45% + 300px)'
    }
  })

  return (
    <Text>
      {props.children}
    </Text>
  )
}

export default TextContainer
