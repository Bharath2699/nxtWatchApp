import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'

import {
  VideoContainer,
  VideoImage,
  VideoDetailsContainer,
  ProfileImage,
  TextDetails,
  Heading,
  Paragraph,
  ListCard,
  NavbarLink,
} from './styledComponents'

const VideoCard = props => {
  const {videos} = props
  const {
    title,
    thumbnailUrl,
    id,
    viewCount,
    publishedDate,
    name,
    profileImageUrl,
  } = videos

  const date = formatDistanceToNow(new Date(publishedDate))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const color = isDarkTheme ? 'white' : 'black'
        const viewsColor = isDarkTheme ? '#ebebeb' : 'black'
        return (
          <ListCard>
            <NavbarLink to={`/videos/${id}`}>
              <VideoContainer>
                <VideoImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <TextDetails>
                    <Heading color={color}>{title}</Heading>
                    <Heading color={color}>{name}</Heading>
                    <Paragraph color={viewsColor}>
                      {viewCount} views . {date} ago
                    </Paragraph>
                  </TextDetails>
                </VideoDetailsContainer>
              </VideoContainer>
            </NavbarLink>
          </ListCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoCard
