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
      <TextContainer mediaQueries={props.mediaQueries}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis nunc sed. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Varius morbi enim nunc faucibus a pellentesque. Risus sed vulputate odio ut enim blandit volutpat. Pellentesque dignissim enim sit amet venenatis. Proin sed libero enim sed faucibus. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Diam maecenas sed enim ut sem viverra aliquet eget sit. Aliquet lectus proin nibh nisl condimentum id. Rhoncus urna neque viverra justo nec. Lobortis elementum nibh tellus molestie nunc non. Malesuada bibendum arcu vitae elementum curabitur. Varius sit amet mattis vulputate enim nulla. Fermentum dui faucibus in ornare quam viverra. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.

Amet nisl purus in mollis nunc. Eget velit aliquet sagittis id. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Aenean pharetra magna ac placerat vestibulum lectus. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam maecenas ultricies mi eget. Hac habitasse platea dictumst quisque. Enim diam vulputate ut pharetra sit. Laoreet non curabitur gravida arcu ac tortor dignissim. Dolor magna eget est lorem ipsum dolor. Pellentesque id nibh tortor id aliquet lectus proin nibh. Platea dictumst quisque sagittis purus. Sed felis eget velit aliquet sagittis id. Vel pharetra vel turpis nunc eget lorem dolor sed.

Nulla facilisi etiam dignissim diam. Non nisi est sit amet facilisis magna etiam. Risus nec feugiat in fermentum posuere urna. Tempor orci eu lobortis elementum nibh tellus. Aenean sed adipiscing diam donec adipiscing. Egestas erat imperdiet sed euismod nisi porta lorem. Sollicitudin ac orci phasellus egestas. Pharetra et ultrices neque ornare aenean euismod. Aliquet risus feugiat in ante. Et molestie ac feugiat sed lectus vestibulum mattis. Faucibus ornare suspendisse sed nisi. Amet nisl purus in mollis nunc sed id semper risus. Eget mauris pharetra et ultrices. Viverra justo nec ultrices dui sapien. Quis ipsum suspendisse ultrices gravida.
      </TextContainer>
      <TextContainer mediaQueries={props.mediaQueries}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Imperdiet proin fermentum leo vel orci. Velit ut tortor pretium viverra suspendisse potenti nullam. Eu turpis egestas pretium aenean pharetra magna ac placerat. Morbi tempus iaculis urna id volutpat lacus laoreet non. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Consectetur a erat nam at lectus urna duis convallis convallis. Praesent elementum facilisis leo vel fringilla est ullamcorper. Dolor sed viverra ipsum nunc aliquet bibendum enim. Nunc vel risus commodo viverra.

Enim neque volutpat ac tincidunt vitae semper. Sodales ut eu sem integer vitae justo eget magna. Mattis nunc sed blandit libero volutpat sed cras ornare. Tellus elementum sagittis vitae et leo duis ut. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Suspendisse sed nisi lacus sed viverra tellus. Et malesuada fames ac turpis egestas. Nec tincidunt praesent semper feugiat nibh. Consectetur adipiscing elit pellentesque habitant morbi. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ac auctor augue mauris augue. Neque sodales ut etiam sit amet nisl purus in. Et netus et malesuada fames ac turpis egestas sed. Ac turpis egestas sed tempus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus.
      </TextContainer>
    </Overview>
  )
}

export default OverviewSection
