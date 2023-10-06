import ThemeContext from '../../Context/ThemeContext'
import {NotFoundContainer, Image, Heading, Content} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const color = isDarkTheme ? 'white' : 'black'
      const url = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer backgroundColor={color}>
          <Image src={url} alt="not found" />
          <Heading color={color}>Page Not Found</Heading>
          <Content color={color}>
            We are sorry, the page uou requested could not be found.
          </Content>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
