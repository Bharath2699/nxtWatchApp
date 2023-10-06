import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {
  ListCardItem,
  Image,
  NavbarLink,
  Heading,
  Contents,
  ContentsFlow,
} from './styledComponents'

const SavedVideoItem = props => {
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
          <ListCardItem>
            <NavbarLink to={`/videos/${id}`}>
              <Image src={thumbnailUrl} alt="thumbnail" />
              <ContentsFlow>
                <Heading color={color}>{title}</Heading>
                <Contents color={contentColor}>{name}</Contents>
                <Contents color={contentColor}>
                  {viewCount} views . {date}
                </Contents>
              </ContentsFlow>
            </NavbarLink>
          </ListCardItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedVideoItem
