import React from 'react'
import styled from '@emotion/styled'

import TextContainer from '../../styled/TextContainer'

const OverviewSection = props => {
  const Overview = styled('section')({
    height: 'auto',
    maxWidth: '100vw',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    padding: '21px 41px',
    background: '#060B47',
    h1: {
      margin: 0,
      flexBasis: '100%',
      fontWeight: 400,
      letterSpacing: '.6px'
    },
    [props.mediaQueries[1]]: {
      flexDirection: 'column',
      padding: 5,
      alignItems: 'center'
    }
  })

  return (
    <Overview id='secret-nodes'>
      <h1>Overview</h1>
      <TextContainer mediaQueries={props.mediaQueries}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Sed libero enim sed faucibus turpis in eu. Faucibus in ornare quam viverra orci. Justo donec enim diam vulputate ut pharetra sit. Leo vel fringilla est ullamcorper. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Auctor eu augue ut lectus arcu bibendum at varius.
				Leo a diam sollicitudin tempor id eu. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Nisi est sit amet facilisis magna etiam. Congue eu consequat ac felis donec. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Quisque non tellus orci ac auctor augue mauris. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Vel facilisis volutpat est velit egestas dui id ornare. Ac auctor augue mauris augue neque gravida. Sit amet nulla facilisi morbi tempus.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
				Leo a diam sollicitudin tempor id eu. Pellentesque dignissim enim sit amet ve     nenatis urna cursus eget. Nisi est sit amet facilisis magna etiam. Congue eu consequa     t ac felis donec. Nibh nisl condimentum id venenatis a condimentum vitae sapien pelle     ntesque. Quisque non tellus orci ac auctor augue mauris. Faucibus pulvinar elementum      integer enim neque volutpat ac tincidunt. Vel facilisis volutpat est velit egestas du     i id ornare. Ac auctor augue mauris augue neque gravida. Sit amet nulla facilisi morb     i tempus.
      </TextContainer>
    </Overview>
  )
}

export default OverviewSection
