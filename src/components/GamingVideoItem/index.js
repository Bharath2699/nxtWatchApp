import ThemeContext from '../../Context/ThemeContext'
import {ListCard, Heading, NavbarLink, Image, Content} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : 'black'
        return (
          <ListCard>
            <NavbarLink to={`/videos/${id}`}>
              <Image src={thumbnailUrl} alt="thumbnail" />
              <Heading color={color}>{title}</Heading>
              <Content color={color}>{viewCount} views</Content>
            </NavbarLink>
          </ListCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideoItem
