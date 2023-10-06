import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {
  ListCard,
  Image,
  NavbarLink,
  Heading,
  Contents,
  ContentsFlow,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, name, publishedDate, viewCount} = videoDetails
  const date = formatDistanceToNow(new Date(publishedDate))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : 'black'
        const contentColor = isDarkTheme ? '#cbd5e1' : 'black'
        return (
          <ListCard>
            <NavbarLink to={`/videos/${id}`}>
              <Image src={thumbnailUrl} alt="thumbnail" />
              <ContentsFlow>
                <Heading color={color}>{title}</Heading>
                <Contents color={contentColor}>{name}</Contents>
                <Contents color={contentColor}>
                  {viewCount} views . {date} ago
                </Contents>
              </ContentsFlow>
            </NavbarLink>
          </ListCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideoItem
