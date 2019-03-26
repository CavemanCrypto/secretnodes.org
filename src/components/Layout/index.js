import { ContentContainer, GlobalStyles } from '../styled'
import { Header, Footer } from '../'

const Layout = props =>
  <div>
    <GlobalStyles />
    <Header {...props} mediaQueries={props.mediaQueries} />
    <ContentContainer>
      {props.children}
    </ContentContainer>
    <Footer mediaQueries={props.mediaQueries} />
  </div>

export default Layout
