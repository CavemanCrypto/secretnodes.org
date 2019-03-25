import  { ContentContainer } from '../styled'
import { NavBar, Footer } from '../'

const Layout = props =>
  <div>
    <NavBar {...props} mediaQueries={props.mediaQueries} />
    <ContentContainer>
      {props.children}
    </ContentContainer>
    <Footer mediaQueries={props.mediaQueries} />
  </div>

export default Layout
