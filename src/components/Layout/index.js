import { ContentContainer } from '../styled'
import { Header, Footer } from '../'

const Layout = props =>
  <div>
    <Header {...props} mediaQueries={props.mediaQueries} />
    <ContentContainer>
      {props.children}
    </ContentContainer>
    <Footer mediaQueries={props.mediaQueries} />
  </div>

export default Layout
