import React from 'react'
import ContentContainer from '../ContentContainer'
import NavBar from '../NavBar'
import Footer from '../Footer'

const Layout = props =>
  <div>
    <NavBar mediaQueries={props.mediaQueries} />
    <ContentContainer>
      {props.children}
    </ContentContainer>
    <style global jsx>{`
      body {
        font-family: 'Titillium Web', sans-serif;
        margin: 0;
        padding: 0;
        background-position: left 145px;
        background-repeat: repeat;
        background-color: #065198;
        background-image: url("/static/background_pattern.png");
        background-size: 900px;
      }	
    `}</style>
    <Footer mediaQueries={props.mediaQueries} />
  </div>

export default Layout
